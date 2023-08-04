import styles from "../styles/Sidebar.module.css";
import { AiFillHome } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { Playlist } from "../component/Playlist";
import flower from "../images/flower.jpg";

export const Sidebar = () => {
  return (
    <>
      <div>
        <div className={styles.sidebar}>
          <div className={styles.section}>
            <ul>
              <li className={styles.li}>
                <SiApplemusic className={styles.icon1} />
                <h1 href="#" className={styles.link}>
                  Harmony.
                </h1>
              </li>
              <li className={styles.li}>
                <AiFillHome className={styles.icon} />
                <a href="#" className={styles.link}>
                  Home
                </a>
              </li>
              <li className={styles.li}>
                <FaUserCircle className={styles.icon} />
                <a href="#" className={styles.link}>
                  My Profile
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.play_section}>
            <ul>
              <li>
                <BiLibrary className={styles.icon} />
                <a href="#" className={styles.link}>
                  Library
                </a>
              </li>
            </ul>
            <div className={styles.list_sec}>
              <div className={styles.card}>
                <img className={styles.play_img} src={flower}></img>
                <div className={styles.second}>
                  <p className={styles.playlist}>Liked Songs</p>
                  <div className={styles.bot}>
                    <p className={styles.user}>:playlist</p>
                    <p  className={styles.length}>5 songs</p>
                  </div>
                </div>
              </div>
              <div className={styles.line}></div>
              {new Array(20).fill(0).map((_, index) => (
                <Playlist index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
