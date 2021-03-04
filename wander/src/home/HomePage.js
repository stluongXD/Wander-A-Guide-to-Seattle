import React from "react";
import {Link} from "react-router-dom";
import "./home.css";
import header from './imgs/home-page-header.png';
import foodSample from './imgs/phnomPenhFood.png';

function Home() {
        return (
            <main className="main-content">
                <section className ="page-header">
                <img className="home-header" src={header} alt="home page header of Chinatown-International District in Seattle"/>
                </section>
                <section className="message">
                    <div className="intro">
                        <p><i>Wander: A Guide To Seattle</i> looks at the stories of restaurants from Seattle's
                        Chinatown-International District (CID) to learn more about the area's history and the
                        cultures at the heart of the businesses.
                        </p>
                        <p>Food holds entire legacies that transcend languages and oceans, bringing comfort
                            from one family table to another. Seattle and the CID community is ever-changing,
                            but generations of families have established themselves in the CID and continue to
                            share their story with every delicious bite. Others are at the beginning of
                            their journey, offering something new and building a relationship with the city
                            through food.
                        </p>
                    </div>
                        {/*<button className="button"><Link to="/about">Learn More</Link></button>*/}
                        <button className="button">Learn More</button>
                </section>
                <section className="featured-story">
                    <div className="story-img">
                        {/*link: https://www.seattlemet.com/eat-and-drink/2020/10/the-new-phnom-penh-noodle-house-returns-to-chinatown-international-district*/}
                        <img src={foodSample} alt="dish from Phnom Penh Noodle House"/>
                        <p>photo cred: Seattle Met and Amber Fout</p>
                    </div>
                    <div className="story">
                        <h1>Today's Featured Story</h1>
                        <h2>Phnom Penh Noodle House</h2>
                        <p>With a new location on S. Jackson Street, Phnom Penh Noodle House is back
                            serving the community as of Spring 2020! Click below to learn more about
                            the restaurant's history and how their menu tells the story of family and
                            perseverance.
                        </p>
                        {/*<button className="button"><Link to="/phnom_penh">Read More</Link></button>*/}
                        <button className="button">Read More</button>
                    </div>
                </section>
                <section className="message mission-statement">
                        <div className="mission-button">
                            <h2>our mission: to create meaningful experiences by helping you learn about
                                the best places around</h2>
                            <a href = "/About"><button className="button">Learn More</button></a>
                        </div>
                        <p>write a nice mission statement here! I'm a paragraph. Click here to add
                            your own text and edit me. It’s easy. Just click “Edit Text” or double
                            click me to add your own content and make changes to the font. I’m a great
                            place for you to tell a story and let your users know a little more about you.
                            this is open sans!</p>
                </section>
                <section className="page-footer">
                        <span>WANDER a guide to exploring seattle</span>
                </section>
            </main>
        )
    }
export default Home;