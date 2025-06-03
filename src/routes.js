import Footer from "components/Footer";
import Header from "components/Header";
import FavoritesProvider from "contexts/FavoriteContext";
import Favorites from "pages/Favorites";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                </Routes>
            </FavoritesProvider>
            <Footer />
        </BrowserRouter>
    )
}