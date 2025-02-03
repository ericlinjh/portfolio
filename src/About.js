import {Link} from "wouter";
import portrait from './about/portrait.png'
import resume from './resume.pdf'
import blob from './about/blob.svg'
import {motion} from "framer-motion";

const introFade = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 100,
        transition: {duration: 1.5},
        ease: "easeInOut"
    }
}

export default function About() {
    return (
        <>
            <header>
                <Link href="/"><h6 id="header-logo">ERIC LIN 嘉宏</h6></Link>
                <div id="header-tabs">
                    <p><Link href="/about">About Me</Link></p>
                    <p><a href={resume} rel="noreferrer" target="_blank">Resume</a></p>
                </div>
            </header>
            <motion.div className="about-me"
                        variants={introFade}
                        initial="hidden"
                        animate="visible"
            >
                <img src={portrait} alt="Portrait of me!"/>
                <div className="about-text">
                    <h6>Nice to meet you!</h6>
                    <p className="p2">
                        Hey! I’m Eric, and welcome to my site! I study Systems Design Engineering at the University of
                        Waterloo, and I just wrapped up my 3B term on exchange at the University of Hong Kong! I
                        find the most satisfying moments of life to be when all the carefully positioned and executed
                        parts of a plan come together, creating something better than you could have ever imagined just
                        looking at the parts separately.
                        <br/> <br/>
                        Across my degree, I’ve studied design processes, experienced 5 different internships, ran a
                        half-marathon, and created a short film! Before I graduate I hope to perform in a small band,
                        learn about neurotechnology, and build a physical mapping and navigation tool.
                        <br/> <br/>
                        During my free time, you’ll often find me playing music or making films. I mainly play bass
                        guitar and baritone saxophone, I’m simply a sucker for those pure deep tones. You can also check
                        out some of the videos I’ve filmed and edited on my <a
                        href="https://www.youtube.com/@ericlin1435" rel="noreferrer" target="_blank"><u>YouTube
                        channel</u></a>, though I hope you like
                        Valorant because there’s a bit too much of that...
                        <br/> <br/>
                        I'm based in and a citizen of Canada, though I'm open to relocating for work. I can speak
                        English, Chinese, and a tiny bit of French.
                    </p>
                </div>
            </motion.div>

            <motion.img
                src={blob}
                id="about-blob"
                variants={introFade}
                initial="hidden"
                animate="visible"/>
        </>
    )
}