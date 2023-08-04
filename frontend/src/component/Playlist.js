import styles from "../styles/Playlist.module.css";
import play from "../images/play.jpg";

export const Playlist = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={play} className={styles.play_img}></img>
        <div className={styles.second}>
          <p className={styles.playlist}>playlist1</p>
          <div className={styles.bot}>
            <p className={styles.user}>:playlist</p>
            <p className={styles.length}>12songs</p>
          </div>
        </div>
      </div>
    </>
  );
};
