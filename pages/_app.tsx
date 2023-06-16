import {AppProps} from 'next/app';
import {useEffect, useState} from 'react';
import '../styles/globals.css';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { wrapper } from './info/store/store';
// import Toast from "react-native-toast-message";

function App({Component, pageProps}: AppProps) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  if (isServer) return null;

  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 0.75,
      }}
      variants={{
       initialState: {
         opacity: 0,
       },
       animateState: {
         opacity: 1,
       },
       exitState: {

       }
      }}
      >
        <Component {...pageProps}/>
      {/* Your main component */}
      {/* <Toast /> */}
      </motion.div>
    </AnimatePresence>
  );
}

export default wrapper.withRedux(App);