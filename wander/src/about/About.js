import React, { Component } from "react";
import background from './img/international-district.png';
import Steven from './img/Steven.png'
import Damita from './img/Damita.png';
import Phung from './img/Phung.png';
import Chloe from './img/Chloe.png';
import './About.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from "@material-ui/core/IconButton";

export default class About extends Component {
  render() {
    return (
      <div>
        <div id="background-div">
          <img id="background-img" src={background} alt="International District" />
          <div id="bottom-left">
            <h1>
              About Us
            </h1>

          </div>
        </div>
        <div id="about-text">
          <p>
            Wander: A Guide to Exploring Seattle is a capstone project developed to use the power of food
            to tell the story around Seattle’s International District. As land prices rise and gentrification
            becomes more prominant in areas around Seattle, locals are more likely to be priced out of the communities
            that have supported them for many years. We hope that users of this guide will be inspired to make a
            conscious effort to learn more about the  history of the International District in an effort to preserve and protect our community.
            </p>
        </div>
        <div id="creators">
          <h2>Meet the Creators:</h2>
          <div id="creators-details">
            <div id="Steven">
              <img src={Steven} alt="Steven Luong" />
              <h3 className="name">Steven Luong</h3>
              <p className="role-title">Web Developer</p>
              <div className="icons">

                <div className="email">
                  <IconButton variant="link" href="mailto:stluong@uw.edu">
                    <MailOutlineIcon className="mail-icon" />
                  </IconButton>
                  <a href="mailto:stluong@uw.edu">stluong@uw.edu</a>
                </div>

                <div className="github">
                  <IconButton variant="link" href="https://github.com/stluongXD">
                    <GitHubIcon className="github-icon" />
                  </IconButton>
                  <a target="_blank" href="https://github.com/stluongXD">github.com/stluongXD</a>
                </div>
                {/* <div className="linkedin">
                <LinkedInIcon className="linkedin-icon" />
                <a href="https://www.linkedin.com/in/steven-luong">https://www.linkedin.com/in/steven-luong</a>
              </div> */}

              </div>
            </div>

            <div id="Damita">
              <img src={Damita} alt="Damita Gomez" />
              <h3 className="name">Damita Gomez</h3>
              <p className="role-title">Web Developer</p>
              <div className="icons">
                <div className="email">
                  <IconButton variant="link" href="mailto:dgomez23@uw.edu">
                    <MailOutlineIcon className="mail-icon" />
                  </IconButton>
                  <a href="mailto:dgomez23@uw.edu">dgomez23@uw.edu</a>
                </div>
                <div className="github">
                  <IconButton variant="link" href="https://github.com/damitagomez23">
                    <GitHubIcon className="github-icon" />
                  </IconButton>
                  <a target="_blank" href="https://github.com/damitagomez23">github.com/damitagomez23</a>
                </div>
                {/* <div className="linkedin">
                <LinkedInIcon className="linkedin-icon" />
                <a href="https://www.linkedin.com/in/damita-gomez-737587159">https://www.linkedin.com/in/damita-gomez-737587159</a>
              </div> */}

              </div>
            </div>

            <div id="Phung">
              <img src={Phung} alt="Phung Phu" />
              <h3 className="name">Phung Phu</h3>
              <p className="role-title">Web Developer</p>
              <div className="icons">
                <div className="email">
                  <IconButton variant="link" href="mailto:phungphu@uw.edu">
                    <MailOutlineIcon className="mail-icon" />
                  </IconButton>

                  <a href="mailto:phungphu@uw.edu">phungphu@uw.edu</a>
                </div>
                <div className="github">
                  <IconButton variant="link" href="https://github.com/phung-phu">
                    <GitHubIcon className="github-icon" />
                  </IconButton>
                  <a target="_blank" href="https://github.com/phung-phu">github.com/phung-phu</a>
                </div>
                {/* <div className="linkedin">
                <LinkedInIcon className="linkedin-icon" />
                <a href="www.linkedin.com/in/phung-phu">www.linkedin.com/in/phung-phu</a>
              </div> */}
              </div>
            </div>

            <div id="Chloe">
              <img src={Chloe} alt="Chloe Tsien" />
              <h3 className="name">Chloe Tsien</h3>
              <p className="role-title">Web Developer</p>
              <div className="icons">
                <div className="email">
                  <IconButton variant="link" href="mailto:ctsien@uw.edu">
                    <MailOutlineIcon className="mail-icon" />
                  </IconButton>
                  <a href="mailto:ctsien@uw.edu">ctsien@uw.edu</a>
                </div>
                <div className="github">
                  <IconButton variant="link" href="https://github.com/chloet127">
                    <GitHubIcon className="github-icon" />
                  </IconButton>
                  <a target="_blank" href="https://github.com/chloet127">github.com/chloet127</a>
                </div>
                {/* <div className="linkedin">
                <LinkedInIcon className="linkedin-icon" />
                <a href="https://www.linkedin.com/in/chloe-tsien-4715a8196/">https://www.linkedin.com/in/chloe-tsien-4715a8196/</a>
              </div> */}

              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

