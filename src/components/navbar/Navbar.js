import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h3>Logo</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Products">Products</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="about-us">About Us</Link>
        </li>
        <li>
          <Link to="contact-us">Contact Us</Link>
        </li>
      </ul>
      <FaBars className={styles.hamburger} />
    </nav>
  );
};

export default Navbar;
