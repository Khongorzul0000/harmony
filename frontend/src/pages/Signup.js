import styles from "../styles/Signup.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate 

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios
    .post('http://localhost:8888/usercreate', {name, email, password})
    .then(result => console.log(result))
    .catch(err =>console.log(err))
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
                  placeholder="Email@gmail.com"
                  onChange={(e) =>setEmail(e.target.value)}
                ></input>
                <HiOutlineMail className={styles.icon} />
              </div>
              <div>
                <input
                  className={styles.input_field}
                  placeholder="Password character must be more than 8"
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
                <button className={styles.btn} onClick={handleSubmit}>Sign Up</button>
              </div>
            </div>
            <span className={styles.account}>
              Have a account?<a href="/login" style={{color:"white", marginLeft:"10px"}}>Login</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
