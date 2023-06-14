import React from "react";
import styles from "../../styles/About.module.css"
import { motion } from "framer-motion";
import Image from 'next/image'

const imageLoader1 = ({  }) => {
  return `https://images.unsplash.com/photo-1495837139561-4a6359962783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80`
}
const imageLoader2 = ({ }) => {
  return `https://images.unsplash.com/photo-1686119249382-c1157a607aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80`
}
const imageLoader3 = ({ }) => {
  return `https://images.unsplash.com/photo-1675186402592-05c87ae206a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80`
}
const imageLoader4 = ({ }) => {
  return `https://images.unsplash.com/photo-1683731333542-b52cfe230b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80`
}

const About = () => (
  <div className={styles.background}>
    <motion.div
      initial={{y: 25, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{
        delay: 0.3,
        duration: 0.75,
      }}>
    
    <div className={styles.container}>
  <div className={styles.box}>
  <Image
          loader={imageLoader1}
          src="me.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
    <span>Image UNO</span>
  </div>
  <div className={styles.box}>
  <Image
          loader={imageLoader2}
          src="me.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
    <span>Image DOS</span>
  </div>
  <div className={styles.box}>
  <Image
          loader={imageLoader3}
          src="me.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
    <span>Image TRES</span>
  </div>
  <div className={styles.box}>
  <Image
          loader={imageLoader4}
          src="me.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
    <span>Image Qwatro</span>
  </div>
</div>




    </motion.div>
  </div>
);

export default About;
