import React from "react";

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
                      <img />
                  </a>
              </div>
          </div>
        </main>
      </div>
    );
  }
}
export default ProjectsContent;