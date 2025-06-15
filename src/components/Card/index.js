import styles from "./Card.module.css";
import { TiHeartFullOutline, TiHeartHalfOutline, TiHeartOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { useFavoriteContext } from "contexts/FavoriteContext";
import { useHalfFavoriteContext } from "contexts/HalfFavoriteContext";
import { Link } from "react-router-dom";

export default function Card({ id, image, title, date, description }) {
    const [count, setCount] = useState(0);
    const [isFavorite, setIsFavorite] = useState(<TiHeartOutline />);
    const { favorite, addFavorite, removeFavorite } = useFavoriteContext();
    const { halfFavorite, addHalfFavorite, removeHalfFavorite } = useHalfFavoriteContext();

    function handleClick() {
        setCount(prev => (prev < 2 ? prev + 1 : 0));
        console.log(count);

        if (count === 0) {
            addHalfFavorite({ id, image, title, date, description });
            setIsFavorite(<TiHeartHalfOutline />);
        }

        if (count === 1) {
            removeHalfFavorite({ id, image, title, date, description });
            addFavorite({ id, image, title, date, description });
            setIsFavorite(<TiHeartFullOutline />);
        }

        if (count === 2) {
            removeFavorite({ id, image, title, date, description });
            setIsFavorite(<TiHeartOutline />);
        }
    }

    useEffect(() => {
        const inFavorite = favorite.some(item => item.id === id);
        const inHalfFavorite = halfFavorite.some(item => item.id === id);

        if (inFavorite) {
            setCount(2);
            setIsFavorite(<TiHeartFullOutline />);
        } else if (inHalfFavorite) {
            setCount(1);
            setIsFavorite(<TiHeartHalfOutline />);
        } else {
            setCount(0);
            setIsFavorite(<TiHeartOutline />);
        }
    }, [favorite, halfFavorite, id]);

    return (
        <div className={styles.card}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={image} alt={title} className={styles.image} />
                <h2 className={styles.title}>{title}</h2>
            </Link>
            <div className={styles.cardinfo}>
                <h3>{date}</h3>
                <p>{description}</p>
                <button
                    className={styles.favorite}
                    onClick={() => {
                        handleClick()
                    }}
                >{isFavorite}</button>
            </div>
        </div >
    )
}
