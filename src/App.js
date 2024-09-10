import Lottie from 'lottie-react';
import './App.scss';
import gradient from './background/gradient.svg'
import noise from './background/noise.svg'
import signature from './hero-section/SIGNATURE.json'
//import carousel from './hero-section/carousel.json'
import resume from './resume.pdf'
import {motion, useMotionValue, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import {useRef} from "react"
import nova_preview from './projects/nova_preview.png'
import g_aim from './projects/garbage-aim.png'

const introFade = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 100,
        transition: {delay: 2, duration: 1.5},
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

const projectsVariant = {
    initial: {
        opacity: 0.66
    },
    whileHover: {
        opacity: 1
    }
}

function App() {
    const ref = useRef(null);

    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const top = useTransform(y, [0, 1], ["0", "100%"])
    const left = useTransform(x, [0, 1], ["0", "100%"])

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width;
        const yPct = mouseY / height;

        x.set(xPct);
        y.set(yPct);
    };

    const {scrollYProgress} = useScroll();

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
                    <p><a href={resume} rel="noreferrer" target="_blank">Resume</a></p>
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
                            <div className="text-container">
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

                {/*<motion.div */}
                {/*  className="right-hero"*/}
                {/*  variants={introFade}*/}
                {/*  initial="hidden"*/}
                {/*  animate="visible"*/}
                {/*>*/}
                {/*    <Lottie*/}
                {/*      animationData={carousel}*/}
                {/*      loop={true}*/}
                {/*      autoplay={true}*/}
                {/*    />*/}
                {/*</motion.div>*/}
            </div>

            <Lottie
                animationData={signature}
                loop={false}
                autoplay={true}
                id="signature"
            />

            <div className="infinite-scroll">
                <div>
                    <h3>
                        PROJECTS
                    </h3>
                    <h5>
                        ✴
                    </h5>
                    <h3>
                        PROJECTS
                    </h3>
                    <h5>
                        ✴
                    </h5>
                    <h3>
                        PROJECTS
                    </h3>
                    <h5>
                        ✴
                    </h5>
                </div>
                <div aria-hidden="true">
                    <h3>
                        PROJECTS
                    </h3>
                    <h5>
                        ✴
                    </h5>
                    <h3>
                        PROJECTS
                    </h3>
                    <h5>
                        ✴
                    </h5>
                    <h3>
                        PROJECTS
                    </h3>
                    <h5>
                        ✴
                    </h5>
                </div>
            </div>

            <div className="projects">
                <div className="projects-list">
                    <motion.a
                        href={"https://github.com/ericlinjh/portfolio"}
                        target="_blank"
                        ref={ref}
                        onMouseMove={handleMouseMove}
                        initial="initial"
                        whileHover="whileHover"
                        variants={projectsVariant}
                        className="projects-indiv"
                    >
                        <div className="projects-info">
                            <div
                                className="projects-titlebox"
                            >
                                <motion.h5
                                    variants={{
                                        initial: {y: 0},
                                        whileHover: {y: "-100%"}
                                    }}
                                    transition={{
                                        type: "linear",
                                        duration: 0.1
                                    }}
                                >
                                    Personal Website
                                </motion.h5>
                                <motion.h5
                                    variants={{
                                        initial: {y: "0%" },
                                        whileHover: {y: "-100%"}
                                    }}
                                    transition={{
                                        type: "linear",
                                        duration: 0.1
                                    }}
                                    style={{position: "absolute"}}
                                >Personal Website
                                </motion.h5>
                            </div>
                            <div className="projects-attributes">
                                <p>DESIGN</p>
                                <p>DEVELOPMENT</p>
                            </div>
                            <motion.img
                                src={nova_preview}
                                alt={"Image showing project"}
                                className="hovered_img"
                                style={{
                                    top: top,
                                    left: left,
                                    translateX: "-50%",
                                    translateY: "-30%"
                                }}
                                variants={{
                                    initial: {
                                        scale: 0,
                                        rotate: "-12.5deg"
                                    },
                                    whileHover: {
                                        scale: 1,
                                        rotate: "0"
                                    }
                                }}
                            />
                        </div>
                        <hr/>
                    </motion.a>
                    <motion.a
                        href={"https://github.com/ericlinjh/stormhacks-2022"}
                        target="_blank"
                        ref={ref}
                        onMouseMove={handleMouseMove}
                        initial="initial"
                        whileHover="whileHover"
                        variants={projectsVariant}
                        className="projects-indiv"
                    >
                        <div className="projects-info">
                            <div
                                className="projects-titlebox"
                            >
                                <motion.h5
                                    variants={{
                                        initial: {y: 0},
                                        whileHover: {y: "-100%"}
                                    }}
                                    transition={{
                                        type: "linear",
                                        duration: 0.1
                                    }}
                                >
                                    Garbage Aim
                                </motion.h5>
                                <motion.h5
                                    variants={{
                                        initial: {y: "0%"},
                                        whileHover: {y: "-100%"}
                                    }}
                                    transition={{
                                        type: "linear",
                                        duration: 0.1
                                    }}
                                    style={{position: "absolute"}}
                                >Garbage Aim
                                </motion.h5>
                            </div>
                            <div className="projects-attributes">
                                <p>DESIGN</p>
                                <p>DEVELOPMENT</p>
                            </div>
                        </div>
                        <motion.img
                            src={g_aim}
                            alt={"Image showing project"}
                            className="hovered_img"
                            style={{
                                top: top,
                                left: left,
                                translateX: "-50%",
                                translateY: "-30%"
                            }}
                            variants={{
                                initial: {
                                    scale: 0,
                                    rotate: "-12.5deg"
                                },
                                whileHover: {
                                    scale: 1,
                                    rotate: "0"
                                }
                            }}
                        />
                        <hr/>
                    </motion.a>
                    <svg id="bot-left" width="25" height="25" viewBox="0 0 25 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_237_268" fill="white">
                            <path d="M0 0H25V25H0V0Z"/>
                        </mask>
                        <path d="M0 25H-1V26H0V25ZM25 24H0V26H25V24ZM1 25V0H-1V25H1Z" fill="#FBFBFE"
                              mask="url(#path-1-inside-1_237_268)"/>
                    </svg>
                    <svg id="bot-right" width="25" height="25" viewBox="0 0 25 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_237_269" fill="white">
                            <path d="M0 0H25V25H0V0Z"/>
                        </mask>
                        <path d="M25 25V26H26V25H25ZM24 0V25H26V0H24ZM25 24H0V26H25V24Z" fill="#FBFBFE"
                              mask="url(#path-1-inside-1_237_269)"/>
                    </svg>
                    <svg id="top-left" width="25" height="25" viewBox="0 0 25 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_237_271" fill="white">
                            <path d="M0 0H25V25H0V0Z"/>
                        </mask>
                        <path d="M0 0V-1H-1V0H0ZM0 1H25V-1H0V1ZM1 25V0H-1V25H1Z" fill="#FBFBFE"
                              mask="url(#path-1-inside-1_237_271)"/>
                    </svg>
                    <svg id="top-right" width="25" height="25" viewBox="0 0 25 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_237_270" fill="white">
                            <path d="M0 0H25V25H0V0Z"/>
                        </mask>
                        <path d="M25 0H26V-1H25V0ZM0 1H25V-1H0V1ZM24 0V25H26V0H24Z" fill="#FBFBFE"
                              mask="url(#path-1-inside-1_237_270)"/>
                    </svg>
                </div>
            </div>
            <motion.img
                id="background-noise"
                src={noise}
                variants={introFade}
                initial="hidden"
                animate={{opacity: "40%"}}
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
