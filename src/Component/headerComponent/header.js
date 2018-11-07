import React, {Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header className="App-header">
                <div>
                    <b>Grace</b>  
                </div>
                <nav>
                    <ul>
                        <li className="link"><Link to="/" >Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skill">Skills</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {/* <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li> */}
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;