import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './info/Navbar';
import Home from './info/Home';
import About from './info/About';
import { motion } from 'framer-motion';
import Topics from './info/Topics';

export default function App() {
  return (
    <Router>
      <Navbar/>
      <motion.main
        initial={{y: 25, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{
          delay: 0.9,
          duration: 0.75,
        }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </motion.main>
    </Router>
  );
}