import {Link} from "wouter";
import resume from './resume.pdf'
import hk_metro from './projects/mapapp/hk_metro.svg'
import competitive from './projects/mapapp/competitive.png'
import landing_flow from './projects/mapapp/landing_flow.gif'
import route_flow from './projects/mapapp/route_flow.gif'
import bus_flow from './projects/mapapp/bus_flow.gif'
import station_flow from './projects/mapapp/station_flow.gif'

export default function MapApp() {
    return (
        <>
            <header>
                <Link href="/"><h6 id="header-logo">ERIC LIN 嘉宏</h6></Link>
                <div id="header-tabs">
                    <p><Link href="/about">About Me</Link></p>
                    <p><a href={resume} rel="noreferrer" target="_blank">Resume</a></p>
                </div>
            </header>
            <div className="case-study" id="map-app">
                <div className="case-study-title">
                    <h4>Hong Kong Map App</h4>
                    <p className="p2">
                        <u>Timeline:</u> September 2024
                    </p>
                    <p className="p2">
                        <u>Role:</u> User Research, UI/UX Design
                    </p>
                    {/*<a href="https://www.figma.com/design/Ll6ZTI45hDp0Huv7wJVLO7/portfolio-website" target="_blank"*/}
                    {/*   rel="noreferrer"><p className="p2"><u>Figma Link</u></p></a>*/}
                </div>
                <div className="case-study-section">
                    <p>Overview</p>
                    <p className="p2">After arriving in Hong Kong for exchange in Fall 2024, I quickly learned why the
                        Hong Kong metro was so renowned. To get from point A to point B, there were six different bus
                        routes each with different fares, schedules, and vehicles you could take. Google Maps was no
                        longer the end-all be-all. Different service providers had different apps to check the arrival
                        times of their specific vehicles, and to compile a complete route together required quick
                        swapping between 3+ apps. <b>In a culture so
                            dominated by super-apps such as WeChat and Alipay, why isn’t there an app to simplify using
                            one of the busiest public transit systems in the world?</b></p>
                </div>
                <div className="case-study-section">
                    <p>Background</p>
                    <p className="p2">Hong Kong as a city has a highly developed and used transit system, with <u>over
                        90% of daily journeys</u> being on public transit and 99.9% of MTR (metro rides) being on-time.
                        Transit is divided into MTR, Franchised Busses (CityBus, KMB, Long Win, New
                        Lantao), Minibuses (Green, Red), Trams, and Ferries. You can also taxi, Uber, or walk on one of
                        the many covered escalators around the island. With the railway as the backbone of the
                        system, most riders transfer to or from buses, minibuses, or trams for first and last mile
                        commutes. </p>
                </div>
                <div className="case-study-images">
                    <img src={hk_metro} alt="Hong Kong Metro Map"/>
                </div>
                <div className="case-study-quote">
                    <p className="p2">
                        For a city with such reliable infrastructure, why is it so difficult and frustrating to find
                        out when the next bus arrives?
                    </p>
                </div>
                <div className="case-study-section">
                    <p>Problem Space</p>
                    <p className="p2">Hong Kong’s public transit system is rigorously divided into different
                        organisations and companies running one type of vehicle in one area of the region. For example,
                        there are <u>four</u> different franchised bus companies that each run public buses on their
                        respective island or piece of territory. Each of these buses then have their own app
                        to check the ETAs of their buses, all with overlapping route numbers. Combined with the extreme
                        verticality and
                        sprawling footbridge network of the city, a commuter unfamiliar with an area may find it very
                        difficult to simply find the next bus stop (the commuter in question was me..).
                        <br/> <br/>
                        The issue with current apps is the unequal dispersion of relevant features across multiple
                        platforms. One app isn't enough to get around, most locals use Google Maps supplemented by one
                        or two region-dependent first-party apps to get the information missing.
                    </p>
                </div>
                <div className="case-study-section">
                    <p>Competitive Analysis</p>
                    <div className="case-study-images" style={{margin: "1rem"}}>
                        <img src={competitive} alt="Competitive Analysis" style={{width: "100%"}}/>
                    </div>
                    <p className="p2">The navigation apps currently on the market can be separated into four categories
                        each with specific pros and cons:
                        <ol>
                            <li><u>Official organisation-run apps (MTR Mobile, Citybus):</u>
                                <ul>
                                    <li>Pros: Most accurate timetables, ETAs, notices</li>
                                    <li>Cons: Super specific use cases, no routing tools</li>
                                </ul>
                            </li>
                            <li><u>Third-party corporations (Google Maps, Apple Maps):</u>
                                <ul>
                                    <li>Pros: Feature-rich, gets the job done</li>
                                    <li>Cons: Poor public transit functionality, <b>incorrect bus times</b></li>
                                </ul>
                            </li>
                            <li><u>Global private developers (Citymapper, Moovit):</u>
                                <ul>
                                    <li>Pros: Good UI/UX</li>
                                    <li>Cons: Only basic navigation features provided</li>
                                </ul>
                            </li>
                            <li><u>HK-based private developers (Pokeguide, EasyTransit):</u>
                                <ul>
                                    <li>Pros: Accurate, HK specific route-planning</li>
                                    <li>Cons: Lackluster UX and difficult UI</li>
                                </ul>
                            </li>
                        </ol>
                    </p>
                </div>
                <div className="case-study-section">
                    <p>Hypothesis and Goals</p>
                    <p className="p2">
                        By adopting the UI/UX features of western navigation applications and incorporating the quirks
                        of Hong Kong navigation (transit options, fare fees, elevation changes), we can develop a
                        complete all-in-one app that brings you from point A to point B.

                        <br/> <br/>

                        <u>Simplify Route Options:</u> The abundance of transit choices can be overwhelming, users need
                        a simple, organized method to compare different transit options and fares.<br/>
                        <u>Instant, Real-Time Information:</u> With transit so frequent, most users plan routes just as
                        they're about to depart.<br/>
                        <u>Embrace Verticality:</u> Hong Kong is a city built on slopes. Strict jaywalking laws combined
                        with overlapping roads and footbridges means it's not just a matter of north east south and
                        west. <br/>
                    </p>
                </div>
                <div className="case-study-section case-study-section-comparisons">
                    <p>Final Designs</p>
                    <p className="p2">Many commuters hustle around the city with a bag in hand, holding a handrail, or
                        opening doors. The whole app was designed to be usable with just one hand, centered around a
                        single, pull-up drawer found at the bottom of the screen.</p>
                    <div className="case-study-comparisons">
                        <div className="case-study-comparisons-text">
                            <p className="p2">
                                <u>Landing Page:</u>
                                <p className="p2">
                                    Users land on a page that is map-centric. The app's primary function is
                                    navigation, and the user should always know where they are.
                                </p>
                                <br/>
                                <p className="p2">
                                    With the map as the lowest elevation on the app and a single pull-up drawer at
                                    the bottom, the simplicity highlights the app's commitment to easy
                                    functionality.
                                </p>
                                <br/>
                                <p className="p2">
                                    A quick access favourites panel allows users to navigate to their most common
                                    destinations in as little clicks as possible.
                                </p>
                                <br/>
                                <p className="p2">
                                    Underneath, the app pulls up the nearest station and the soonest bus arrivals,
                                    allowing the most urgent information to be seen the quickest.
                                    <br/>
                                    <br/>
                                    Filters for buses, MTR trains, minibuses, trams, and ferries allow you to narrow
                                    your search and get a holistic view of the nearest transit schedule.
                                </p>
                            </p>
                        </div>
                        <div className="case-study-comparisons-images">
                            <img src={landing_flow} alt="Landing Flow"/>
                        </div>
                    </div>
                    <div className="case-study-comparisons">
                        <div className="case-study-comparisons-text">
                            <p className="p2">
                                <u>Route Planning:</u>
                                <p className="p2">
                                    Familiar and quick, users only have to input a destination and a series of potential
                                    routes will be presented.
                                </p>
                                <br/>
                                <p className="p2">
                                    Each route option provides instant, quick information useful for comparing options
                                    including total fare, departure times, departure frequency, and transit options.
                                </p>
                                <br/>
                                <p className="p2">
                                    Every step of the process is sharable, allowing users to stay organized and
                                    consistent with others.
                                </p>
                                <br/>
                                <p className="p2">
                                    Users can hit the "Live View" feature to get an AR navigation experience that works
                                    through their phone camera. This is helpful for navigating elevation and different
                                    levels of a building.
                                </p>
                                <br/>
                                <p className="p2">
                                    An easy access taxi tab unifies another form of transport around the city in case no
                                    other option works.
                                </p>
                            </p>
                        </div>
                        <div className="case-study-comparisons-images">
                            <img src={route_flow} alt="Route Flow"/>
                        </div>
                    </div>
                    <div className="case-study-comparisons">
                        <div className="case-study-comparisons-text">
                            <p className="p2">
                                <u>Bus Routes and Timetables:</u>
                                <p className="p2">
                                    Whether you want to explore a route or check the stops of your current bus,
                                    searching for bus routes is quick and organized.
                                </p>
                                <br/>
                                <p className="p2">
                                    Easily distinguish and avoid the confusion of overlapping bus routes and names with
                                    handy icons next to the route number.
                                </p>
                                <br/>
                                <p className="p2">
                                    Each route defaults to the station nearest to the user's current location, allowing
                                    users to easily navigate to the station and continue their journey.
                                </p>
                            </p>
                        </div>
                        <div className="case-study-comparisons-images">
                            <img src={bus_flow} alt="Bus Flow"/>
                        </div>
                    </div>
                    <div className="case-study-comparisons">
                        <div className="case-study-comparisons-text">
                            <p className="p2">
                                <u>Transit Stations:</u>
                                <p className="p2">
                                    Users can also search for stations to see all transit routes passing through.
                                </p>
                                <br/>
                                <p className="p2">
                                    Convenient subway station map overlays allow users to easily see where each exit leads and clear up navigation underground.
                                </p>
                            </p>
                        </div>
                        <div className="case-study-comparisons-images">
                            <img src={station_flow} alt="Station Flow"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}