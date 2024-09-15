import {Link} from "wouter";
import landing_issues from './projects/portfolio/landing_issues.png';
import work_issues from './projects/portfolio/work_issues.png';
import resume from './resume.pdf'
import color_styles from './projects/portfolio/color_styles.png'
import current_hero from './projects/portfolio/current_hero.png';
import prev_hero from './projects/portfolio/prev_hero.png';
import current_work from './projects/portfolio/current_work.png';
import prev_work from './projects/portfolio/prev_work.png';
import current_projects from './projects/portfolio/current_projects.png';
import prev_projects from './projects/portfolio/prev_projects.png';

export default function Portfolio() {
    return (
        <>
            <header>
                <Link href="/"><h6 id="header-logo">ERIC LIN 嘉宏</h6></Link>
                <div id="header-tabs">
                    <p><Link href="/about">About Me</Link></p>
                    <p><a href={resume} rel="noreferrer" target="_blank">Resume</a></p>
                </div>
            </header>
            <div className="case-study">
                <div className="case-study-title">
                    <h4>Portfolio Website Redesign</h4>
                    <p className="p2">
                        <u>Timeline:</u> March - April, August - September 2024
                    </p>
                    <p className="p2">
                        <u>Role:</u> UI/UX Design, Front-end Development
                    </p>
                    <a href="https://github.com/ericlinjh/portfolio" target="_blank" rel="noreferrer">
                        <p className="p2"><u>Github Link</u></p>
                    </a>
                    <a href="https://www.figma.com/design/Ll6ZTI45hDp0Huv7wJVLO7/portfolio-website" target="_blank"
                       rel="noreferrer"><p className="p2"><u>Figma Link</u></p></a>
                </div>
                <div className="case-study-section">
                    <p>Overview</p>
                    <p className="p2">In early 2024, I decided to redesign my portfolio website. The previous design had
                        many visual and functional issues while also being difficult to scale and update to accommodate
                        new experiences and projects. The basic tech stack would remain the same, though the features
                        and libraries used on the site would be changed to better suit my strengths and interests as a
                        person. I would do both the design and subsequent code implementation and maintenance.</p>
                </div>
                <div className="case-study-section">
                    <p>Problems</p>
                    <p className="p2"><u>Clunky, awkward UX:</u> Hijacking the user’s ability to scroll freely combined
                        with an awkward implementation made browsing the page feel like a chore<br />
                        <u>Inconsistent design choices:</u> The page design lacked an overall direction and had
                        conflicting elements that visually clashed<br />
                        <u>Unscalable:</u> The page based layout enforced a strict vertical height limit that didn’t
                        allow for additional content to be added<br />
                        <u>Cold Colour Palette:</u> The lack of colours made a page that was meant to present my work
                        and personality feel boring and uninspired</p>
                </div>
                <div className="case-study-quote">
                    <p className="p2">Why would I be interested in browsing a website that’s visually dull and
                        uncomfortable to scroll through? What does that say about the person who designed and developed
                        it?</p>
                </div>
                <div className="case-study-images">
                    <img src={landing_issues} alt="Image displaying issues with the landing page of previous website" />
                    <img src={work_issues} alt="Image displaying issues with the work page of previous website" />
                </div>
                <div className="case-study-section">
                    <p>Hypothesis and Goals</p>
                    <p className="p2">Through Figma iterations and animated video prototyping, develop a simpler, more
                        flexible, yet more interesting design that displays my work and takes advantage of my strengths
                        ith After Effects and motion editing. <br /> <br />

                        <u>Revamped Colour Palette:</u> Using a simpler colour palette combined with splashes of accent
                        and primary to keep the site interesting<br/>
                        <u>Simpler Animations:</u> Use animations to complement the information displayed on screen,
                        rather than to be designed around<br/>
                        <u>Minimise Text:</u> Move blocks of text to full pages to allow more breathing room on the
                        landing page<br/>
                        <u>Scalable List Designs:</u> For sections that will keep expanding in the future, use list
                        based, replicable designs to simplify scalability<br/></p>
                </div>
                <div className="case-study-images">
                    <img src={color_styles} alt="Image displaying selected colours for redesign" />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/h6HT96Mk0nA?si=GxNcEd74-YpEmOBg"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="case-study-section case-study-section-comparisons">
                    <p>Outcomes and Comparisons</p>
                    <div className="case-study-comparisons">
                        <div className="case-study-comparisons-text">
                            <p className="p2">
                                <u>Hero Section:</u>
                                <ul>
                                    <li>
                                        Shorter intro animation maintained flair of entering site, while allowing user
                                        to see what they came to see faster
                                    </li>
                                    <li>
                                        Use of animations other than typography makes animation more welcoming, grand
                                    </li>
                                </ul>
                            </p>
                            <p className="p2">
                                <u>About Me</u>
                                <ul>
                                    <li>
                                        Completely moved to a different tab, as the information provided wasn’t very
                                        relevant and didn’t need to be the first thing that users would read
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="case-study-comparisons-images">
                            <img src={prev_hero} alt="Previous hero page"/>
                            <img src={current_hero} alt="Current hero page"/>
                        </div>
                    </div>
                    <div className="case-study-comparisons">
                        <div className="case-study-comparisons-text">
                            <p className="p2">
                                <u>Projects:</u>
                                <ul>
                                    <li>
                                        Moving project description and details into separate page allows landing page
                                        to be simpler and more condensed
                                    </li>
                                    <li>
                                        UHover effect makes browsing more interactive, while also allowing for space
                                        previously designated for images to be saved
                                        <ul>
                                            <li>
                                                When scaled up, this means that over half the page won’t be taken up by
                                                project images
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Simple, modular list items makes scaling and adding more projects easy and
                                        maintaining minimalism
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="case-study-comparisons-images">
                            <img src={prev_projects} alt="Previous projects page"/>
                            <img src={current_projects} alt="Current projects page"/>
                        </div>
                    </div>
                    <div className="case-study-comparisons">
                        <div className="case-study-comparisons-text">
                            <p className="p2">
                                <u>Work Experience:</u>
                                <ul>
                                    <li>
                                        Removal of full page allows text heavy work experiences to breathe more
                                    </li>
                                    <li>
                                        Dimming hover effect also makes browsing more interactive while highlighting
                                        the focused experience to user, eliminating distractions
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="case-study-comparisons-images">
                            <img src={prev_work} alt="Previous work page"/>
                            <img src={current_work} alt="Current work page"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}