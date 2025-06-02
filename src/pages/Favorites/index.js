import Banner from "components/Banner";
import styles from "./Favorites.module.css";
import Title from "components/Title";
import { TiHeart } from "react-icons/ti";
import Card from "components/Card";
import Container from "components/Container";

export default function Favorites() {
    return (
        <>
            <Banner url="favorites" />
            <Title>
                <h1>Meus desenhos favoritos <TiHeart /></h1>
            </Title>
            <Container>
                <Card
                    image="images/cartoons/as-meninas-super-poderosas.png"
                    title="As Meninas Super-Poderosas"
                    date="1998"
                    description="Três meninas com superpoderes enfrentam vilões para salvar Townsville."
                />
            </Container>
        </>
    )
}
