import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/homePageComponent";
import About from "./pages/aboutPageComponent";

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
  };



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
      </Switch>
    );
  }
}

export default App;
