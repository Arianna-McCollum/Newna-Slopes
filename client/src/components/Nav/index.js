import React from 'react';
import logo from '../../images/logos/logo.png'
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="navbar">
        <div className="nav-wrap">
            <div className="logo">
                <Link to="/">
                <img src={logo} className="imglogo linkto" alt="logo" /></Link>
                <Link className="linkto" to="/"><p>Newna <span>Bros.</span></p></Link>
            </div>

            <div className="link-wrap">
                <ul>
                    <li>
                        <Link className="center" to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="our-story" className="center">Our Story
                        </Link>
                    </li>

                    <li>
                        <Link className="center" to="contact">Contact</Link>
                    </li>
                    
                    <button className="btn">Shop</button>
                </ul>
            </div>

        </div>
    </nav>
    
  );
}

export default Nav