import { NavLink } from "react-router-dom";
import MovieIcon from "./icons/MovieIcon";
import SearchIcon from "./icons/SearchIcon";
import HeartIcon from "./icons/HeartIcon";

export default function Navbar() {
    const getLinkClass = ({ isActive }) => {
        const baseClass = "flex items-center gap-2 border border-primary px-4 py-2 rounded-lg transition-colors";
        if (isActive) {
            return `${baseClass} bg-primary text-secondary`; // Estilo ativo
        }
        return `${baseClass} text-primary`; // Estilo inativo
    };

    return (
        <div className="flex border border-quaternary bg-secondary h-15 text-primary">
            <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <MovieIcon />
                    <h1 className="text-xl">CineSpot</h1>
                </div>

                <div className="flex items-center gap-4">
                    <NavLink to="/buscar" className={getLinkClass}>
                        {({ isActive }) => (
                            <>
                                <SearchIcon color={isActive ? "#16181c" : "#fbd15f"} /> Buscar
                            </>
                        )}
                    </NavLink>

                    <NavLink to="/favoritos" className={getLinkClass}>
                        {({ isActive }) => (
                            <>
                                <HeartIcon className={isActive ? "text-secondary" : "text-primary"} /> Favoritos
                            </>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}