import React from "react";
import styles from '../../styles/Home.module.css';
import { useHover } from '@uidotdev/usehooks';
import Image from 'next/image'
import { motion } from "framer-motion";
// import Toast from 'react-native-root-toast';
 
const imageLoader = ({  }) => {
  return `https://nadesigns.org.za/img/intro-carousel/1.jpg`
}

export default function Home(this: any) {
  const [ref, hovering] = useHover();

// let toast = Toast.show('Request failed to send.', {
//   duration: Toast.durations.LONG,
// });

// setTimeout(function hideToast() {
//   Toast.hide(toast);
// }, 500);

  return (
    <section className={styles.background}>
      <div className="container">
      <motion.div
      initial={{x: 0, opacity: 0}}
      animate={{x: 50, opacity: 1}}
      transition={{
        delay: 0.3,
        duration: 1.05,
      }}>
      <div className="left">
        <article className={styles.helloText} ref={ref}>
          {hovering ? 
          <h1><b>Hi<span className={styles.color}>!</span></b></h1> : <h1>Hello<span className={styles.color}>.</span></h1>
          }
        </article>
        <p className={styles.paragraph}>My name is Nelmari Albertse. I’m a developer and here is my NextJS and ReactJS app. Have a look.</p>
      </div>
      <div className="left-block"></div>
      </motion.div>
      {/* <Toast visible={this.state.visible}>Thanks for subscribing!</Toast> */}
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