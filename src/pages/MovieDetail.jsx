import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getImageUrl, getMovieCredits } from "../services/api";
import DetailCard from "../components/DetailCard";
import MovieDetailsSkeleton from "../components/MovieDetailsSkeleton";
import StarIcon from "../components/icons/StarIcon";

const formatDate = (iso) =>
    iso ? new Date(iso).toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "2-digit" }) : "—";

const minutesToHM = (m) => {
    if (!m && m !== 0) return "—";
    const h = Math.floor(m / 60);
    const min = m % 60;
    return `${h}h ${min}min`;
};

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState({ director: null, cast: [] });
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchDetails = async () => {
            try {
                setIsLoading(true);
                const [movieData, creditsData] = await Promise.all([
                    getMovieDetails(movieId),
                    getMovieCredits(movieId)
                ]);
                setMovie(movieData);
                setCredits(creditsData);
            } catch (error) {
                console.error("Não foi possível carregar os detalhes do filme.", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDetails();
        window.scrollTo(0, 0);
    }, [movieId]);

    if (isLoading) {
        return <MovieDetailsSkeleton />;
    }

    if (!movie) {
        return <div className="text-center text-red-500 text-2xl p-10">Filme não encontrado.</div>;
    }

    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "—";

    return (
        <div className="min-h-screen text-white bg-secondary pt-5">
            {/* Primeira seção */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Poster */}
                <div>
                    <img
                        src={getImageUrl(movie.poster_path, "w300")}
                        alt={movie.title}
                        className="rounded-2xl shadow-2xl"
                    />
                </div>

                {/* Info principal */}
                <div className="flex flex-col gap-4 max-w-3xl">
                    {/* Gêneros */}
                    <div className="flex flex-wrap gap-2">
                        {movie.genres.map((g) => (
                            <span key={g.id} className="px-3 py-1 rounded-full text-sm bg-quaternary">
                                {g.name}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl font-extrabold">
                        {movie.title} <span className="text-white/50 font-medium">({year})</span>
                    </h1>

                    {/* Nota e votos */}
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-primary font-bold text-xl">
                            <StarIcon className="w-7 h-7 inline-block" /> {movie.vote_average.toFixed(1)}
                        </span>
                        <span className="text-white/70">{movie.vote_count.toLocaleString()} votos</span>
                    </div>

                    {/* Data de lançamento e duração */}
                    <div className="flex gap-6 text-white/80">
                        <span>Lançamento: {formatDate(movie.release_date)}</span>
                        <span>Duração: {minutesToHM(movie.runtime)}</span>
                    </div>

                    {movie.homepage && (
                        <a
                            href={movie.homepage}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-4 px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:opacity-90 transition self-start"
                        >
                            Assistir Trailer
                        </a>
                    )}
                </div>
            </div>

            {/* Segunda seção */}
            <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
                {/* Sinopse */}
                {movie.overview && (
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-primary">Sinopse</h2>
                        <p className="leading-relaxed text-white/90">{movie.overview}</p>
                    </section>
                )}

                {/* Detalhes adicionais */}
                <section className="grid sm:grid-cols-2 gap-6">
                    <DetailCard title="Título original" value={movie.original_title} />
                    {credits.director && (
                         <DetailCard title="Diretor(a)" value={credits.director.name} />
                    )}
                    <DetailCard title="País(es) de origem" value={movie.origin_country.join(", ")} />
                    <DetailCard title="Produtoras" value={movie.production_companies.map((p) => p.name).join(", ")} />
                    <DetailCard title="País(es) de produção" value={movie.production_countries.map((c) => c.name).join(", ")} />
                    <DetailCard title="Idiomas falados" value={movie.spoken_languages.map((l) => l.english_name).join(", ")} />
                    <DetailCard title="Orçamento" value={movie.budget > 0 ? `US$ ${movie.budget.toLocaleString()}` : "—"} />
                    <DetailCard title="Bilheteria" value={movie.revenue > 0 ? `US$ ${movie.revenue.toLocaleString()}` : "—"} />
                </section>
                {credits.cast && credits.cast.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Elenco Principal</h2>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            {credits.cast.map((actor) => (
                                <div key={actor.id} className="text-center">
                                    <img
                                        src={getImageUrl(actor.profile_path, "w185")}
                                        alt={actor.name}
                                        className="rounded-lg shadow-md mx-auto aspect-[2/3] object-cover bg-quaternary"
                                    />
                                    <p className="font-semibold mt-2 text-sm break-words">{actor.name}</p>
                                    <p className="text-xs text-white/70 break-words">{actor.character}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}