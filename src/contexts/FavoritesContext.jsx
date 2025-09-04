import { createContext, useState, useContext, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favoriteMovies');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (movie) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some((fav) => fav.id === movie.id);

            if (isFavorite) {
                return prevFavorites.filter((fav) => fav.id !== movie.id);
            } else {
                return [...prevFavorites, movie];
            }
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}