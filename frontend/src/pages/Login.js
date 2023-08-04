import styles from "../styles/Login.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

export const Login = () => {
  return (
    <>
      <div className={styles.big_img}>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <div className={styles.top}>
              <h1 className={styles.title}>Log In</h1>
            </div>
            <div className={styles.bottom}>
              <div>
                <input
                  className={styles.input_field}
                  placeholder="Email"
                ></input>
                <HiOutlineMail className={styles.icon} />
              </div>
              <div>
                <input
                  className={styles.input_field}
                  placeholder="Password"
                ></input>
                <BiLockAlt className={styles.icon} />
              </div>
              <div className={styles.bot2_sec}>
                <div className={styles.rem_sec}>
                  <input type="checkbox"></input>
                  <p style={{ color: "white" }}>remember me</p>
                </div>
                <a href="#" style={{ color: "white" }}>
                  Forgot password?
                </a>
              </div>
              <div>
                <button className={styles.btn}>Log In</button>
              </div>
            </div>
            <span className={styles.account}>
              Don't have a account?<a href="sign" style={{color:"white", marginLeft:"10px"}}>Sign Up</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
