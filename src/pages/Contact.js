import React from 'react';
import './contact.css';
export default function Contact() {
  return (
    <>
    <div className="container">  
    <form id="contact" action="" method="post">
      <h3> Contact Form</h3>
     
      <fieldset>
        <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
      </fieldset>
      <fieldset>
        <input placeholder="Your Email Address" type="email" tabindex="2" required/>
      </fieldset>
      <fieldset>
        <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
      </fieldset>
      <fieldset>
        <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required/>
      </fieldset>
      <fieldset>
        <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      </fieldset>
      <p className="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
    </form>
  </div>
    </>
  );
}
