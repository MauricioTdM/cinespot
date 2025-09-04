import { Link } from 'react-router-dom';
import FavoriteButton from "./FavoriteButton";
import CalendarIcon from "./icons/CalendarIcon";
import StarIcon from "./icons/StarIcon";
import { getImageUrl } from "../services/api";

export default function MovieCard({ movie }) {
    const posterUrl = getImageUrl(movie.poster_path);
    const releaseYear = movie.release_date ? movie.release_date.substring(0, 4) : 'N/A';

    return (
        <Link to={`/filme/${movie.id}`}>
            <div className="text-white bg-quaternary relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col h-full">
                <FavoriteButton movie={movie} />
                <div>
                    <img src={posterUrl} alt={`Pôster do filme ${movie.title}`} />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <div>
                        <div className="mb-3 text-start">
                            <p
                                className="text-lg font-bold min-h-[3.5rem] line-clamp-2"
                                title={movie.title}
                            >
                                {movie.title}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mb-3 text-sm text-gray-300">
                            <div className="flex items-center gap-1.5">
                                <CalendarIcon />
                                <span>{releaseYear}</span>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <StarIcon className={"text-primary"} />
                                <span>{movie.vote_average.toFixed(1)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-start mt-auto">
                        <p
                            className="text-sm text-gray-400 line-clamp-3 leading-relaxed"
                            title={movie.overview}
                        >
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}