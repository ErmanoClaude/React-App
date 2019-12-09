import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  head() {
    return (
      <Helmet>
        <title>Welcome To My Portfolio.</title>
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
        <MainContent />
      </div>
    );
  }
}

export default Home;