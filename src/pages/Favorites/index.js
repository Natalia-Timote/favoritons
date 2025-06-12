import Banner from "components/Banner";
import styles from "./Favorites.module.css";
import Title from "components/Title";
import { TiHeart } from "react-icons/ti";
import Card from "components/Card";
import Container from "components/Container";
import { useFavoriteContext } from "contexts/FavoriteContext";

export default function Favorites() {
    const { favorite } = useFavoriteContext();

    return (
        <>
            <Banner url="favorites" />
            <Title>
                <h1>Meus desenhos favoritos <TiHeart /></h1>
            </Title>
            <Container>
                {favorite.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </Container>
        </>
    )
}
