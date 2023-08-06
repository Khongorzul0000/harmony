import styles from "../styles/Songlist.module.css";
import theme5 from "../images/theme5.jpg";
import { AiFillHeart } from "react-icons/ai";

export const Songlist = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.index}>
          <p>1.</p>
        </div>
        <div className={styles.img_wid}>
          <img src={theme5} className={styles.img}></img>
        </div>
        <div className={styles.title}>Summ Saddness</div>
        <div className={styles.artist}>Lana del rey</div>
        <div className={styles.like}>
          <AiFillHeart className={styles.heart} />
        </div>
        <div className={styles.date}>
          <p>2023-08-06</p>
        </div>
      </div>
    </>
  );
};
