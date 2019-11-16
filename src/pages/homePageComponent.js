import React from 'react'
import Navbar from '../components/navbarComponent'
import MainContent from '../components/mainContentComponent'
class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return ( <div>
            <Navbar toggleMenu = {this.props.toggleMenu} showMenu = {this.props.showMenu}/>
            <MainContent />
            </div>
        )
    }
}

export default Home;