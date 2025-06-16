import Banner from "components/Banner";
import styles from "./Player.module.css";
import Title from "components/Title";
import { useParams } from "react-router-dom";
import cartoons from "json/db.json";
import Container from "components/Container";
import NotFound from "pages/NotFound";


export default function Player() {
    const params = useParams();
    const video = cartoons.find((video) => {
        return video.id === Number(params.id);
    });

    if(!video) {
        return <NotFound />
    }

    return (
        <>
            <Container className={styles.container}>
                <Banner url="home" />
                <Title>
                    <h1>Player</h1>
                </Title>
                <iframe
                    width="100%"
                    src={video.video}
                    title={video.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                >
                </iframe>
            </Container>
        </>
    )
}