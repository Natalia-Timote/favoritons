import Container from "components/Container";
import styles from "./NotFound.module.css";
import Title from "components/Title";

export default function NotFound() {
    return (
        <Container>
            <div className={styles.message}>
                <Title>
                    <h1>Ops...</h1>
                </Title>
                <p>Parece que você digitou algo errado. Tente novamente!</p>
            </div>
        </Container>
    )
}
