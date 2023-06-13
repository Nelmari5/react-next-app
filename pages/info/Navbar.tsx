import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';
import NextLink from 'next/link';
import styles from '../../styles/Navbar.module.css';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{y: 25, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{
        delay: 0.1,
        duration: 0.75,
      }}>
    <nav className={styles.navbar}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-start">
          <ul className={styles.menu}>

            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <NextLink href="/settings">Settings (SSR)</NextLink>
              </li>
          </ul>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </motion.div>

  );
};

export default Navbar;