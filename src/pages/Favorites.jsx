import { useFavorites } from '../contexts/FavoritesContext';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
    const { favorites } = useFavorites();

    return (
        <div className="mt-10 pb-10">
            <h2 className="text-3xl text-primary mb-8 text-center">Meus Filmes Favoritos</h2>

            {favorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 text-center text-xl">
                    Você ainda não adicionou nenhum filme aos favoritos.
                </p>
            )}
        </div>
    );
}