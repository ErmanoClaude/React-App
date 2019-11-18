import React from 'react'
import Navbar from '../components/navbarComponent'
import AboutContent from '../components/aboutContentComponent';

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <Navbar location={this.props.location} toggleMenu = {this.props.toggleMenu} showMenu = {this.props.showMenu}/>
                <AboutContent />
            </div>
        )
    }
}

export default About;