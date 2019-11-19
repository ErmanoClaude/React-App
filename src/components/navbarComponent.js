import React, {Component} from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    constructor(props){
        super(props)
    }
    
    
    render(){
        return (  
            <header>
                <div className={`menu-btn ${!this.props.showMenu? '': 'close'}`} onClick={this.props.toggleMenu}>
                    <div className='btn-line'></div>
                    <div className='btn-line'></div>
                    <div className='btn-line'></div>
                </div>
                <nav className={`menu ${!this.props.showMenu? '': 'show'}`}>
                    <div className={`menu-branding ${!this.props.showMenu? '': 'show'}`}>
                        <div className='portrait'></div>
                    </div>
                    <ul className={`menu-nav ${!this.props.showMenu? '':'show'}`}>
                        <li className={`nav-item ${this.props.location==''? 'current':''} ${!this.props.showMenu? '':'show'}`}>
                            <Link to="/" className="nav-link" onClick={this.props.toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li className={`nav-item ${this.props.location=='about'? 'current':''} ${!this.props.showMenu? '':'show'}`}>
                            <Link to="/about" className="nav-link" onClick={this.props.toggleMenu}>
                                About
                            </Link>
                        </li>
                        <li className={`nav-item ${this.props.location=='projects'? 'current':''} ${!this.props.showMenu? '':'show'}`}>
                            <Link to="/project" className="nav-link" onClick={this.props.toggleMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className={`nav-item ${this.props.location=='contact'? 'current':''} ${!this.props.showMenu? '':'show'}`}>
                            <Link to="/contact" className="nav-link" onClick={this.props.toggleMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;