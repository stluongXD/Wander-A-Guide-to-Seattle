// React
import React, { Component } from "react";
// Stylesheet
import "./fortune.css";
// Club Components
import { Map } from "./map.js";
import travelMap from './img/map.png';
import Yongkang from './img/yongkang.jpg';
// Assets
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

export default class FortuneGarden extends Component {

    render() {
        return (
            <div>
                <div className="fortune-header-img" />
                <div className="fortune-main-content">
                    <h1 className = "title">Fortune Garden</h1>
                    <h3 className = "subtitle">The Passing of Food Across Cultures</h3>
                    <h4 className = "author">by: Steven Luong ・ 3-4-2021</h4>
                    <hr id="title-separator" />
                    <div className="fortune-flex-container-m">
                        <div className="flex-child-m">
                            <p className = "story-text">
                                <span id="dropcap">J</span>
                                ust across the street from Seattle’s Hing Hay Park in the International District lies a quaint Chinese restaurant
                                called Fortune Garden. Like so many other businesses in the International District, Fortune Garden is a restaurant
                                owned by Southern Chinese immigrants. Specifically, this restaurant is owned by a fellow University of Washington
                                student Yongkang Zhou and his family.
                            </p>
                        </div>
                        <div className="fortune-rec">
                            <h2 className ="fortune-section-header">History</h2>
                        </div>
                        <Row>
                            <Col>
                            <p className = "story-text">
                                    The Zhou family was originally from Taishan China, a rural area on the outskirts of Macao.
                                    Eventually the family immigrated to the United States in the pursuit of the American dream.
                                    After moving to the United States, Yongkang’s parents worked as a waitress and a chef for
                                    restaurants in the International District. After many years of hard work, they had the
                                    opportunity to own a restaurant. Immediately, it was clear to them that they wanted to serve
                                    dishes that reflected their heritage of Southern Chinese style food. However, those dishes may
                                    not be highly favored by Americans who are used to the more “American style Chinese food” which
                                    is typically sweeter than the authentic dishes. In order to research more and other possible dishes
                                    of what to serve, the Zhou family visited Los Angeles which has a better established food culture
                                    than the Seattle area. In Los Angeles, the Zhou family sampled various dishes and learned from the
                                    established restaurants how to highlight their heritage of Southern Chinese cooking but also cater
                                    to the broader American population who may not be as familiar with authentic Chinese food. As a
                                    result, their menu has a balance of the classic Chinese American dishes such as the General Tsao's
                                    Chicken and traditional Chinese dishes like Crab Meat with Fish Maw Soup.
                                    </p>
                            </Col>
                            <Col>
                                <img src={travelMap} id="map-image" />
                            </Col>
                        </Row>
                        <div className="flex-child-m">
                            <div className="fortune-q1-wrap">
                                <div className="fortune-q1-back" />
                                <div className="fortune-flex-container-q">
                                    <div className="flex-child-q" id="fortune-q1-vert" />
                                    <div className="flex-child-q">
                                        <span id="fortune-q1-top">“</span>
                                    </div>
                                    <div className="flex-child-q">
                                        <p className="fortune-q-body">
                                            Food has the ability to take you on a journey across the world.
                                            It is this intermingling of heritage and food that I really enjoy!
                                        <br />
                                        - Yongkang Zhou
                                        </p>
                                    </div>
                                    <div className="flex-child-q">
                                        <span id="fortune-q1-bot">”</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className = "story-text">
                            Food plays a pivotal role in Chinese culture due to what certain foods represent
                            to the Chinese people. For example, many Chinese families would eat dumplings on
                            Lunar New Year which represents wealth, or eat long noodles on birthdays to represent a long life.
                        </p>
                        <p className = "story-text">
                            When asked what dish best represents his family, Yongkang pondered deeply and answered
                            “the five taste duck recipe best represents the journey my family took to get to where
                            we are now.” The five taste duck recipe was introduced to his family when they lived in
                            Taishan China. The duck recipe came from a family member who passed it to Yongkang’s father
                            before immigrating to the United States. When the Zhou family started their restaurant, they
                            included the five taste duck dish on their menu because it is symbolic of their journey to
                            where they are now. In a sense, that duck dish followed their immigrant journey from Taishan
                            China to being business owners in Seattle. The five taste duck also represents the sharing of
                            culture and heritage as the recipe moves between family members, then across the ocean to the
                            United States, and finally to all the customers who want to experience a piece of that culture
                            in their restaurant.
                        </p>
                        <div className="fortune-rec">
                            <h2>What's Next?</h2>
                        </div>
                        <Row>
                            <Col>
                            <p className = "story-text">
                                    Yongkang is currently set to graduate in the spring of 2021 with a bachelors in
                                    Public Health. With the possibility of the next generation taking over the business,
                                    we may see dishes that may reflect his upbringing as a Chinese American, or a fusion
                                    style dishes which may reflect the diverse cultures he has seen from growing up in
                                    South Seattle. Regardless of which path he chooses, only time will tell how Fortune
                                    Garden will grow with the next generation.
                                    </p>
                            </Col>
                            <Col>
                            <img src={Yongkang} id="YK-profile"/>
                            </Col>
                        </Row>
                        <hr id="next-contact-separator" />
                            <div id="contact-info">
                                    <div className="contact-content">
                                        <h2>visit them now!</h2>
                                        <hr id="contact-separator" />
                                        <Container fluid = {true}>
                                            <Row>
                                                <Col>
                                                    <Container>
                                                        <Row>
                                                            <Col xs={3}><i className="fa fa-map-marker fa-3x icon" aria-hidden="true" /></Col>
                                                            <Col>424 Maynard Ave S Seattle, WA 98104</Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={3}><i className="fa fa-phone fa-3x icon" aria-hidden="true"/></Col>
                                                            <Col><a href="tel:206-485-7049">(206) 521-8933</a></Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={3}><i className="fa fa-window-maximize fa-3x icon" aria-hidden="true" /></Col>
                                                            <Col><a href="https://fortunegardenwa.com/">https://fortunegardenwa.com/</a></Col>
                                                        </Row>
                                                    </Container>
                                                </Col>
                                                <Col>
                                                <div id="map"><Map/></div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}