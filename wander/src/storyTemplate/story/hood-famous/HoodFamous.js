import React, { Component } from "react";
import "./style.css";
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import miniube from './img/mini-ube.png';
import cheraGeo from './img/chera-geo.jpg';

export default class HoodFamous extends Component {

    // initMap() {
    //     const loc = {lat: 47.597399424712535, lng: -122.32592148264524 };
    //     const map = new google.maps.Map(document.getElementById("map"), {
    //         zoom: 18,
    //         center: loc,
    //     });
    //     const marker = new google.maps.Marker({
    //         position: loc,
    //         map: map,
    //     });
    // }

    render() {
        return (
            <div>
                <div className="header-img" />
                <div className="main">
                    <h1>What Made Hood Famous "Famous"?</h1>
                    <h3>How a combination of Filipino and American food formed a tasty dessert and established into a business.</h3>
                    <h4>by: Phung Phu ・ 3-3-2021</h4>
                    <hr id="title" />
                    <div className="flex-container-m">
                        <div className="flex-child-m">
                            <p>
                                <span id="dropcap">W</span>
                                hat started off as a passion project in 2013 turned
                                into a full time business for husband and wife,
                                Geo Quibuyen and Chera Amlag. With only a few Filipino
                                restaurants here and there in Seattle, Chera and Geo wanted
                                to utilize food as a way to bring people together and
                                educate people about Filipino cuisine and culture,
                                so they began doing pop ups serving Filipino food.
                            </p>
                        </div>
                        <div className="flex-child-m">
                            <div className="q1-wrap">
                                <div className="q1-back" />
                                <div className="flex-container-q">
                                    <div className="flex-child-q" id="q1-vert" />
                                    <div className="flex-child-q">
                                        <span id="q1-top">“</span>
                                    </div>
                                    <div className="flex-child-q">
                                        <p className="q-body">
                                            I wanted to utilize food as a way to bring people together,
                                            and educate people about Filipino cuisine and culture.
                                        <br />
                                        - Chera Amlag
                                        </p>
                                    </div>
                                    <div className="flex-child-q">
                                        <span id="q1-bot">”</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child-m" id="p2">
                            <p>
                                The pop up contained a fixed menu and a 5 course meal.
                                One dish, in particular, stood out: the purple ube
                                cheesecake. Growing up in the Philippines, Chera loved
                                ube as a child. After immigrating to the United States,
                                Chera wanted to combine her food experiences from the
                                Philippines with her food experiences in the United States,
                                and the result was a delicious ube cheesecake.
                            </p>
                        </div>
                        <div className="flex-child-m">
                            <div className="flex-container-p">
                                <div className="flex-child-p">
                                    <img src={miniube} className="mid-img" />
                                </div>
                                <div className="flex-child-p" id="q2-wrap">
                                    <div className="q2-back" />
                                    <div className="q2">
                                        <p className="q-body" id="q2-body">
                                            For Chera, the flagship ube cheesecake
                                            is the dish that best represents Hood Famous.
                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child-m">
                            <p>
                                After a connection through a friend, Chera began selling her
                                ube cheesecakes at Uwajimaya, an Asian supermarket with stores
                                in the Greater Seattle area. That didn’t last very long, though,
                                because the ube cheesecakes sold out in less than two hours. After a while,
                                it was clear the business was sustainable, and Chera quit her day job as
                                an educator to grow her business.
                            <br />
                                <br />
                             In 2016, Hood Famous Bakeshop opened its first store in Ballard.
                             Then in 2019, the Hood Famous Cafe + Bar was opened in the International
                             District. For Chera and Geo, the International District holds a special
                             place in their hearts. Chera’s first job after college was in the International
                             District and Geo worked at the Wing Luke Museum in Chinatown.
                            </p>
                        </div>
                        <div className="flex-child-m">
                            <div className="rec">
                                <h2>Current Circumstances</h2>
                                <p>
                                    In light of COVID-19, Chera and Geo have redesigned their shop
                                    to support local artists and small business owners.
                                </p>
                            </div>
                        </div>
                        <div className="flex-child-m">
                            <div className="flex-container-t" id="last-pic-container">
                                <div className="flex-child-t">
                                    <p id="p4">
                                        As a result of the in-person dining protocols due to COVID-19,
                                        Chera and Geo decided to redesign the dining room in the Hood Famous Cafe + Bar
                                        to a gift shop and marketplace where you can find local Asian American artists’
                                        jewelry, books, and other items sold in the gift shop. Being able to open a store
                                        in the International District, support other small business owners, and contribute
                                        to the neighborhood that helped raise them has meant a lot to Chera and Geo.
                                    </p>
                                </div>
                                <div className="flex-child-t">
                                    <img src={cheraGeo} id="last-pic" />
                                </div>
                            </div>
                        </div>
                        <hr id="bottom" />
                        <div className="flex-child-m">
                            <div id="details">
                                <div>
                                    <div className="info">
                                        <h2>visit them now!</h2>
                                        <hr id="det-title" />
                                        <ul>
                                            <li id="addr"><i className="fa fa-map-marker fa-3x icon" aria-hidden="true" />
                                            504 5th Avenue S, Suite 107A Seattle, WA 98104
                                            </li>
                                            <li><i className="fa fa-phone fa-3x icon" aria-hidden="true" /> <a href="tel:206-485-7049">(206) 485-7049</a></li>
                                            <li>
                                                <i className="fa fa-window-maximize fa-3x icon" aria-hidden="true" />
                                                <a href="https://www.hoodfamousbakeshop.com//">https://www.hoodfamousbakeshop.com//</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="map" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}