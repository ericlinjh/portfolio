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
                <p><a href="https://github.com/ericlinjh" rel="noreferrer" target="_blank">Github</a></p>
                <p><a href="https://www.linkedin.com/in/ericlinjh/" rel="noreferrer" target="_blank">Linkedin</a></p>
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

        <div className="infinite-scroll" id="projects-scroll">
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
                                    initial: {y: "0%"},
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

        <div className="infinite-scroll" id="work-exp-scroll">
            <div>
                <h3>
                    WORK EXPERIENCE
                </h3>
                <h5>
                    ✴
                </h5>
                <h3>
                    WORK EXPERIENCE
                </h3>
                <h5>
                    ✴
                </h5>
            </div>
            <div aria-hidden="true">
                <h3>
                    WORK EXPERIENCE
                </h3>
                <h5>
                    ✴
                </h5>
                <h3>
                    WORK EXPERIENCE
                </h3>
                <h5>
                    ✴
                </h5>
            </div>
        </div>

        <div className="jobs">
            <motion.a
                initial="initial"
                whileHover="hovered"
                href="https://texadasoftware.com/"
                rel="noreferrer"
                target="_blank"
                className="jobs-indiv"
                id="texada"
            >
                <div className="job-date">
                    <p className="p2">
                        JAN - APR 2024
                    </p>
                </div>
                <div className="job-details">
                    <div className="job-title">
                        <p><b>Technical Project Manager · Texada Software</b></p>
                        <motion.div
                            variants={{
                                initial: {y: 0},
                                hovered: {y: "-2px", x: "2px"}
                            }}
                            transition={{
                                type: "linear",
                                duration: 0.1
                            }}
                        >
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M0.263225 12.2368C0.431987 12.4053 0.660751 12.5 0.899267 12.5C1.13778 12.5 1.36655 12.4053 1.53531 12.2368L10.1999 3.5722V10.4007C10.1999 10.6394 10.2947 10.8683 10.4635 11.0371C10.6323 11.2059 10.8612 11.3007 11.0999 11.3007C11.3387 11.3007 11.5676 11.2059 11.7364 11.0371C11.9052 10.8683 12 10.6394 12 10.4007V1.40006C12 1.16135 11.9052 0.932415 11.7364 0.763621C11.5676 0.594827 11.3387 0.5 11.0999 0.5H2.09935C1.86064 0.5 1.6317 0.594827 1.46291 0.763621C1.29411 0.932415 1.19929 1.16135 1.19929 1.40006C1.19929 1.63877 1.29411 1.8677 1.46291 2.0365C1.6317 2.20529 1.86064 2.30012 2.09935 2.30012H8.9278L0.263225 10.9647C0.0946735 11.1335 0 11.3622 0 11.6007C0 11.8392 0.0946735 12.068 0.263225 12.2368Z"
                                      fill="#FBFBFE"/>
                            </svg>
                        </motion.div>
                    </div>
                    <p className="p2">
                        Managed the development of the Service Agreement Quoter, guiding product, team, and
                        client
                        through stages of product development lifecycle and ensuring features were ready by
                        client-set deadlines.
                        Guided ISO/SOC security compliance changes with employees across company, increasing
                        compliance percentage by 20% before audit deadline.
                        Revamped and implemented New Product Initiative Lifecycle process through the use of
                        POCs,
                        trial runs, and demos.
                    </p>
                </div>
        </motion.a>
        <a href="https://innovapost.com/" rel="noreferrer" target="_blank" className="jobs-indiv"
           id="innovapost">
            <div className="job-date">
                <p className="p2">
                    MAY - AUG 2023
                </p>
            </div>
            <div className="job-details">
                <motion.div
                    initial="initial"
                    whileHover="hovered"
                    href={""}
                    className="job-title"
                >
                    <p><b>Scrum Master / Project Manager · Innovapost</b></p>
                    <motion.div
                        variants={{
                            initial: {y: 0},
                            hovered: {y: "-2px", x: "2px"}
                        }}
                        transition={{
                            type: "linear",
                            duration: 0.1
                        }}
                    >
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.263225 12.2368C0.431987 12.4053 0.660751 12.5 0.899267 12.5C1.13778 12.5 1.36655 12.4053 1.53531 12.2368L10.1999 3.5722V10.4007C10.1999 10.6394 10.2947 10.8683 10.4635 11.0371C10.6323 11.2059 10.8612 11.3007 11.0999 11.3007C11.3387 11.3007 11.5676 11.2059 11.7364 11.0371C11.9052 10.8683 12 10.6394 12 10.4007V1.40006C12 1.16135 11.9052 0.932415 11.7364 0.763621C11.5676 0.594827 11.3387 0.5 11.0999 0.5H2.09935C1.86064 0.5 1.6317 0.594827 1.46291 0.763621C1.29411 0.932415 1.19929 1.16135 1.19929 1.40006C1.19929 1.63877 1.29411 1.8677 1.46291 2.0365C1.6317 2.20529 1.86064 2.30012 2.09935 2.30012H8.9278L0.263225 10.9647C0.0946735 11.1335 0 11.3622 0 11.6007C0 11.8392 0.0946735 12.068 0.263225 12.2368Z"
                                  fill="#FBFBFE"/>
                        </svg>
                    </motion.div>
                </motion.div>
                <p className="p2">
                    Co-ordinated development of Canada Post Mobile app on both iOS and Android, leading bi-weekly agile ceremonies improving team velocity by 9%.
                    Defined and updated road maps encompassing work of 4 cross-functional teams, leading to an increase of 2 minor
                    releases per month.
                    Successfully orchestrated and streamlined the management of 16 software releases by coordinating change requests,
                    fostering effective collaboration with other teams.
                </p>
            </div>
        </a>
        <a href="https://www.createwithnova.com/" rel="noreferrer" target="_blank" className="jobs-indiv" id="nova">
            <div className="job-date">
                <p className="p2">
                    SEP - DEC 2022
                </p>
            </div>
            <div className="job-details">
                <motion.div
                    initial="initial"
                    whileHover="hovered"
                    href={""}
                    className="job-title"
                >
                    <p><b>Product Manager · Nova</b></p>
                    <motion.div
                        variants={{
                            initial: {y: 0},
                            hovered: {y: "-2px", x: "2px"}
                        }}
                        transition={{
                            type: "linear",
                            duration: 0.1
                        }}
                    >
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.263225 12.2368C0.431987 12.4053 0.660751 12.5 0.899267 12.5C1.13778 12.5 1.36655 12.4053 1.53531 12.2368L10.1999 3.5722V10.4007C10.1999 10.6394 10.2947 10.8683 10.4635 11.0371C10.6323 11.2059 10.8612 11.3007 11.0999 11.3007C11.3387 11.3007 11.5676 11.2059 11.7364 11.0371C11.9052 10.8683 12 10.6394 12 10.4007V1.40006C12 1.16135 11.9052 0.932415 11.7364 0.763621C11.5676 0.594827 11.3387 0.5 11.0999 0.5H2.09935C1.86064 0.5 1.6317 0.594827 1.46291 0.763621C1.29411 0.932415 1.19929 1.16135 1.19929 1.40006C1.19929 1.63877 1.29411 1.8677 1.46291 2.0365C1.6317 2.20529 1.86064 2.30012 2.09935 2.30012H8.9278L0.263225 10.9647C0.0946735 11.1335 0 11.3622 0 11.6007C0 11.8392 0.0946735 12.068 0.263225 12.2368Z"
                                  fill="#FBFBFE"/>
                        </svg>
                    </motion.div>
                </motion.div>
                <p className="p2">
                    Launched Video Creatives product, defining future features in a three-year roadmap with userflows, mockups, and wireframes.
                    Conducted user research on over 200 clients and 3,000 platform users through A/B testing, analyzing customer data
                    trends, and visual user analytics, determining order of priorities.
                    Investigated and applied data-driven insights through MySQL to prioritise upcoming feature development, resulting
                    in a 15% user engagement boost.
                    Designed, documented, and presented UI/UX flow prototypes for 30+ features and improvements using Figma.
                </p>
            </div>
        </a>
        <a href="https://www.desouzainstitute.com/" rel="noreferrer" target="_blank" className="jobs-indiv"
           id="desouza">
            <div className="job-date">
                <p className="p2">
                    JAN - APR 2022
                </p>
            </div>
            <div className="job-details">
                <motion.div
                    initial="initial"
                    whileHover="hovered"
                    href={""}
                    className="job-title"
                >
                    <p><b>DevOps Engineering Intern · de Souza Institute</b></p>
                    <motion.div
                        variants={{
                            initial: {y: 0},
                            hovered: {y: "-2px", x: "2px"}
                        }}
                        transition={{
                            type: "linear",
                            duration: 0.1
                        }}
                    >
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.263225 12.2368C0.431987 12.4053 0.660751 12.5 0.899267 12.5C1.13778 12.5 1.36655 12.4053 1.53531 12.2368L10.1999 3.5722V10.4007C10.1999 10.6394 10.2947 10.8683 10.4635 11.0371C10.6323 11.2059 10.8612 11.3007 11.0999 11.3007C11.3387 11.3007 11.5676 11.2059 11.7364 11.0371C11.9052 10.8683 12 10.6394 12 10.4007V1.40006C12 1.16135 11.9052 0.932415 11.7364 0.763621C11.5676 0.594827 11.3387 0.5 11.0999 0.5H2.09935C1.86064 0.5 1.6317 0.594827 1.46291 0.763621C1.29411 0.932415 1.19929 1.16135 1.19929 1.40006C1.19929 1.63877 1.29411 1.8677 1.46291 2.0365C1.6317 2.20529 1.86064 2.30012 2.09935 2.30012H8.9278L0.263225 10.9647C0.0946735 11.1335 0 11.3622 0 11.6007C0 11.8392 0.0946735 12.068 0.263225 12.2368Z"
                                  fill="#FBFBFE"/>
                        </svg>
                    </motion.div>
                </motion.div>
                <p className="p2">
                    Implemented UI/UX updates to front-end design of the e-Learning Centre, serving a new modern, responsive, and
                    accessible platform to 18,000+ health care professionals.
                    Developed and launched a React-based virtual library site collecting medical articles from across the internet,
                    bolstering site security and optimizing performance.
                </p>
            </div>
        </a>
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
)
    ;
}

export default App;
