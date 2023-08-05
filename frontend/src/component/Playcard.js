import styles from "../styles/Playcard.module.css"
import play from "../images/play.jpg"

export const Playcard = () =>{
    return(
        <>
        <div className={styles.card}>
            <img src={play} className={styles.img} alt="play"></img>
            <div className={styles.text}>
                <p className={styles.name}>Playlist1</p>
                <p className={styles.des}>description</p>
            </div>
        </div>
        </>
    )
}