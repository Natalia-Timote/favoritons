import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Header.module.css";
import HeaderLink from "components/HeaderLink";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} className={styles.image} alt="Logo do Favoritons" />
            </Link>
            <nav className={styles.nav}>
               <HeaderLink url="./">
                Página inicial 
               </HeaderLink>
               <HeaderLink url="./Favorites">
                Favoritos
               </HeaderLink>
            </nav>
        </header>
    )
}
