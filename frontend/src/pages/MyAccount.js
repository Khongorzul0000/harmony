import styles from "../styles/MyAccount.module.css";
import { Playcard } from "../component";
export const MyAccount = () => {
  return (
    <>
      <div className={styles.back}>
        <div className={styles.big_img}>
          <div className={styles.wrapper}>
            <div className={styles.block}>
              <div className={styles.top}>
                <div className={styles.pro_pic}></div>
                <h1 className={styles.username}>Homiloki</h1>
              </div>
              <h1 className={styles.h1_play}>Change you'r profile</h1>
              <div className={styles.pro_change}>
                <div className={styles.floor}>
                  <p className={styles.dep}>Username</p>
                  <input
                    className={styles.input}
                    placeholder="Homiloki"
                  ></input>
                </div>
                <div className={styles.floor}>
                  <p className={styles.dep}>Email</p>
                  <input
                    className={styles.input}
                    placeholder="aa@gmail.com"
                  ></input>
                </div>
                <div className={styles.floor}>
                  <p className={styles.dep}>Profile picture</p>
                  <input className={styles.input} placeholder="url..."></input>
                </div>
              </div>
              <h1 className={styles.h1_play}>You'r all playlists</h1>
              <div className={styles.lists}>
                {new Array(10).fill(0).map((_, index) => (
                  <Playcard index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
