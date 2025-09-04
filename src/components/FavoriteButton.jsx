import { useFavorites } from "../contexts/FavoritesContext";
import HeartIcon from "./icons/HeartIcon";

export default function FavoriteButton({ movie }) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        toggleFavorite(movie); 
    };

    return(
        <button 
            className="flex items-center justify-center top-4 right-4 rounded-xl absolute w-10 h-10 bg-gray-900 z-10" 
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
            <HeartIcon 
                className={isFavorite ? "text-primary" : "text-white"}
                isFavorite={isFavorite} 
            />
        </button>
    )
}
