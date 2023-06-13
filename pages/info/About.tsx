import React from "react";
import styles from "../../styles/About.module.css"
import { motion } from "framer-motion";

const About = () => (
  <div className={styles.background}>
    <motion.div
      initial={{y: 25, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{
        delay: 0.3,
        duration: 0.75,
      }}>
    <h1 className="title is-1" >This is the About Page</h1>
    <p>
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
      in efficitur arcu congue. Nam fermentum commodo egestas.
    </p>
    </motion.div>
  </div>
);

export default About;
