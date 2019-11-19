import React from "react";
import Navbar from "../components/navbarComponent";
import MainContent from "../components/mainContentComponent";
import { Helmet } from "react-helmet";
import webConfig from "../../webConfig.json";
class Home extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>

        <Helmet>
            <title>Welcome To My Portfolio</title>
        </Helmet>
        <Navbar
          location={this.props.location}
          toggleMenu={this.props.toggleMenu}
          showMenu={this.props.showMenu}
        />
        <MainContent />
      </div>
    );
  }
}

export default Home;
