import React from "react";
import Navbar from "../components/navbarComponent";
import AboutContent from "../components/aboutContentComponent";
import webConfig from "../../webConfig.json";
import { Helmet } from "react-helmet";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  head() {
    return (
      <Helmet>
        <title>About Me</title>
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        <Navbar
          location={this.props.location}
          toggleMenu={this.props.toggleMenu}
          showMenu={this.props.showMenu}
        />
        <AboutContent />
      </div>
    );
  }
}

export default About;
