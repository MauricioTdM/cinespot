import { useState } from "react";
import SearchIcon from "../components/icons/SearchIcon";
import MoviesSection from "../components/MoviesSection";

export default function Search() {
    const [inputValue, setInputValue] = useState("");
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        setQuery(inputValue);
    };

    return (
        <>
            <div className="flex flex-col gap-8">
                <h2 className="text-primary text-center text-5xl mt-5">CineSpot</h2>
                <span className="text-gray-400 text-center text-xl">Descubra e explore sua coleção de filmes favoritos</span>
                <form className="flex justify-center" onSubmit={handleSearch}>
                    <div className="relative flex items-center">
                        <SearchIcon className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
                        <input className="bg-[#1b1d22] border border-quaternary w-50 md:w-100 lg:w-150 placeholder-gray-400 pl-12 pr-5 py-2 rounded-xl focus:outline-none focus:border-primary text-gray-400" type="text" placeholder="Buscar filme..." value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </div>

                    <button className="border border-primary bg-primary text-secondary ml-4 w-28 rounded-xl cursor-pointer hover:bg-[#c7a655] transition-all duration-300 ease-in-out">Buscar</button>
                </form>
            </div>
            <MoviesSection query={query} />
        </>
    )
}