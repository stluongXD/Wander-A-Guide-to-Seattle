import React from "react";
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
                    <div id="intro-button">
                        <h2>discover the remarkable stories behind your favorite restaurants</h2>
                        <br />
                        <a href="/Browse"><button className="button">Explore Now</button></a>
                        </div>
                </section>
                <section className="featured-story">
                    <div className="story-img">
                        {/*link: https://www.seattlemet.com/eat-and-drink/2020/10/the-new-phnom-penh-noodle-house-returns-to-chinatown-international-district*/}
                        <img src={foodSample} alt="dish from Phnom Penh Noodle House"/>
                        <p>photo cred: Seattle Met and Amber Fout</p>
                    </div>
                    <div className="story">
                        <h2>today's featured story:</h2>
                        <h3>Phnom Penh Noodle House</h3>
                        <br />
                        <p>With a new location on S. Jackson Street, Phnom Penh Noodle House is back
                            serving the community as of Spring 2020!</p>
                        <p>Click below to learn more about
                            the restaurant's history and how their menu tells the story of family and
                            perseverance.
                        </p>
                        <br />
                        <a href= "/Story/PhnomPenh"><button className="button">Read More</button></a>
                    </div>
                </section>
                <section className="message mission-statement">
                        <div id="mission-button">
                            <h2>our mission: to create meaningful experiences by helping you learn about
                                the best places around</h2>
                            <br />
                            <a href="/About"><button className="button">Learn More</button></a>
                        </div>
                        <p>Wander: A Guide to Exploring Seattle is a capstone project developed to
                            use the power of food to tell the story around Seattle’s International
                            District. As land prices rise and gentrification becomes more prominant
                            in areas around Seattle, locals are more likely to be priced out of the
                            communities that have supported them for many years. We hope that users
                            of this guide will be inspired to make a conscious effort to learn more
                            about the history of the International District in an effort to preserve
                            and protect our community.</p>
                </section>
                <section className="page-footer">
                        <span>WANDER a guide to exploring seattle</span>
                </section>
            </main>
        )
    }
export default Home;