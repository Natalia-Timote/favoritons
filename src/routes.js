import Footer from "components/Footer";
import Header from "components/Header";
import FavoritesProvider from "contexts/FavoriteContext";
import HalfFavoriteContextProvider from "contexts/HalfFavoriteContext";
import Favorites from "pages/Favorites";
import HalfFavorites from "pages/HalfFavorites";
import Home from "pages/Home";
import LandingPage from "pages/LandingPage";
import NotFound from "pages/NotFound";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage />}>
                            <Route index element={<Home />}></Route>
                            <Route path="halffavorites" element={<HalfFavorites />}></Route>
                            <Route path="favorites" element={<Favorites />}></Route>
                            <Route path=":id" element={<Player />}></Route>
                            <Route path="*" element={<NotFound />}></Route>
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}