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
    render() {
        return(
            <Card>
                
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.blurb}</Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        )
    }
}