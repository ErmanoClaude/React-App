import React from "react";
import { Link } from "react-router-dom";
class ProjectsContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="overlay"></div>
        <main id="contact">
          <h1 className="lg-heading">
            My
            <span className="text-secondary"> Projects</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects</h2>
          <div className="projects">
            <div className="item">
              <a href="https://murmuring-caverns-20669.herokuapp.com/">
                <img className="yelpcamp" alt=''/>
              </a>
              <a href='https://murmuring-caverns-20669.herokuapp.com/' className="btn-light">
                <i className="fas fa-eye"></i> Project
              </a>
              <a href='https://github.com/ErmanoClaude/YelpCamp'className="btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="https://nygallery.herokuapp.com/">
                <img className="nyc-gallery" alt="" />
              </a>
              <a href="https://nygallery.herokuapp.com/" className="btn-light">
                <i className="fas fa-eye"></i> Project
              </a>
              <a href="https://github.com/ErmanoClaude/ImageGallery" className="btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="https://imp-metric.glitch.me/">
                <img className="imperial-to-metric" alt="" />
              </a>
              <a href="https://imp-metric.glitch.me/"className="btn-light">
                <i className="fas fa-eye"></i> Project
              </a>
              <a href='https://github.com/ErmanoClaude/Imperial-to-Metric-Api' className="btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="https://rgb-color-guess.glitch.me">
                <img className="color-game" alt="" />
              </a>
              <a  href="https://rgb-color-guess.glitch.me" className="btn-light">
                <i className="fas fa-eye"></i> Project
              </a>
              <a href="https://github.com/ErmanoClaude/ColorGame.js" className="btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="https://rgb-color-guess.glitch.me">
                <img className="candy" alt="" />
              </a>
              <a href="https://rgb-color-guess.glitch.me"className="btn-light">
                <i className="fas fa-eye"></i> Project
              </a>
              <a href="https://github.com/ErmanoClaude/Candy" className="btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="https://fcc-url-shorteners.glitch.me/">
                <img className="url-shortener" alt="" />
              </a>
              <a href="https://fcc-url-shorteners.glitch.me/" className="btn-light">
                <i className="fas fa-eye"></i> Project
              </a>
              <a  href="https://github.com/ErmanoClaude/fcc-URL-Shortener"className="btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="https://moviesear.herokuapp.com/">
                <img className="search-movie-api" alt="" />
              </a>
              <a href="https://moviesear.herokuapp.com/" className="btn-light">
                <i className="fas fa-eye"></i> Project
              </a>
              <a href="https://github.com/ErmanoClaude/Movie-Search-App" className="btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
            <div className="item">
              <a href="https://fcc-exercise-api.glitch.me/">
                <img className="excerise-api" alt="" />
              </a>
              <a href="https://fcc-exercise-api.glitch.me/" className="btn-light">
                <i className="fas fa-eye"></i> Project
              </a>
              <a href="https://github.com/ErmanoClaude/FCC-Excerise-Tracker" className="btn-dark">
                <i className="fab fa-github"></i> Github
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default ProjectsContent;
