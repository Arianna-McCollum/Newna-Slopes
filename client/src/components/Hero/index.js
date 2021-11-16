import React from 'react';
import logo from '../../images/logos/logo.png'

function Hero() {
  return (
    <section id="/">
    <div className="hero">
        <div className="hero-container-right">
            <div className="hero-container">
              <img src={logo} className="imglogo" alt="logo" />
              <h1 className="hero-header" >Newna Bros. </h1>
              <p>Skis, Boards, & <span>More</span></p>
              <button className="btn">Visit Our Online Shop!</button>
              <a href="#" class="scroll-down" address="true"></a>
            </div>
        </div>
    </div>
    
    </section>
    
  );
}

export default Hero;