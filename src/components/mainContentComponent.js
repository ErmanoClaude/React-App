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
            <a href="https://twitter.com/ErmanoClaude">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/ermanoclaude/">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/ermanoclaude">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://glitch.com/@ErmanoClaude">
              <i className="fas fa-fish fa-2x"></i>
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default MainContent;
