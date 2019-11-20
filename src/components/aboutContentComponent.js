import React from "react";
import { Link } from 'react-router-dom';
import webConfig from '../../webConfig.json';
class AboutContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="overlay"></div>
        <main id="about">
          <h1 className="lg-heading">
            About
            <span className="text-secondary"> Me</span>
          </h1>
          <h2 className="sm-heading">Let me tell you a few things...</h2>
          <div className="about-info">
            <img
              src={`${webConfig.siteURL}/assets/graphics/boondocksprofile.jpg`}
              alt="Ermano Claude"
              className="bio-image"
            />
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>
                Self/College taught programmer. Trying to become a developer. Also play love to play games.
              </p>
            </div>
            <div className="skills skills-title"><h2>Skills</h2></div>
            <div className="skills front-end">
              <h3>Front End</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>React <span>&</span> Redux</li>
              </ul>
            </div>

            <div className="skills backend">
              <h3>Backend</h3>
              <ul>
                <li>NodeJs</li>
                <li>MongoDB</li>
                <li>Webpack</li>
                <li>Heroku</li>
                <li>AWS EC2</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default AboutContent;
