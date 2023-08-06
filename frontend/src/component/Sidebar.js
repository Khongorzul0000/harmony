import styles from "../styles/Sidebar.module.css";
import { AiFillHome } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { Playlist } from "../component/Playlist";
import flower from "../images/flower.jpg";
import { Link } from "react-router-dom";
import { PlaylistPage } from "../pages";

export const Sidebar = () => {
  return (
    <div className={styles.di}>
        <div className={styles.wait}>
          <div className={styles.sidebar}>
            <div className={styles.section}>
              <ul>
                <li className={styles.li}>
                  <SiApplemusic className={styles.icon1} />
                  <p className={styles.link}>Harmony.</p>
                </li>
                <li className={styles.li}>
                  <AiFillHome className={styles.icon} />
                  <Link to="home" className={styles.link0}>
                    Home
                  </Link>
                </li>
                <li className={styles.li}>
                  <FaUserCircle className={styles.icon} />
                  <Link to="my-account" className={styles.link0}>
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.play_section}>
              <ul>
                <li className={styles.li}>
                  <BiLibrary className={styles.icon} />
                  <p href="#" className={styles.link}>
                    Library
                  </p>
                </li>
              </ul>
              <div className={styles.list_sec}>
                <div className={styles.card}>
                  <img className={styles.play_img} src={flower} alt="flower"></img>
                  <div className={styles.second}>
                    <p className={styles.playlist}>Liked Songs</p>
                    <div className={styles.bot}>
                      <p className={styles.user}>:playlist</p>
                      <p className={styles.length}>5 songs</p>
                    </div>
                  </div>
                </div>
                <div className={styles.line}></div>
                {new Array(6).fill(0).map((_, index) => (
                  <Playlist index={index} />
                ))}
                {/* <div className={styles.btns}>
                  <button className={styles.btn}>
                    <Link to="sign-up" className={styles.link}>
                      Sign Up
                    </Link>
                  </button>
                  <button className={styles.btn}>
                    <Link to="login" className={styles.link}>
                      Sign In
                    </Link>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <PlaylistPage/>
    </div>
  );
};
