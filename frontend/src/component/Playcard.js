import styles from "../styles/Playcard.module.css"
import play from "../images/play.jpg"

export const Playcard = () =>{
    return(
        <>
        <div className={styles.card}>
            <img src={play} className={styles.img}></img>
            <div className={styles.text}>
                <p className={styles.name}>Playlist1</p>
                <p className={styles.des}>description jhkj shg shgs shgsmhg</p>
            </div>
        </div>
        </>
    )
}