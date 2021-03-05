import React, { Component } from "react";
import Steven from './img/Steven.png';
import Damita from './img/Damita.png';
import Phung from './img/Phung.png';
import Chloe from './img/Chloe.png';
import './About.css';
import CREATORS_DATA from "../creators-info.json";
import Creator from './Creator';

export default class About extends Component {
  render() {
    return (
      <div>
        <div id="background-div">
          <div id="bottom-left">
            <h1>
              About Us
            </h1>

          </div>
        </div>
        <section id="about-text">
          <p>
            Wander: A Guide to Exploring Seattle is a capstone project developed to use the power of food
            to tell the story around Seattle’s International District. As land prices rise and gentrification
            becomes more prominant in areas around Seattle, locals are more likely to be priced out of the communities
            that have supported them for many years. We hope that users of this guide will be inspired to make a
            conscious effort to learn more about the  history of the International District in an effort to preserve and protect our community.
            </p>
        </section>
        <section id="creators">
          <h2>Meet the Creators:</h2>
          <div id="creators-details">
            {this.loadCreators()}
          </div>
        </section>
      </div>
    );
  }


  loadCreators() {
    let imgs = [Steven, Damita, Phung, Chloe]
    let result = CREATORS_DATA.map((creator, index) => {
      return <Creator name={creator.name} email={creator.email} github={creator.github} img={imgs[index]} key={creator.name} />
    })
    return result
  }

}

