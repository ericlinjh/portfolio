import Lottie from 'lottie-react';
import './App.scss';
import gradient from './background/gradient.svg'
import noise from './background/noise.svg'
import signature from './hero-section/SIGNATURE.json'
//import carousel from './hero-section/carousel.json'
import resume from './resume.pdf'
import {motion, stagger, useMotionValue, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import {useRef} from "react"
import personal_website from './projects/personal-website.png'
import g_aim from './projects/garbage-aim.png'
import { Link, Route, Switch } from "wouter";

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

    const gradient_scroll = useTransform(scrollYProgress, [0, 0.7], ["100%", "0%"])

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
                    <p><Link href="/about">About Me</Link></p>
                    <p><a href={resume} rel="noreferrer" target="_blank">Resume</a></p>
                </div>
            </motion.header>

            <div className="hero-section">
                <div className="left-hero">
                    <motion.div
                        className="intro"
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
                                src={personal_website}
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
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M0.263225 12.2368C0.431987 12.4053 0.660751 12.5 0.899267 12.5C1.13778 12.5 1.36655 12.4053 1.53531 12.2368L10.1999 3.5722V10.4007C10.1999 10.6394 10.2947 10.8683 10.4635 11.0371C10.6323 11.2059 10.8612 11.3007 11.0999 11.3007C11.3387 11.3007 11.5676 11.2059 11.7364 11.0371C11.9052 10.8683 12 10.6394 12 10.4007V1.40006C12 1.16135 11.9052 0.932415 11.7364 0.763621C11.5676 0.594827 11.3387 0.5 11.0999 0.5H2.09935C1.86064 0.5 1.6317 0.594827 1.46291 0.763621C1.29411 0.932415 1.19929 1.16135 1.19929 1.40006C1.19929 1.63877 1.29411 1.8677 1.46291 2.0365C1.6317 2.20529 1.86064 2.30012 2.09935 2.30012H8.9278L0.263225 10.9647C0.0946735 11.1335 0 11.3622 0 11.6007C0 11.8392 0.0946735 12.068 0.263225 12.2368Z"
                                          fill="#FBFBFE"/>
                                </svg>
                            </motion.div>
                        </div>
                        <p className="p2">
                            Managed the development of the Service Agreement Quoter, guiding product, team, and
                            client through stages of product development lifecycle and ensuring features were ready by
                            client-set deadlines.
                            Guided ISO/SOC security compliance changes with employees across company, increasing
                            compliance percentage by 20% before audit deadline.
                            Revamped and implemented New Product Initiative Lifecycle process through the use of
                            POCs, trial runs, and demos.
                        </p>
                    </div>
                </motion.a>
                <motion.a
                    initial="initial"
                    whileHover="hovered"
                    href="https://innovapost.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="jobs-indiv"
                    id="innovapost"
                >
                    <div className="job-date">
                        <p className="p2">
                            MAY - AUG 2023
                        </p>
                    </div>
                    <div className="job-details">
                        <div className="job-title">
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
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M0.263225 12.2368C0.431987 12.4053 0.660751 12.5 0.899267 12.5C1.13778 12.5 1.36655 12.4053 1.53531 12.2368L10.1999 3.5722V10.4007C10.1999 10.6394 10.2947 10.8683 10.4635 11.0371C10.6323 11.2059 10.8612 11.3007 11.0999 11.3007C11.3387 11.3007 11.5676 11.2059 11.7364 11.0371C11.9052 10.8683 12 10.6394 12 10.4007V1.40006C12 1.16135 11.9052 0.932415 11.7364 0.763621C11.5676 0.594827 11.3387 0.5 11.0999 0.5H2.09935C1.86064 0.5 1.6317 0.594827 1.46291 0.763621C1.29411 0.932415 1.19929 1.16135 1.19929 1.40006C1.19929 1.63877 1.29411 1.8677 1.46291 2.0365C1.6317 2.20529 1.86064 2.30012 2.09935 2.30012H8.9278L0.263225 10.9647C0.0946735 11.1335 0 11.3622 0 11.6007C0 11.8392 0.0946735 12.068 0.263225 12.2368Z"
                                          fill="#FBFBFE"/>
                                </svg>
                            </motion.div>
                        </div>
                        <p className="p2">
                            Co-ordinated development of Canada Post Mobile app on both iOS and Android, leading
                            bi-weekly agile ceremonies improving team velocity by 9%.
                            Defined and updated road maps encompassing work of 4 cross-functional teams, leading to an
                            increase of 2 minor releases per month.
                            Successfully orchestrated and streamlined the management of 16 software releases by
                            coordinating change requests, fostering effective collaboration with other teams.
                        </p>
                    </div>
                </motion.a>
                <motion.a
                    initial="initial"
                    whileHover="hovered"
                    href="https://createwithnova.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="jobs-indiv"
                   id="nova">
                    <div className="job-date">
                        <p className="p2">
                            SEP - DEC 2022
                        </p>
                    </div>
                    <div className="job-details">
                        <div className="job-title">
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
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M0.263225 12.2368C0.431987 12.4053 0.660751 12.5 0.899267 12.5C1.13778 12.5 1.36655 12.4053 1.53531 12.2368L10.1999 3.5722V10.4007C10.1999 10.6394 10.2947 10.8683 10.4635 11.0371C10.6323 11.2059 10.8612 11.3007 11.0999 11.3007C11.3387 11.3007 11.5676 11.2059 11.7364 11.0371C11.9052 10.8683 12 10.6394 12 10.4007V1.40006C12 1.16135 11.9052 0.932415 11.7364 0.763621C11.5676 0.594827 11.3387 0.5 11.0999 0.5H2.09935C1.86064 0.5 1.6317 0.594827 1.46291 0.763621C1.29411 0.932415 1.19929 1.16135 1.19929 1.40006C1.19929 1.63877 1.29411 1.8677 1.46291 2.0365C1.6317 2.20529 1.86064 2.30012 2.09935 2.30012H8.9278L0.263225 10.9647C0.0946735 11.1335 0 11.3622 0 11.6007C0 11.8392 0.0946735 12.068 0.263225 12.2368Z"
                                          fill="#FBFBFE"/>
                                </svg>
                            </motion.div>
                        </div>
                        <p className="p2">
                            Launched Video Creatives product, defining future features in a three-year roadmap with
                            userflows, mockups, and wireframes.
                            Conducted user research on over 200 clients and 3,000 platform users through A/B testing,
                            analyzing customer data
                            trends, and visual user analytics, determining order of priorities.
                            Investigated and applied data-driven insights through MySQL to prioritise upcoming feature
                            development, resulting
                            in a 15% user engagement boost.
                            Designed, documented, and presented UI/UX flow prototypes for 30+ features and improvements
                            using Figma.
                        </p>
                    </div>
                </motion.a>
                <motion.a
                    initial="initial"
                    whileHover="hovered"
                    href="https://desouzainstitute.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="jobs-indiv"
                   id="desouza">
                    <div className="job-date">
                        <p className="p2">
                            JAN - APR 2022
                        </p>
                    </div>
                    <div className="job-details">
                        <div className="job-title">
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
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M0.263225 12.2368C0.431987 12.4053 0.660751 12.5 0.899267 12.5C1.13778 12.5 1.36655 12.4053 1.53531 12.2368L10.1999 3.5722V10.4007C10.1999 10.6394 10.2947 10.8683 10.4635 11.0371C10.6323 11.2059 10.8612 11.3007 11.0999 11.3007C11.3387 11.3007 11.5676 11.2059 11.7364 11.0371C11.9052 10.8683 12 10.6394 12 10.4007V1.40006C12 1.16135 11.9052 0.932415 11.7364 0.763621C11.5676 0.594827 11.3387 0.5 11.0999 0.5H2.09935C1.86064 0.5 1.6317 0.594827 1.46291 0.763621C1.29411 0.932415 1.19929 1.16135 1.19929 1.40006C1.19929 1.63877 1.29411 1.8677 1.46291 2.0365C1.6317 2.20529 1.86064 2.30012 2.09935 2.30012H8.9278L0.263225 10.9647C0.0946735 11.1335 0 11.3622 0 11.6007C0 11.8392 0.0946735 12.068 0.263225 12.2368Z"
                                          fill="#FBFBFE"/>
                                </svg>
                            </motion.div>
                        </div>
                        <p className="p2">
                            Implemented UI/UX updates to front-end design of the e-Learning Centre, serving a new
                            modern, responsive, and
                            accessible platform to 18,000+ health care professionals.
                            Developed and launched a React-based virtual library site collecting medical articles from
                            across the internet,
                            bolstering site security and optimizing performance.
                        </p>
                    </div>
                </motion.a>
            </div>

            <div className="infinite-scroll" id="contact-me-scroll">
                <div>
                    <h3>
                        CONTACT ME
                    </h3>
                    <h5>
                        ✴
                    </h5>
                    <h3>
                        CONTACT ME
                    </h3>
                    <h5>
                        ✴
                    </h5>
                    <h3>
                        CONTACT ME
                    </h3>
                    <h5>
                        ✴
                    </h5>
                </div>
                <div aria-hidden="true">
                    <h3>
                        CONTACT ME
                    </h3>
                    <h5>
                        ✴
                    </h5>
                    <h3>
                        CONTACT ME
                    </h3>
                    <h5>
                        ✴
                    </h5>
                    <h3>
                        CONTACT ME
                    </h3>
                    <h5>
                        ✴
                    </h5>
                </div>
            </div>

            <div className="contact-me">
                <div className="contact-left p2">
                    <p className="p2">
                        Anything here catch your eye? <br/>
                        I'd love to talk to you about it!
                    </p>
                    <a href="mailto:e54lin@uwaterloo.ca" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path
                                fill="#FBFBFE"
                                d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                        </svg>
                        <p className="p2">e54lin@uwaterloo.ca</p>
                    </a>
                    <a href="https://www.linkedin.com/in/ericlinjh" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path
                                fill="#FBFBFE"
                                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                        </svg>
                        <p className="p2">ericlinjh</p>
                    </a>
                    <p className="p2">
                        And if you’d like to see more of what I’ve made:
                    </p>
                    <a href="https://www.github.com/ericlinjh" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 496 512">
                            <path
                                fill="#FBFBFE"
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                        </svg>
                        <p className="p2">
                            ericlinjh
                        </p>
                    </a>
                    <a href="https://www.youtube.com/@ericlin1435" rel="noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path
                                fill="#FBFBFE"
                                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                        </svg>
                        <p className="p2">
                            ericlin1435
                        </p>
                    </a>
                </div>
                <div className="contact-right">
                    <p className="p2">Designed in <b>Figma</b> and coded with <b>React</b> and <b>Framer Motion</b> by
                        me! All text is using the <b>Metropolis</b> typeface.</p>
                </div>
            </div>

            {/*<motion.img*/}
            {/*    id="background-noise"*/}
            {/*    src={noise}*/}
            {/*    variants={introFade}*/}
            {/*    initial="hidden"*/}
            {/*    animate={{opacity: "40%"}}*/}
            {/*/>*/}
            {/*<motion.img*/}
            {/*    id="background-noise-2"*/}
            {/*    src={noise}*/}
            {/*    variants={introFade}*/}
            {/*    initial="hidden"*/}
            {/*    animate={{opacity: "40%"}}*/}
            {/*/>*/}
            {/*<motion.img*/}
            {/*    id="background-noise-3"*/}
            {/*    src={noise}*/}
            {/*    variants={introFade}*/}
            {/*    initial="hidden"*/}
            {/*    animate={{opacity: "40%"}}*/}
            {/*/>*/}
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

function About () {
    return <h2>HELLO WORLD</h2>;
}

export default App;
