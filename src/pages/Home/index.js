import Header from "components/Header";
import styles from "./Home.module.css";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Title from "components/Title";
import { TiHeart } from "react-icons/ti";
import Card from "components/Card";
import cartoons from "json/db.json";

export default function Home() {
    return (
        <>
            <Header />
            <Banner url="home" />
            <Title>
                <h1>Um lugar para guardar seus desenhos favoritos! <TiHeart /></h1>
            </Title>
            <section className={styles.cards}>
                {cartoons.map(cartoon => {
                    return <Card {...cartoon} key={cartoon.id} />
                })}
            </section>
            <Footer />
        </>
    )
}