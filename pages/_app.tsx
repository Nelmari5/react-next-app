import {AppProps} from 'next/app';
import {useEffect, useState} from 'react';
import '../styles/globals.css';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { wrapper } from './info/store/store';
import { ToastProvider } from "react-toast-notifications";

function App({Component, pageProps}: AppProps) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  if (isServer) return null;

  const router = useRouter();

  return (
    <ToastProvider autoDismiss={true} >
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
      </motion.div>
    </AnimatePresence>
    </ToastProvider>
  );
}

export default wrapper.withRedux(App);