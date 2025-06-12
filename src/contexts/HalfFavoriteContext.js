import { createContext, useContext, useState } from "react";

export const HalfFavoriteContext = createContext();
HalfFavoriteContext.displayName = "Meio favorito";

export default function HalfFavoriteContextProvider({ children }) {
    const [halfFavorite, setHalfFavorite] = useState([]);

    return (
        <HalfFavoriteContext.Provider
            value={{ halfFavorite, setHalfFavorite }}
        >
            {children}
        </HalfFavoriteContext.Provider>
    )
}

export function useHalfFavoriteContext() {
    const { halfFavorite, setHalfFavorite } = useContext(HalfFavoriteContext);

    function addHalfFavorite(newHalfFavorite) {
        const repeatHalfFavorite = halfFavorite.some(item => item.id === newHalfFavorite.id);

        const newList = [...halfFavorite];

        if(!repeatHalfFavorite) {
            newList.push(newHalfFavorite);
            return setHalfFavorite(newList);
        }
    }

    function removeHalfFavorite(newHalfFavorite) {
        const newList = [...halfFavorite];
        newList.splice(newList.indexOf(newHalfFavorite), 1);
        return setHalfFavorite(newList);
    }

    return {
        halfFavorite,
        addHalfFavorite,
        removeHalfFavorite
    }
}
