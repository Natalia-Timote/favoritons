import { Outlet } from "react-router-dom";
import styles from "./LandingPage.module.css";
import Header from "components/Header";
import HalfFavoriteContextProvider from "contexts/HalfFavoriteContext";
import FavoritesProvider from "contexts/FavoriteContext";
import Footer from "components/Footer";

export default function LandingPage() {
    return (
        <main>
            <Header />
            <HalfFavoriteContextProvider>
                <FavoritesProvider>
                    <Outlet />
                </FavoritesProvider>
            </HalfFavoriteContextProvider>
            <Footer />
        </main>
    )
}
