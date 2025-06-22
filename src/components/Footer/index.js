import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link to="./">
                <img src={logo} className={styles.image} alt="Logo do Favoritons" />
            </Link>
            <p>Projeto desenvolvido por Natalia Timote através do curso "React: praticando React com JS" da Alura. Fins didáticos.</p>
        </footer>
    )
}