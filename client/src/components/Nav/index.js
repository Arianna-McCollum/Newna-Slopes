import React from 'react';
import logo from '../../images/logos/logo.png'
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar-container">
        <div className="nav-wrap">
            <div className="logo">
                <img src={logo} className="imglogo" alt="logo" />
                <p>Newna <span>Bros.</span></p>
            </div>

            <div className="link-wrap">
                <ul>
                    <li>
                        <Link className="center" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="center" to="/our-story">Our Story</Link>
                    </li>

                    <li>
                        <Link className="center" to="/contact">Contact</Link>
                    </li>
                    
                    <button className="btn">Shop</button>
                </ul>
            </div>

        </div>
    </nav>
    
  );
}

export default Nav