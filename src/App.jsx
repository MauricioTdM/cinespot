import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Favorites from "./pages/Favorites.jsx"
import Search from "./pages/Search.jsx"
import Layout from "./components/Layout"
import { FavoritesProvider } from "./contexts/FavoritesContext.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";

export default function App() {
    return (
        <FavoritesProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favoritos" element={<Favorites />} />
                        <Route path="/buscar" element={<Search />} />
                        <Route path="/filme/:movieId" element={<MovieDetail />} />
                    </Routes>
                </ Layout>
            </Router>
        </FavoritesProvider>
    )
}