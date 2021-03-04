// Code for the Collections/browse page that shows all the restaurants on the site

// React
import React, { Component } from "react";

// Assets
import RESTAURANT_DATA from "../restaurant-info.json";
import RestaurantCard from "./restaurant-card.js";
import "./cards.css";

// Components
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Collections extends Component {
    render() {
        return (
            <div>
                <h1>restaurants in the international district</h1>
                {this.loadCards()}
            </div>
        )
    }

    /**
     * Generates Cards for each restaurant
     * @returns an array of card elements for all the restaurants
     */
    loadCards() {
        let rowSize = 2; // number of cards I want on one row
        let result = [];
        for (let i = 0; i < RESTAURANT_DATA.length; i += rowSize) {

            let upperbound = Math.min(RESTAURANT_DATA.length, i + rowSize);
            let rowElements = [];
            for (let j = i; j < upperbound; j++) {
                let current = RESTAURANT_DATA[j];
                rowElements.push(
                    <Col>
                        <RestaurantCard name = {current.name} blurb = {current.blurb} key = {current.name}/>
                    </Col>
                )
            }
            result.push(
                <Row>
                    {rowElements}
                </Row>
            )
        }
        return (
            <div className = "gray-background">
                <Container>
                    {result}
                </Container>
            </div>
        )
    }
}
