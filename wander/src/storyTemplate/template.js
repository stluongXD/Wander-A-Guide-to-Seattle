import React, { Component } from "react";
import "./style.css";

export class Template extends Component {
    initMap() {
        const loc = { lat: 47.597399424712535, lng: -122.32592148264524 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 18,
          center: loc,
        });
        const marker = new google.maps.Marker({
          position: loc,
          map: map,
        });
    }
    
    render() {
        return (
            <div>
                <div class="header-img"></div>
                <div class="main">
                    <h1>TITLE</h1>
                    <h3>subtitle goes here :)</h3>

                    <h4>by: author ・ 2-26-2021</h4>
                    <hr id="title" />

                    <div class="flex-container-m">
                        <div class="flex-child-m">
                            <p>
                                <span id="dropcap">L</span>
                                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <div class="flex-child-m">
                            <div class="q1-wrap">
                                <div class="q1-back"></div>
                                <div class="flex-container-q">
                                    <div class="flex-child-q" id="q1-vert"></div>
                                    <div class="flex-child-q">
                                        <span id="q1-top">“</span>
                                    </div>
                                    <div class="flex-child-q">
                                        <p class="q-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div class="flex-child-q">
                                        <span id="q1-bot">”</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex-child-m" id="p2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <div class="flex-child-m">
                            <div class="flex-container-p">
                                <div class="flex-child-p">
                                    <img src="img/drinks2.jpg" class="mid-img" />
                                </div>
                                <div class="flex-child-p" id="q2-wrap">
                                    <div class="q2-back"></div>
                                    <div class="q2">
                                        <p class="q-body" id="q2-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex-child-m">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                officia deserunt mollit anim id est laborum.
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        
                        <div class="flex-child-m">
                            <div class="rec">
                                <h2>what should you order?</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex-child-m">
                            <div class="flex-container-t">
                                <div class="flex-child-t">
                                    <p id="p4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                        officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div class="flex-child-t">
                                    <img src="img/drinks3.jpg" />
                                </div>
                            </div>
                        </div>

                        <hr id="bottom" />

                        <div class="flex-child-m">
                            <div id="details">
                                <div>
                                    <div class="info">
                                        <h2>visit them now!</h2>
                                        <hr id="det-title" />
                                        <ul>
                                            <li id="addr"><i class="fa fa-map-marker fa-3x icon" aria-hidden="true"></i>609 S Weller St, Seattle, WA 98104</li>
                                            <li><i class="fa fa-phone fa-3x icon" aria-hidden="true"></i> <a href="tel:206-682-6688">(206) 682-6688</a></li>
                                            <li><i class="fa fa-window-maximize fa-3x icon" aria-hidden="true"></i> <a href="https://www.youngteaglobal.com/">https://www.youngteaglobal.com/</a></li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div id="map"></div>
                                <script
                                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIrDW655aBEFlkq8IlN1E07DWhIibDz2k&callback=initMap&libraries=&v=weekly"
                                async
                                ></script>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}