import React from "react";
import styles from '../../styles/Home.module.css';
import { useHover } from '@uidotdev/usehooks';

import Image from 'next/image'
import { motion } from "framer-motion";
 
const imageLoader = ({  }) => {
  return `https://nadesigns.org.za/img/intro-carousel/1.jpg`
}

export default function Home() {
  const [ref, hovering] = useHover();

  return (
    <section className={styles.background}>
      <div className="container">

      <motion.div
      initial={{x: 0, opacity: 0}}
      animate={{x: 50, opacity: 1}}
      transition={{
        delay: 0.3,
        duration: 0.85,
      }}>
      <div className="left">
        <article className={styles.helloText} ref={ref}>
          {hovering ? 
          <h1><b>Hi!</b></h1> : <h1>Hello.</h1>
          }
        </article>
        <p>My name is Nelmari Albertse. I’m a photographer and heres is my portfolio. Have a look.</p>
      </div>
      </motion.div>

      <motion.div
      initial={{x: 50, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{
        delay: 0.9,
        duration: 0.95,
      }}>
      <div className="right">
        <Image
          loader={imageLoader}
          src="me.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      </motion.div>
      </div>


    </section>
    

  );  
}