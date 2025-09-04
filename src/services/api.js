import axios from "axios";

const apiToken = import.meta.env.VITE_TMDB_API_TOKEN;

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiToken}`
    }
})

export const getNowPlayingMovies = async (page = 1) => {
    try {
        const response = await api.get("/movie/now_playing", {
            params: {language: 'pt-BR', page: page},
        });
        
        return {
            movies: response.data.results,
            totalPages: response.data.total_pages
        };
    } catch (error) {
        console.error("Erro ao buscar filmes em cartaz:", error);
        return { movies: [], totalPages: 0 };
    }
};

export const searchMovies = async (query, page = 1) => {
    try {
        const response = await api.get("/search/movie", {
            params: {
                query: query,
                language: 'pt-BR',
                page: page,
                include_adult: false,
            },
        });
        
        return {
            movies: response.data.results,
            totalPages: response.data.total_pages > 500 ? 500 : response.data.total_pages
        };
    } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        return { movies: [], totalPages: 0 };
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}`, {
            params: {
                language: 'pt-BR',
                append_to_response: 'videos', 
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
        throw error;
    }
};

export const getMovieCredits = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}/credits`, {
            params: { language: 'pt-BR' }
        });
        const director = response.data.crew.find(member => member.job === 'Director');
        const cast = response.data.cast.slice(0, 6);

        return { director, cast };
    } catch (error) {
        console.error("Erro ao buscar créditos do filme:", error);
        return { director: null, cast: [] };
    }
};

const imageUrlBase = "https://image.tmdb.org/t/p/";
export const getImageUrl = (path, size = "w500") => {
  if (!path) {
    return "https://via.placeholder.com/500x750.png?text=No+Image";
  }
  return `${imageUrlBase}${size}${path}`;
};