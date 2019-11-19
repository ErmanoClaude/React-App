import React from "react";
import YelpCampBlog from '../assets/graphics/YelpCampBlog.jpg';
import NYCGallery from '../assets/graphics/NYCGallery.jpg';
import MetericToImperialConverter from '../assets/graphics/Metric-To-Imperial-Converter.jpg';
import ColorGame from '../assets/graphics/ColorGame.jpg';
import Candy from '../assets/graphics/candy.jpg';
import UrlShortener from '../assets/graphics/UrlShortener.jpg';
import SearchMovieAPI from '../assets/graphics/SearchMovieAPI.jpg';
class ProjectsContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="overlay"></div>
        <main id="projects">
          <h1 className="lg-heading">
            My
            <span className="text-secondary"> Projects</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects</h2>
          <div className="projects">
            <div className="item">
              <a href="#!">
                <img
                  src={YelpCampBlog}
                  alt="YelpCamp Blog"
                />
              </a>
              <a href="" className="btn-light">
                <i className="fas fa-eye"></i>&nbsp;Project
              </a>
              <a href="" className="btn-dark">
                <i className="fab fa-github"></i>&nbsp;Github
              </a>
            </div>
            <div className="item">
              <a href="#!">
                <img
                  src={NYCGallery}
                  alt="New York City Gallery"
                />
              </a>
              <a href="" className="btn-light">
                <i className="fas fa-eye"></i>&nbsp;Project
              </a>
              <a href="" className="btn-dark">
                <i className="fab fa-github"></i>&nbsp;Github
              </a>
            </div>
            <div className="item">
              <a href="#!">
                <img
                  src={MetericToImperialConverter}
                  alt="Metric to Imperial Converter API"
                />
              </a>
              <a href="" className="btn-light">
                <i className="fas fa-eye"></i>&nbsp;Project
              </a>
              <a href="" className="btn-dark">
                <i className="fab fa-github"></i>&nbsp;Github
              </a>
            </div>
            <div className="item">
              <a href="#!">
                <img
                  src={ColorGame}
                  alt="JQuery Color Guessing Game"
                />
              </a>
              <a href="" className="btn-light">
                <i className="fas fa-eye"></i>&nbsp;Project
              </a>
              <a href="" className="btn-dark">
                <i className="fab fa-github"></i>&nbsp;Github
              </a>
            </div>
            <div className="item">
              <a href="#!">
                <img
                  src={Candy}
                  alt="Muesuem of Candy"
                />
              </a>
              <a href="" className="btn-light">
                <i className="fas fa-eye"></i>&nbsp;Project
              </a>
              <a href="" className="btn-dark">
                <i className="fab fa-github"></i>&nbsp;Github
              </a>
            </div>
            <div className="item">
              <a href="#!">
                <img
                  src={UrlShortener}
                  alt="URL shortener API using MongoDb"
                />
              </a>
              <a href="" className="btn-light">
                <i className="fas fa-eye"></i>&nbsp;Project
              </a>
              <a href="" className="btn-dark">
                <i className="fab fa-github"></i>&nbsp;Github
              </a>
            </div>
            <div className="item">
              <a href="#!">
                <img
                  src={SearchMovieAPI}
                  alt="Search Movie API"
                />
              </a>
              <a href="" className="btn-light">
                <i className="fas fa-eye"></i>&nbsp;Project
              </a>
              <a href="" className="btn-dark">
                <i className="fab fa-github"></i>&nbsp;Github
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default ProjectsContent;
