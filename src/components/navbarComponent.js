import React, {Component} from 'react'

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
                        <li className={`nav-item current ${!this.props.showMenu? '':'show'}`}>
                            <a href="" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className={`nav-item ${!this.props.showMenu? '':'show'}`}>
                            <a href="/about" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className={`nav-item ${!this.props.showMenu? '':'show'}`}>
                            <a href="/" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className={`nav-item ${!this.props.showMenu? '':'show'}`}>
                            <a href="/" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;