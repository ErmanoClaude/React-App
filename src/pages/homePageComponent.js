import React from 'react'
import Navbar from '../components/navbarComponent'
import MainContent from '../components/mainContentComponent'
class Home extends React.Component {
    exampleMethod() {
        console.log("JS is running")
    }
    render() {
        return ( <div>
            <Navbar />
            <MainContent />
            </div>
        )
    }
}

export default Home;