import styles from "./HeaderLink.module.css";
import { Link } from "react-router-dom";

export default function HeaderLink({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}
