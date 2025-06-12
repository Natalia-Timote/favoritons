import Footer from "components/Footer";
import Header from "components/Header";
import FavoritesProvider from "contexts/FavoriteContext";
import HalfFavoriteContextProvider from "contexts/HalfFavoriteContext";
import Favorites from "pages/Favorites";
import HalfFavorites from "pages/HalfFavorites";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <HalfFavoriteContextProvider>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/halffavorites" element={<HalfFavorites />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                </Routes>
            </FavoritesProvider>
            </HalfFavoriteContextProvider>
            <Footer />
        </BrowserRouter>
    )
}