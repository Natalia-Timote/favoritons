import Header from "components/Header";
import styles from "./Home.module.css";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Title from "components/Title";
import { TiHeart } from "react-icons/ti";
import Card from "components/Card";

export default function Home() {
    return (
        <>
            <Header />
            <Banner url="home" />
            <Title>
                <h1>Um lugar para guardar seus desenhos favoritos! <TiHeart /></h1>
            </Title>
            <section className={styles.cards}>
            <Card 
                title="As meninas super-poderosas" 
                date="1998" 
                description="Acidentalmente criadas em laboratório por um professor, três irmãs combatem os malfeitores em Townsville." 
                image="/images/cartoons/as-meninas-super-poderosas.png" 
            />
            </section>
            <Footer />
        </>
    )
}