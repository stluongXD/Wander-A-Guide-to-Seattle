import React, { Component } from "react";
import "./style.css";
import {Map} from "./map.js";

export class YoungTea extends Component {

    render() {
        return (
            <div>
                <div class="header-img"></div>
                <div class="main">
                    <h1>Young Tea</h1>
                    <h3>bubble tea done right - with all natural and high quality ingredients</h3>

                    <h4>by Chloe Tsien ・ 3-1-2021</h4>
                    <hr id="title" />

                    <div class="flex-container-m">
                        <div class="flex-child-m">
                            <p>
                                <span id="dropcap">I</span>
                                n recent years, bubble tea has skyrocketed in popularity, 
                                with boba shops popping up on street corners all over Seattle. 
                                There’s a lot to love about sweetened milk tea with chewy tapioca 
                                pearls dotting the bottom of the cup. It’s quickly become a beloved 
                                classic, and everybody’s always clamoring for their next boba fix. 
                                Nestled in the heart of Seattle’s International District, Young Tea 
                                is one provider of said boba fix, though for owner Caroline Lee, 
                                bubble tea is more than just a popular trend - it’s a way to introduce 
                                the benefits of tea to her customers while keeping it deliciously interesting.
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
                                        everyone should know what healthy bubble tea tastes like, 
                                        made with real tea leaves sourced right from taiwan
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
                                Running a bubble tea shop was never Lee’s original plan, 
                                but it was a vocation that she quickly fell in love with. 
                                Even growing up in Taiwan, where bubble tea first originated, 
                                she wasn’t initially interested in the drink. “Before, I didn’t 
                                drink bubble tea because it wasn’t healthy,” Lee explains. “A lot 
                                of companies use bad ingredients and synthetic syrups in their drinks.” 
                                But when she was offered a space to open up shop in 2015, she decided 
                                to take the opportunity to combine her passion for tea with her 
                                dedication to promoting a healthy lifestyle. 
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
                                            when it’s brewed right, tea can be a treasure trove of health benefits
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex-child-m">
                            <p>
                                All of Young Tea’s recipes are thoroughly researched and personally handcrafted by Lee 
                                herself. It’s important that she knows what she’s offering to her customers. Their teas 
                                are sourced from trusted vendors in Taiwan, who provide higher quality tea leaves. 
                                Their toppings, from grass jelly to egg pudding to aiyu jelly, are almost all made from 
                                scratch.  By offering healthier options for bubble tea, everyone will be able to taste 
                                the difference that the right ingredients can make.
                                <br />
                                Young Tea offers drinks that are very rarely found elsewhere. Not many people are familiar 
                                with different types of tea or the brewing process, but bubble tea is an easy way to make 
                                this information more widely accessible to the public. Take their Honey Lemon Rooibos Tea, 
                                for example - it’s a popular South African herbal tea that’s caffeine-free and chock-full 
                                of antioxidants. Or their Pu-erh Milk Tea, which is a fermented tea that promotes weight 
                                loss and cardiovascular health. “I wanted to build a business that will take care of the 
                                community,” Lee says. “We serve many teas that can help with health problems and resolve 
                                symptoms.” 
                            </p>
                        </div>
                        
                        <div class="flex-child-m">
                            <div class="rec">
                                <h2>what should you order?</h2>
                                <p>
                                    Iron Buddha Milk Tea is one of their signature drinks, 
                                    and for good reason - Young Tea is one of the only boba 
                                    shops that serves Iron Buddha tea, and they use authentic 
                                    tea leaves from Taiwan to do so. It’s an uncommon variety 
                                    of oolong, as it requires specific growing conditions and 
                                    intricate processing methods. This makes it more expensive, 
                                    but the higher price point is worth it - with a strong floral 
                                    aroma and complex taste profile, Iron Buddha Milk Tea is a 
                                    beautiful drink that highlights all of the benefits of using 
                                    higher quality tea leaves.
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex-child-m">
                            <div class="flex-container-t">
                                <div class="flex-child-t">
                                    <p id="p4">
                                        Lee’s dedication to helping her customer base has earned Young Tea 
                                        a large following of loyal customers. With people from all over the 
                                        Greater Seattle Area flocking to her store, she tries hard to provide 
                                        healthy drinks, especially when that means a chance to educate people 
                                        about tea. As a mainstay for bubble tea in the International District, 
                                        Young Tea continues to serve their drinks through the COVID-19 pandemic, 
                                        albeit with all of the necessary precautions in place - and don’t 
                                        forget to look out for a second location for more of the same all-natural 
                                        bubble tea, coming to the Eastside soon in 2021.
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
                                <div id="map"><Map/></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}