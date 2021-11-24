import React from 'react';
import Fade from 'react-reveal/Fade';
import './style.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_a576nc3', 'template_z1jwth6', e.target, 'user_culXofI6PLj14NhpM04V2')
    .then((result) => {
      console.log(result.text)
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully"
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: "error",
        title: "Ooops, something went wrong",
        text: error.text,
      })
    });
    e.target.reset();
  }

  return (
    <section className="contact" id="contact">
        <div className="contact-box">
            <Fade left>
            <div className="left"></div>
            </Fade>
            <Fade right>
            <div className="right">
              <form action="" onSubmit={sendEmail}>
                <h2>Send us a message!</h2>
                <p>We will get back to you as soon as possible!</p>
                <input type="text" className="field" placeholder="Your Name" required />
                <input type="email" className="field" placeholder="Your E-mail" required />
                <textarea className="field" placeholder="Message" required />
                <button type="submit" className="contactbtn btn" onSubmit={sendEmail}>Send!</button>
              </form>
            </div>
            </Fade>

        </div>

    </section>
    
  );
}
export default Contact;