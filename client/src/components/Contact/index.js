import React from 'react';
import { useNavigate } from "react-router-dom";
import Fade from 'react-reveal/Fade';

function Contact() {
  const navigate = useNavigate();

  return (
    <section className="contact" id="contact">
        <div className="contact-box">
            <Fade left>
            <div className="left"></div>
            </Fade>
            <Fade right>
            <div className="right">
                <h2>Send us a message!</h2>
                <p>We will get back to you as soon as possible!</p>
                <input type="text" className="field" placeholder="Your Name" />
                <input type="email" className="field" placeholder="Your E-mail" />
                <textarea className="field" placeholder="Message" />
                <button className="contactbtn btn" onClick={()=> navigate("/success")}>Send!</button>
            </div>
            </Fade>

        </div>

    </section>
    
  );
}
export default Contact;