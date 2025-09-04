import { NavLink } from "react-router-dom";
import MovieIcon from "./icons/MovieIcon";
import SearchIcon from "./icons/SearchIcon";
import HeartIcon from "./icons/HeartIcon";

export default function Navbar() {
    const getLinkClass = ({ isActive }) => {
        const baseClass = "flex items-center gap-2 border border-primary rounded-lg transition-colors font-semibold px-2 py-2 md:px-4";
        if (isActive) {
            return `${baseClass} bg-primary text-secondary`;
        }
        return `${baseClass} text-primary hover:bg-primary/10`; // Estilo inativo com um hover sutil
    };

    return (
        <nav className="flex border-b border-quaternary bg-secondary h-16 text-primary sticky top-0 z-50">
            <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo e Título */}
                <NavLink to="/buscar" className="flex items-center gap-3" aria-label="Página Inicial">
                    <MovieIcon />
                    <h1 className="hidden sm:block text-xl font-bold">CineSpot</h1>
                </NavLink>

                {/* Links de Navegação */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <NavLink to="/buscar" className={getLinkClass}>
                        <SearchIcon className="h-5 w-5" />
                        <span className="hidden md:inline">Buscar</span>
                    </NavLink>

                    <NavLink to="/favoritos" className={getLinkClass}>
                        <HeartIcon className="h-5 w-5" />
                        <span className="hidden md:inline">Favoritos</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}