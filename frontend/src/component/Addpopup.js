import styles from "../styles/Addpopup.module.css";
import { RxCross2 } from "react-icons/rx";

export const Addpopup = (props) => {
  return (props.trigger) ? (
    <div className={styles.back}>
      <div className={styles.pop_up}>
        <div>
          <RxCross2 className={styles.icon} onClick={() =>props.setTrigger(false)}/>
        </div>
        <h1 className={styles.title}>Create Playlist</h1>
        <div className={styles.floor2}>
          <div className={styles.floor}>
            <p className={styles.text}>Name:</p>
            <input className={styles.input} placeholder="Anime..."></input>
          </div>
          <div className={styles.floor}>
            <p className={styles.text}>Description:</p>
            <input className={styles.input} placeholder="Relax..."></input>
          </div>
        </div>
        <div className={styles.floor3}>
          <p className={styles.text}>Image:</p>
          <input className={styles.input} placeholder="Url..."></input>
        </div>
        <div className={styles.floor4}>
            <button className={styles.btn}>Create</button>
        </div>
      </div>
    </div>
  ):"";
};
