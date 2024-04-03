import Lottie from 'lottie-react';
import './App.scss';
import gradient from './background/gradient.svg'
import noise from './background/noise.svg'
import signature from './hero-section/SIGNATURE.json'
import { motion } from 'framer-motion'

const introFade = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 100,
    transition: { delay: 2, duration: 1.5 },
    ease: "easeInOut"
  }
}

const introTextAnimation = {
  initial: {
    x: -400
  },
  animate: {
    x: 0,
    transition: {
      delay: 2,
      duration: 1,
      ease: "easeInOut"
    }
  }
}

function App() {
  return (
    <>
      <motion.header
        variants={introFade}
        initial="hidden"
        animate="visible"  
      >
        <h6 id="header-logo">ERIC LIN 嘉宏</h6>
        <div id="header-tabs">
          <p1><a href="">About Me</a></p1>
          <p1><a href="">Resume</a></p1>
        </div>
      </motion.header>

      <motion.div 
        class="intro"
        variants={introFade}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={introTextAnimation}
          initial="initial"
          animate="animate"
        >
          Hi,
        </motion.h1>
        <div>
          <motion.h1
            variants={introTextAnimation}
            initial="initial"
            animate="animate"
          >
            I'm
          </motion.h1>
          <div class="text-container">
            <motion.h1
              variants={introTextAnimation}
              initial="initial"
              animate="animate"
            >
                Eric
            </motion.h1>
          </div>
        </div>
        <p1>Product Manager, Front-end Developer, UI Designer</p1>
      </motion.div>

      <Lottie
      animationData={signature}
      loop={false}
      autoplay={true}
      id="signature"
      />


      <motion.img 
        id="background-noise" 
        src={noise}
        variants={introFade}
        initial="hidden"
        animate={{ opacity: "15%" }}
      />
      <motion.img
        id="background-gradient"
        src={gradient}
        variants={introFade}
        initial="hidden"
        animate="visible"
      />

    </>
  );
}

export default App;
