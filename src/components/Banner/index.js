import styles from "./Banner.module.css";

export default function Banner({ url }) {
    return (
        <div
            className={styles.banner}
            style={{
                backgroundImage: `url("/images/banner-${url}.png")`
            }}
        >
        </div>
    )
}
