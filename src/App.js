import Lottie from 'lottie-react';
import './App.scss';
import gradient from './background/gradient.svg'
import noise from './background/noise.svg'
import signature from './hero-section/SIGNATURE.json'
import carousel from './hero-section/carousel.json'
import resume from './resume.pdf'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

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

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", 
    (latest) => {
      console.log(latest);
    }
  );

  return (
    <>
      <motion.header
        variants={introFade}
        initial="hidden"
        animate="visible"  
      >
        <h6 id="header-logo">ERIC LIN 嘉宏</h6>
        <div id="header-tabs">
          {/* <p><a href="">About Me</a></p> */}
          <p><a href="https://github.com/ericlinjh">Github</a></p>
          <p><a href="https://www.linkedin.com/in/ericlinjh/">Linkedin</a></p>
          <p><a href={resume} target="_blank">Resume</a></p>
        </div>
      </motion.header>

      <div className="hero-section">
        <div className="left-hero">
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
            <p>Product Manager, Front-end Developer, UI Designer</p>
          </motion.div>
        </div>

        <motion.div 
          className="right-hero"
          variants={introFade}
          initial="hidden"
          animate="visible"
        >
            <Lottie
              animationData={carousel}
              loop={true}
              autoplay={true}
            />
        </motion.div>
       

        <Lottie
        animationData={signature}
        loop={false}
        autoplay={true}
        id="signature"
        />
      </div>
      
{/* 
      <div>
        <h3>
          ABOUT ME * ABOUT ME * ABOUT ME *  
        </h3>
      </div> */}


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
