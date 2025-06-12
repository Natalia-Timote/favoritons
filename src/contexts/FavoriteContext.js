import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoriteContext.Provider
            value={{ favorite, setFavorite }}
        >
            {children}
        </FavoriteContext.Provider>
    )

}

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoriteContext);

    function addFavorite(newFavorite) {
        const repeatFavorite = favorite.some(item => item.id === newFavorite.id);

        const newList = [...favorite];

        if (!repeatFavorite) {
            newList.push(newFavorite);
            return setFavorite(newList);
        }
    }

    function removeFavorite(newFavorite) {
        const newList = [...favorite];
        newList.splice(newList.indexOf(newFavorite), 1);
        return setFavorite(newList);
    }
    
    return {
        favorite,
        addFavorite,
        removeFavorite
    }
}
