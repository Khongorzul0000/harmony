import styles from "../styles/Signup.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { useState } from "react";

export const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <>
      <div className={styles.big_img}>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <div className={styles.top}>
              <h1 className={styles.title}>Sign Up</h1>
            </div>
            <div className={styles.bottom}>
              <div>
                <input
                  className={styles.input_field}
                  placeholder="Username"
                  onChange={(e) =>setName(e.target.value)}
                ></input>
                <AiOutlineUser className={styles.icon} />
              </div>
              <div>
                <input
                  className={styles.input_field}
                  placeholder="Email"
                  onChange={(e) =>setEmail(e.target.value)}
                ></input>
                <HiOutlineMail className={styles.icon} />
              </div>
              <div>
                <input
                  className={styles.input_field}
                  placeholder="Password"
                  onChange={(e) =>setPassword(e.target.value)}
                ></input>
                <BiLockAlt className={styles.icon} />
              </div>
              <div className={styles.bot2_sec}>
                <div className={styles.rem_sec}>
                  <input type="checkbox"></input>
                  <p style={{ color: "white" }}>remember me</p>
                </div>
              </div>
              <div>
                <button className={styles.btn}>Sign Up</button>
              </div>
            </div>
            <span className={styles.account}>
              Have a account?<a href="login" style={{color:"white", marginLeft:"10px"}}>Login</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
