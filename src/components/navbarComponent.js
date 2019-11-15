import React, {Component} from 'react'

class Navbar extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (  
            <header>
                <div className='menu-btn'>
                    <div className='btn-line'></div>
                    <div className='btn-line'></div>
                    <div className='btn-line'></div>
                </div>
                <nav className='menu'>
                    <div className='menu-branding'>
                        <div className='portrait'></div>
                    </div>
                    <ul className='menu-nav'>
                        <li className='nav-item'>
                            <a href="" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="/about" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="/" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className='nav-item'>
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