import React, {useEffect,useRef, useState} from 'react';
import './css/Contact.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const serviceId = 'service_nrzufgg'; 
  const templateId = 'template_kdeoaho'; 
  const publicKey = 'S57tAQ7G55p4sm6MH'; 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId , form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');

          //clear input fields
          form.current.reset();

          //alert the user
          alert('Thank you for messaging me.')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
    AOS.init({
      duration:600,
      easing:'ease-in'
    })
  },[])
  
  return (
    <Element id='contact' className='contact section'>
      <div className="contact-content">
        <div className="illustration">
            <h2 data-aos='fade-down'>Let's Talk..</h2>
            <h3  data-aos='fade-down'>Tell me about a project in mind.</h3>
            <p  data-aos='fade-down'>Let's create something together 👋</p>
        </div>
        <div className="form-area" data-aos='fade-right'>
            <h3>Send me a message🚀</h3>

          <form className="form-field" ref={form} onSubmit={sendEmail}>

            <input
             type="text" 
             placeholder='Your Name' 
             id='name'
             name='user_name'
             autoComplete='off'
            />

            <input 
            type="email" 
            placeholder='Your email' 
            id='email'
            autoComplete='off'
            name='user_email'
            />

            <p>Just message me whats on your mind.</p>

            <textarea 
            name='message'
            id='message'
            autoComplete='off'
            >
            </textarea>

            <input type="submit" value="Send" className='submit-btn'/>

          </form>

        </div>
      </div>

    </Element>
  )
}

export default Contact