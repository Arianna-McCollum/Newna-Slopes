import React from 'react';
import logo from '../../images/logos/logo.png'
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section id="/">
    <div className="hero">
        <div className="hero-container-right">
            <div className="hero-container">
              <img src={logo} className="imglogo" alt="logo" />
              <h1 className="hero-header" >Newna Bros. </h1>
              <p>Skis, Boards, & <span>More</span></p>
              <button className="btn" onClick={()=> navigate("/shop")}>Visit Our Online Shop!</button>
              <Link to="our-story" className="scroll-down"></Link>
            </div>
        </div>
    </div>
    
    </section>
    
  );
}

export default Hero;