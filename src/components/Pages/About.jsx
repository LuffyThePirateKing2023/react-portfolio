import React, { useEffect } from 'react';
import './css/About.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {FaAddressCard, FaUserTie, FaBriefcase, FaMedal, FaBullseye} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = ({ theme, setTheme }) => {
  useEffect(() => {
    AOS.init({
      duration:900,
      easing:'ease-in'
    })
  },[])
  return (
    <Element id='about' className='about section'>
          <div className="about-container">
              <ul>
                  <li data-aos='fade-up-right'>
                    <h3 className='title' data-aos='fade-right'>About me</h3>
                    <p data-aos='fade-right'>Welcome! I am <span className='my-name'>James Kevin Garciano</span> a BSIT Graduate with a passion for all things in programming.</p>
                    <span className='circle'><FaAddressCard className='icon'/></span>
                  </li>

                  <li data-aos='fade-down-left'>
                    <h3 className='title' data-aos='fade-left'>My Background</h3>
                    <p data-aos='fade-left'>I hold a degree in Bachelors of Science in Industrial Technology (BSIT) and have
                      honed my skills in web development, programming, and digital innovation.
                    </p>
                    <span className='circle'><FaUserTie className='icon'/></span>
                  </li>

                  <li data-aos='fade-up-right'>
                    <h3 className='title' data-aos='fade-right'>Experiences</h3>
                        <small data-aos='fade-right'>2022 - 2023</small>
                        <h4 data-aos='fade-right'>Back Office Head.</h4>
                        <p data-aos='fade-right'>Lamonte Sales and Merchandising Specialist.</p>
                        <small data-aos='fade-right'>2019 -2020</small>
                        <h4 data-aos='fade-right'>OJT / Admin Staff.</h4>
                        <p data-aos='fade-right'>Jargon Computers.</p>
                    <span className='circle'><FaBriefcase className='icon'/></span>
                  </li>

                  <li data-aos='fade-down-left'>
                    <h3 className='title' data-aos='fade-left'>My Interest</h3>
                    <p data-aos='fade-left'>My primary focus lies in programming, where I enjoy creating dynamic and user-friendly interfaces.
                      I am proficient in Front End and Back End Development and enjoy exploring the world of programming.
                    </p>
                    <span className='circle'><FaMedal className='icon'/></span>
                  </li>

                  <li data-aos='fade-up-right'>
                    <h3 className='title'data-aos='fade-right'>My Goal</h3>
                    <p data-aos='fade-right'>As I embark on my career journey, my aim is to make meaningful contributions to the web and application development
                      programming in general where I create and engage digital experiences.
                    </p>
                    <span className='circle'><FaBullseye className='icon'/></span>
                  </li>

              </ul>
          </div>
    </Element>
  )
}

export default About