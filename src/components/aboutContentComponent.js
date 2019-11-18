import React from "react";
import About from "../pages/aboutPageComponent";

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
          <h2 className="sm-heading">
            Few things about me...
          </h2>
          <div className='about-info'>
              <img src='http://localhost:3000/assets/graphics/boondocksprofile.jpg' alt='Profile image' class='bio-image'/>
              <div className="bio">
                  <h3 className="text-secondary">BIO</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores pariatur doloremque voluptate sequi ullam tempora delectus cupiditate molestias tenetur explicabo repudiandae animi sit, nihil veniam! Delectus quaerat accusamus molestiae a?</p>
                  <div className="job job1">
                      <h3>123 Webshop</h3>
                      <h6>Full Stack</h6>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam amet tempore debitis repellendus aspernatur esse suscipit quo? Officia, optio harum.</p>
                  </div>
                  <div className="job job2">
                      <h3>adamp</h3>
                      <h6>Front End</h6>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam amet tempore debitis repellendus aspernatur esse suscipit quo? Officia, optio harum.</p>
                  </div>
                  <div className="job job3">
                      <h3>123 Webshop</h3>
                      <h6>front end</h6>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam amet tempore debitis repellendus aspernatur esse suscipit quo? Officia, optio harum.</p>
                  </div>
              </div>
          </div>
        </main>
        <footer id='main-footer'>
            Copyright &copy; 2019
        </footer>
      </div>
    );
  }
}

export default AboutContent;