import React, { Component } from "react";

class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='overlay'></div>
        <main id="home">
          <h1 className="lg-heading">
            Ermano
            <span className="text-secondary"> Claude</span>
          </h1>
          <h2 className="sm-heading">Web Developer, Software Engineer & Gamer</h2>
          <div className="icons">
            <a href="#!">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default MainContent;
