import styles from "./Home.module.css";
import Banner from "components/Banner";
import Title from "components/Title";
import { TiHeart } from "react-icons/ti";
import Card from "components/Card";
import cartoons from "json/db.json";
import Container from "components/Container";

export default function Home() {
    return (
        <>
            <Banner url="home" />
            <Title>
                <h1>Um lugar para guardar seus desenhos favoritos! <TiHeart /></h1>
            </Title>
            <Container>
                {cartoons.map(cartoon => {
                    return <Card {...cartoon} key={cartoon.id} />
                })}
            </Container>
        </>
    )
}