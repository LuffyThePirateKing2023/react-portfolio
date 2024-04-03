import React, { useEffect, useState } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './css/Footer.css';
import {FaFacebook, FaLinkedin, FaEnvelope, FaInstagram} from 'react-icons/fa';



const Footer = () => {
    
  const [socialmediaLinks, setsocialmediaLinks ] = useState({})

      useEffect(() => {
        //initialize the scroll effect
        fetchsocialmediaLinks()
      },[]);

      const fetchsocialmediaLinks = async() => {
        try{
          const response = await fetch('/social/links');
          if(!response.ok){
            throw new Error('Failed to fetch the Social Media Links');
          }
          const data = await response.json();
          setsocialmediaLinks(data);
        }
        catch(error){
            // console.error('social media fetch',error);
        }
      }

      const Scrollto = (element) => {
        scroller.scrollTo(element, {
          duration:800,
          delay:0,
          smooth:'easeInOutQuart'
        })
      }
  return (
    <Element name='footer' className='footer section'>
        <div className="footer-content">
          <div className="socialIcon">
            <ul>
              <li><a href={socialmediaLinks.facebook} target='_blank'><FaFacebook className='social-icon'/></a></li>
              <li><a href={socialmediaLinks.linkedin} target='_blank'><FaLinkedin className='social-icon'/></a></li>
              <li><a href={socialmediaLinks.instagram} target='_blank'><FaInstagram className='social-icon'/></a></li>
            </ul>
          </div>

          <div className="footer-nav">
            <ul>
              <li><Link to="home" smooth={true} onClick={() => Scrollto('home')}>Home</Link></li>
              <li><Link to='about' smooth={true} onClick={()=> Scrollto('about')}>About</Link></li>
              <li><Link to='Project' smooth={true} onClick={()=> Scrollto('Project')}>Project</Link></li>
              <li><Link to='Skill' smooth={true} onClick={()=> Scrollto('Skill')}>Skill</Link></li>
              <li><Link to='contact' smooth={true} onClick={()=> Scrollto('contact')}>Contact Me</Link></li>
            </ul>
          </div>

        </div>
        <div className="copyrigth">
          <p>Copyright © 2024 : Designed by <span>KEVIN</span>. All rights reserved.</p>
        </div>
    </Element>
  )
}

export default Footer