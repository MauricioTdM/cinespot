import { useEffect, useState } from "react"
import { getNowPlayingMovies, searchMovies } from "../services/api"
import MovieCard from "./MovieCard"
import MovieCardSkeleton from "./MovieCardSkeleton"

export default function MoviesSection({ query }) {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (query) {
            setCurrentPage(1);
        }
    }, [query]);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            try {
                let data;
                // Se houver uma query, busca por ela
                if (query) {
                    data = await searchMovies(query, currentPage);
                } else {
                    // Senão, busca os filmes populares (comportamento padrão)
                    data = await getNowPlayingMovies(currentPage);
                }
                setMovies(data.movies || []);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error("Falha ao buscar filmes:", error);
                setMovies([]);
            } finally {
                setIsLoading(false)
            }
        }

        fetchMovies();
        window.scrollTo(0, 0);
    }, [query, currentPage])

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleGoToFirstPage = () => {
        setCurrentPage(1);
    };

    const handleGoToLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <div className="mt-10 pb-10">
            <div className="flex items-center justify-between text-primary mb-5">
                <h2 className="text-2xl capitalize">
                    {query ? `Resultados para: "${query}"` : "Filmes Populares"}
                </h2>
                {totalPages > 0 && <p>Página {currentPage} de {totalPages}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {isLoading ? (
                    Array.from({ length: 10 }).map((_, index) => (
                        <MovieCardSkeleton key={index} />
                    ))
                ) :
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8 flex-wrap">
                    {/* Botão para a Primeira Página */}
                    <button
                        onClick={handleGoToFirstPage}
                        disabled={currentPage === 1 || isLoading}
                        className="border border-primary bg-primary text-secondary w-24 sm:w-28 rounded-xl py-2 cursor-pointer hover:bg-[#c7a655] transition-all duration-300 ease-in-out disabled:bg-gray-600 disabled:border-gray-600 disabled:cursor-not-allowed"
                    >
                        Primeira
                    </button>

                    {/* Botão Anterior */}
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1 || isLoading}
                        className="border border-primary bg-primary text-secondary w-24 sm:w-28 rounded-xl py-2 cursor-pointer hover:bg-[#c7a655] transition-all duration-300 ease-in-out disabled:bg-gray-600 disabled:border-gray-600 disabled:cursor-not-allowed"
                    >
                        Anterior
                    </button>

                    {/* Indicador de Página Atual */}
                    <span className="text-primary font-bold px-2 text-center">
                        {currentPage} / {totalPages}
                    </span>

                    {/* Botão Próxima */}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages || isLoading}
                        className="border border-primary bg-primary text-secondary w-24 sm:w-28 rounded-xl py-2 cursor-pointer hover:bg-[#c7a655] transition-all duration-300 ease-in-out disabled:bg-gray-600 disabled:border-gray-600 disabled:cursor-not-allowed"
                    >
                        Próxima
                    </button>

                    {/* Botão para a Última Página */}
                    <button
                        onClick={handleGoToLastPage}
                        disabled={currentPage === totalPages || isLoading}
                        className="border border-primary bg-primary text-secondary w-24 sm:w-28 rounded-xl py-2 cursor-pointer hover:bg-[#c7a655] transition-all duration-300 ease-in-out disabled:bg-gray-600 disabled:border-gray-600 disabled:cursor-not-allowed"
                    >
                        Última
                    </button>
                </div>
            )}
        </div>
    )
}