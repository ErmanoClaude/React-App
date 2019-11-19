import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbarComponent";
import ProjectsContent from "../components/projectsContentComponent";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Projects</title>
        </Helmet>
        <Navbar
          location={this.props.location}
          toggleMenu={this.props.toggleMenu}
          showMenu={this.props.showMenu}
        />
        <ProjectsContent />
      </div>
    );
  }
}

export default Projects;
