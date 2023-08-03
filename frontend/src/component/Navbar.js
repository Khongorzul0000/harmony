import "../styles/Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
    <div className="wrapper">
      <header className="header">
        <div className="nav-logo">
          <p>Harmony.</p>
        </div>
        <nav ref={navRef}>
          <div className="nav-menu">
            <ul>
              <li>
                <AiFillHome className="icon"/>
                <a href="#" className="link">
                  Home
                </a>
              </li>
              <li>
                <BiLibrary className="icon"/>
                <a href="#" className="link">
                  Library
                </a>
              </li>
              <li>
                <AiFillHeart className="icon"/>
                <a href="#" className="link">
                  Favorite playlist
                </a>
              </li>
            </ul>
            <div className="nav-btn-drop">
              <button className="btn">Sign Up</button>
              <button className="btn">Sign In</button>
            </div>
          </div>
          <div className="close" onClick={showNavbar}>
            <FaTimes />
          </div>
        </nav>
        <div className="lines" onClick={showNavbar}>
          <FaBars />
        </div>
        <div className="nav-btn">
          <button className="btn">Sign Up</button>
          <button className="btn">Sign In</button>
        </div>
      </header>
    </div>
  </>
  );
};
