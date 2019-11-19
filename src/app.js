import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/homePageComponent";
import About from "./pages/aboutPageComponent";
import Projects from "./pages/projectsPageComponent";
import Contact from "./pages/contactPageComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              location=""
              toggleMenu={this.toggleMenu}
              showMenu={this.state.showMenu}
            />
          )}
        />
        <Route
          exact
          path="/about"
          render={props => (
            <About
              {...props}
              location="about"
              toggleMenu={this.toggleMenu}
              showMenu={this.state.showMenu}
            />
          )}
        />
        <Route
          exact
          path="/project"
          render={props => (
            <Projects
              {...props}
              location="projects"
              toggleMenu={this.toggleMenu}
              showMenu={this.state.showMenu}
            />
          )}
        />
        <Route
          exact
          path='/contact'
          render={props => (
            <Contact
              {...props}
              location='contact'
              toggleMenu={this.toggleMenu}
              showMenu={this.state.showMenu}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
