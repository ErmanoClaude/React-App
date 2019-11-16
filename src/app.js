import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './pages/homePageComponent'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu:false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(){
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    render(){
        return (
            <Switch>
                <Route render = {props => (
                    <Home {...props} toggleMenu = {this.toggleMenu} showMenu = {this.state.showMenu} />
                )}/>
            </Switch>
        )
    }
}

export default App;