import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_icon from "../../assets/menu_open.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [setMenu, Menu] = useState();
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <>
      <div className="Navbar">
        <img className="menu_open" onClick={openMenu} src={menu_icon} />
        <div ref={menuRef} className="Navbar-container">
          <div className="navbar-left" onClick={closeMenu}>
            <Link to="/home"><h2>SJ</h2></Link>
          </div>
          <div className="navbar-middle">
            <Link onClick={closeMenu} to="/home"><p>Home</p></Link>
            <Link onClick={closeMenu} to="/about"><p>About</p></Link>
            <Link onClick={closeMenu} to="/education"><p>Education</p></Link>
            <Link onClick={closeMenu} to="/articles"><p>Article</p></Link>
          </div>
          <div className="navbar-right">
            <AnchorLink
              className="anchor-link"
              onClick={closeMenu}
              offset={50}
              href="#contact"
            ></AnchorLink>
          </div>
        </div>
      </div >
    </>
  );
};

export default Navbar;
