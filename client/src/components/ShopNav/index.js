import React from 'react';
import logo from '../../images/logos/logo.png'
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();

  return (
    <nav className="navbar">
        <div className="nav-wrap">
            <div className="logo">
                <Link onClick={()=> navigate("/")}>
                <img src={logo} className="imglogo linkto" alt="logo" /></Link>
                <Link className="linkto" onClick={()=> navigate("/")}><p>Newna <span>Bros.</span></p></Link>
            </div>

            <div className="link-wrap">
                <ul>

                    <li>
                        <Link onClick={()=> navigate("/login")} to="our-story" className="center">Login
                        </Link>
                    </li>

                    <li>
                        <Link onClick={()=> navigate("/signup")} className="center" to="contact">Signup</Link>
                    </li>
                    
                </ul>
            </div>

        </div>
    </nav>
    
  );
}

export default Nav