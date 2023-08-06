import styles from "../styles/PlaylistPage.module.css";
import { Songlist } from "../component";

export const PlaylistPage = () => {
  return (
    <div className={styles.black}>
      <div className={styles.back}>
        <div className={styles.block}>
          <div className={styles.top}>
            <img className={styles.play_img}></img>
            <div>
              <h1>Playlist1</h1>
              <p className={styles.user}>homiloki</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.inf}>
                <div className={styles.index}>№</div>
                <div className={styles.title}>Title</div>
                <div className={styles.artist}>Artist</div>
                <div className={styles.liked}>Liked</div>
                <div className={styles.date}>Date added</div>
            </div>
            {new Array(20).fill(0).map((_, index) => (
              <Songlist index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
