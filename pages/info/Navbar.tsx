import React, { useEffect, useRef, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    BrowserRouter,
} from 'react-router-dom';
import NextLink from 'next/link';
import styles from '../../styles/Navbar.module.css';
import { motion } from 'framer-motion';

import { selectAuthState, setAuthState } from './store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from "react-toast-notifications";

const Navbar = () => {
    let authState = useSelector(selectAuthState);
    const dispatch = useDispatch();
    setAuthState(false);
    const { addToast } = useToasts();

    useState(() => {
      if (authState === false){
        addToast("You are Logged Out!", { appearance: "warning" }) 
      }
    });   
    
    return (
        <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.1,
                duration: 0.75,
            }}>
            <nav
                className={styles.navbar}
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-start">
                    <ul className={styles.menu}>
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

                        <div className={styles.floatright}>
                            <button
                                onClick={() =>  
                                  
                                    authState
                                        ? dispatch(setAuthState(false))
                                        : dispatch(setAuthState(true))
                                }>
                                {authState ? 'Logout' : 'LogIn'}
                            </button>
                        </div>
                    </ul>
                </div>
            </nav>
            
        </motion.div>
    );
};

export default Navbar;