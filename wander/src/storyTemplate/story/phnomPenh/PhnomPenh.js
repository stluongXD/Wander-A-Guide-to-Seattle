import React, { Component } from "react";
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "./phnomPenh.css";
import mapImage from './img/phnomPenhMap.png';
import sisters from './img/sisters.png'
import noodles from './img/noodles.png'
import oldRest from './img/oldRest.png'

export class PhnomPenh extends Component {
    /*
    initMap() {
        const loc = { lat: 47.59924738253555, lng: -122.31998895985639 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 18,
          center: loc,
        });
        const marker = new google.maps.Marker({
          position: loc,
          map: map,
        });
    }
    */
    
    render() {
        return (
            <div>
                <div class="main">
                    <div id="color-block">
                        <h1>PHNOM PENH NOODLE HOUSE</h1>
                        <h3>a family story from Cambodia to Seattle</h3>

                        <h4>by: Damita Gomez ・ 2-26-2021</h4>
                        <hr id="phnom-penh" />

                        <div class="flex-container-m">
                            <div class="flex-child-m">
                                <p>
                                    <span id="dropcap">P</span>
                                    hnom Penh Noodle House is a Cambodian restaurant and beloved establishment
                                    in Seattle’s Chinatown-International District (CID). It was founded in 1987
                                    by Sam Ung and is currently operated by his three daughters: Dawn, Diane,
                                    and Darlene. The sisters grew up in the CID and have fond memories of their
                                    childhood in the restaurant and elsewhere in the area. The CID is their home,
                                    and the restaurant they run stands as a testament to their family’s resilience
                                    and love for food.
                                </p>
                            </div>

                            <div class="flex-child-m quotes">
                                <div class="q1-wrap">
                                    <div class="q1-back"></div>
                                    <div class="flex-container-q">
                                        <div class="flex-child-q" id="q1-vert"></div>
                                        <div class="flex-child-q">
                                            <span id="q1-top">“</span>
                                        </div>
                                        <div class="flex-child-q">
                                            <p class="q-body">
                                            They started with seven noodle dishes, all of which can still be
                                            enjoyed today
                                            </p>
                                        </div>
                                        <div class="flex-child-q">
                                            <span id="q1-bot">”</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex-child-m img-txt-content" id="p2">
                                <img id="old-rest" src={oldRest} alt="old Phnom Penh" />
                                <h2>Early History</h2>
                                <p>
                                The restaurant’s story arguably begins with a noodle cart in the 1940s with
                                Chan Kao, Sam Ung’s father. He left China because of the Sino-Japanese War
                                in 1937 and settled in Cambodia. The noodle cart became a family-operated
                                restaurant where Sam Ung grew up working and learning about the restaurant
                                business. However, the civil war in Cambodia during the 1970s would force Ung
                                to relocate. The extraordinary circumstances that Sam overcame are detailed
                                in his autobiography I Survived the Killing Fields: The True Life Story of a
                                Cambodian Refugee. By 1980, he had moved with his budding family to Seattle
                                as a refugee, maintaining jobs as a cook to sustain his family. Diane explains
                                that his time working at the Rainier Club allowed her father to cook a variety
                                of cuisines and learn new skills. In 1987, he was able to open the Phnom Penh
                                Noodle House.
                                </p>
                            </div>


                            <div class="flex-child-m quotes">
                                <div class="q1-wrap">
                                    <div class="q1-back"></div>
                                    <div class="flex-container-q">
                                        <div class="flex-child-q" id="q1-vert"></div>
                                        <div class="flex-child-q">
                                            <span id="q1-top">“</span>
                                        </div>
                                        <div class="flex-child-q">
                                            <p class="q-body">
                                            The restaurant business paved the way for the family to survive
                                            </p>
                                        </div>
                                        <div class="flex-child-q">
                                            <span id="q1-bot">”</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex-child-m">
                                <img className="noodles" src={noodles} alt="noodle dish" />
                                <h2>Menu Development</h2>
                                <p>
                                Life constantly threw challenges before Phnom Penh’s opening and since then.
                                After a roof collapse, the restaurant relocated to South King Street where
                                the family was able to expand their number of seats and their menu. They
                                removed some of their less popular traditional Cambodian soups and added in
                                some of their holiday items to the menu permanently. Diane describes their
                                food as a good introduction to Cambodian cuisine that keeps her father’s
                                original recipes. They started with seven noodle dishes, all of which can
                                still be enjoyed today. With Sam’s ingenuity, other dishes were added and
                                became favorites for the family and for customers such as the Phnom Penh
                                chicken wings. This appetizer came about from Sam’s experimentation where he
                                took the flavor of Chinese pepper crab and added it to fried chicken. There
                                are lots of dishes on their menu to love including this one, and it reflects
                                the family’s ability to pivot to make the most of their circumstances.
                                </p>
                            </div>
                            
                            
                            <div class="flex-child-m">
                                <div class="flex-container-t">
                                    <div class="flex-child-t img-txt-content">
                                        <div>
                                        <h2>Current Circumstances</h2>
                                        <p className="p4">
                                        Like the CID, the restaurant has undergone changes throughout the years,
                                        but it is still the same at its core. Sam’s children including Diane
                                        were able to grow up in the CID with a home that went beyond their
                                        family business. When times were hard, their friends in the CID rallied
                                        to help them. After temporarily closing in 2018, the family and the
                                        community in the CID were excited to make a comeback in Spring 2020. With
                                        COVID-19, they were unable to welcome customers in full force for their
                                        grand reopening. True to themselves, they are making the most of their
                                        new space and technology to adapt to online orders and serve their
                                        community.</p>
                                        </div>
                                        <div>
                                        <p className="p4">The CID would not feel the same without the presence of Phnom
                                        Penh, and many factors have played a role to develop its legacy. The
                                        restaurant business paved the way for the family to survive in Cambodia
                                        and has allowed them to create a life in Seattle. Phnom Penh Noodle House
                                        was born of harsh circumstances, but it has a family and a community to
                                        ensure that it stands for a long time to come.
                                        </p>
                                        </div>
                                        <div class="flex-child-t">
                                            <img src={sisters} />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                        <hr id="bottom" />

                        <div class="flex-child-m">
                            <div id="details">
                                <div>
                                    <div class="info">
                                        <h2>visit them now!</h2>
                                        <br />
                                        <hr id="det-title" />
                                        <ul>
                                            <li id="addr">913 S. Jackson St. suite A, Seattle, WA 98104</li>
                                            <li><a href="tel:206-682-6688">(206) 785-6936</a></li>
                                            <li><a href="http://www.phnompenhnoodlehouse.com/">http://www.phnompenhnoodlehouse.com/</a></li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div id="map">
                                    <img src={mapImage} alt="Google Maps image of Phnom Penh location"/>
                                </div>
                                {/*<script
                                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIrDW655aBEFlkq8IlN1E07DWhIibDz2k&callback=initMap&libraries=&v=weekly"
                                async
                                ></script>*/}
                                
                            </div>
                        </div>

                    
                </div>
            </div>
        );
    }
}