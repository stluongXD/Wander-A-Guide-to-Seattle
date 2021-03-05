import React, { Component } from "react";
import "./style.css";
import {Map} from "./map.js";
import drinks from "./img/drinks.jpg"
import drinks2 from "./img/drinks2.jpg";
import drinks3 from "./img/drinks3.jpg";

export class YoungTea extends Component {

    render() {
        return (
            <div>
                <div class="header-img-yt"></div>
                <div class="main-yt">
                    <h1 class="h1-yt">Young Tea</h1>
                    <h3 class="h3-yt">bubble tea done right - with all natural and high quality ingredients</h3>

                    <h4 class="h4-yt">by Chloe Tsien ・ 3-1-2021</h4>
                    <hr id="title-yt" />

                    <div class="flex-container-m-yt">
                        <div class="flex-child-m-yt">
                            <p>
                                <span id="dropcap-yt">I</span>
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

                        <div class="flex-child-m-yt">
                            <div class="q1-wrap-yt">
                                <div class="q1-back-yt"></div>
                                <div class="flex-container-q-yt">
                                    <div class="flex-child-q-yt" id="q1-vert-yt"></div>
                                    <div class="flex-child-q-yt">
                                        <span id="q1-top-yt">“</span>
                                    </div>
                                    <div class="flex-child-q-yt">
                                        <p class="q-body-yt">
                                            everyone should know what healthy bubble tea tastes like, 
                                            made with real tea leaves sourced right from taiwan
                                        </p>
                                    </div>
                                    <div class="flex-child-q-yt">
                                        <span id="q1-bot-yt">”</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex-child-m-yt" id="p2-yt">
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

                        <div class="flex-child-m-yt">
                            <div class="flex-container-p-yt">
                                <div class="flex-child-p-yt">
                                    <img src={drinks2} class="mid-img-yt" />
                                </div>
                                <div class="flex-child-p-yt" id="q2-wrap-yt">
                                    <div class="q2-back-yt"></div>
                                    <div class="q2-yt">
                                        <p class="q-body-yt" id="q2-body-yt">
                                            when it’s brewed right, tea can be a treasure trove of health benefits
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex-child-m-yt">
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
                        
                        <div class="flex-child-m-yt">
                            <div class="rec-yt">
                                <h2 class="h2-yt">what should you order?</h2>
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
                        
                        <div class="flex-child-m-yt">
                            <div class="flex-container-t-yt">
                                <div class="flex-child-t-yt">
                                    <p id="p4-yt">
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
                                <div class="flex-child-t-yt">
                                    <img src={drinks3} />
                                </div>
                            </div>
                        </div>

                        <hr id="bottom-yt" />

                        <div class="flex-child-m-yt">
                            <div id="details-yt">
                                <div>
                                    <div class="info-yt">
                                        <h2 class="h2-yt">visit them now!</h2>
                                        <hr id="det-title-yt" />
                                        <ul class="ul-yt">
                                            <li class="li-yt" id="addr-yt"><i class="fa fa-map-marker fa-3x icon-yt" aria-hidden="true"></i>609 S Weller St, Seattle, WA 98104</li>
                                            <li class="li-yt"><i class="fa fa-phone fa-3x icon-yt" aria-hidden="true"></i> <a href="tel:206-682-6688">(206) 682-6688</a></li>
                                            <li class="li-yt"><i class="fa fa-window-maximize fa-3x icon-yt" aria-hidden="true"></i> <a href="https://www.youngteaglobal.com/">https://www.youngteaglobal.com/</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="map">
                                    <Map/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}