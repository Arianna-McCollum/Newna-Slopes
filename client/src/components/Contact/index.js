import React from 'react';
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <section className="contact" id="contact">
        <div className="contact-box">
            <div className="left"></div>
            <div className="right">
                <h2>Send us a message!</h2>
                <p>A real person will get back to you as soon as possible!</p>
                <input type="text" className="field" placeholder="Your Name" />
                <input type="email" className="field" placeholder="Your E-mail" />
                <textarea className="field" placeholder="Message" />
                <button className="contactbtn btn" onClick={()=> navigate("/success")}>Send!</button>
            </div>

        </div>

    </section>
    
  );
}
export default Contact;