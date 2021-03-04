/*
Card element that holds the information for one restaurant

Props:
name - name of the restaurant
blurb - short blurb we want displayed along with the card
*/

// React
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class RestaurantCard extends Component {

    generateImage() {
        if (this.props.image !== null) {
            let name = this.props.name;
            let spaceChar = name.indexOf(" ");
            if (spaceChar === -1) {
                spaceChar = name.length();
            }
            name = name.substring(0, spaceChar);
            return (
                <img src = {this.props.image} id = {name}/>
            )
        }
        return <></>
    }

    render() {
        return(
            <Card key = {this.props.name}>
                {this.generateImage()}
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.blurb}</Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        )
    }
}