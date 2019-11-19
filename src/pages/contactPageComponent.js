import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbarComponent";
import ContactContent from "../components/contactContentComponent";
class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  head() {
    return (
      <Helmet>
        <title>Contact</title>
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
        <ContactContent />
      </div>
    );
  }
}

export default Contact;
