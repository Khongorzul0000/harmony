import styles from "../styles/Home.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Playcard, Addpopup } from "../component";
import { useState } from "react";

export const Home = () => {
  const [button, setButton] = useState(false);

  return (
    <div>
      <div className={styles.back}>
        <div className={styles.main}>
          <Addpopup trigger={button} setTrigger={setButton}></Addpopup>
          <div className={styles.big_img}>
            <div className={styles.wrapper}></div>
          </div>
          <div className={styles.play_part}>
            <div className={styles.create_playlist}>
              <p className={styles.create}>Create playlist</p>
              <AiOutlinePlusCircle
                className={styles.icon}
                onClick={() => setButton(true)}
              />
            </div>
            {new Array(5).fill(0).map((_, index) => (
              <Playcard index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
