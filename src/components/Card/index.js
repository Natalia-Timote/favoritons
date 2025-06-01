import styles from "./Card.module.css";
import { TiHeartFullOutline, TiHeartHalfOutline, TiHeartOutline } from "react-icons/ti";
import { useEffect, useState } from "react";

export default function Card({ image, title, date, description }) {
    const [count, setCount] = useState(0);
    const [isFavorite, setIsFavorite] = useState(<TiHeartOutline />);

    function handleClick() {
        setCount(prev => (prev < 2 ? prev + 1 : 0));
        console.log(count);
    }

    useEffect(() => {
        if (count === 0) return setIsFavorite(<TiHeartOutline />)
        if (count === 1) return setIsFavorite(<TiHeartHalfOutline />)
        return setIsFavorite(<TiHeartFullOutline />)
    }, [count]);

    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.cardinfo}>
                <h2 className={styles.title}>{title}</h2>
                <h3>{date}</h3>
                <p>{description}</p>
                <button onClick={handleClick} className={styles.favorite}>{isFavorite}</button>
            </div>
        </div>
    )
}
