import { useHalfFavoriteContext } from "contexts/HalfFavoriteContext";
import styles from "./HalfFavorites.module.css";
import { TiHeartHalfOutline } from "react-icons/ti";
import Card from "components/Card";
import Banner from "components/Banner";
import Title from "components/Title";
import Container from "components/Container";

export default function HalfFavorites() {
    const { halfFavorite } = useHalfFavoriteContext();

    return (
        <>
            <Banner url="half-favorites" />
            <Title>
                <h1>Os desenhos que fizeram parte da minha infância, mas eu não gostava tanto assim... <TiHeartHalfOutline /></h1>
            </Title>
            <Container>
                {halfFavorite.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </Container>
        </>
    )
}
