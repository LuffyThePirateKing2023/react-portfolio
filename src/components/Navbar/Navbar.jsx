import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {FaBars, FaTimes, FaMoon, FaSun} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = ({ theme, setTheme }) => {

  const [scrolledNav, setscrolledNav] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(true);
  const smoothScrolled = true;
  //for menu button toggle set up
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  //for hide the ul tag when we click the li links
  const closeMenu = () => {
    setisMenuOpen(true);
  }
  //handle the smoothness scroll after the list link to be click
  const Scrollto = (element) => {
      scroller.scrollTo(element, {
        duration:800,
        delay:0,
        smooth: 'easeInOutQuart'
      });
      closeMenu()
  };

  //handle for the navigation style when scrolled
  useEffect(() => {
      const scrolledDown = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 30;

        if(scrollPosition > scrollThreshold ){
          setscrolledNav(true)
        }
        else{
          setscrolledNav(false)
        }
      };
      window.addEventListener('scroll',scrolledDown);
      return () => {
        window.removeEventListener('scroll',scrolledDown);
      }
  },[]);

  //toggle between ligth and dark mode
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  useEffect(() => {
    const handleScrollActive = () => {
      const scrollPosition = window.scrollY + 60;
      const sections = document.querySelectorAll('.section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const navLink = document.querySelector(`a[href="#${section.id}"]`);
          if (navLink) {
            navLink.classList.add('active');
          }
        } else {
          const navLink = document.querySelector(`a[href="#${section.id}"]`);
          if (navLink) {
            navLink.classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScrollActive);

    return () => {
      window.removeEventListener('scroll', handleScrollActive);
    };
  }, []);

//initiate the AOS animation for each section
  useEffect(() => {
    AOS.init({
      duration:900,
      easing:'ease-in'
    })
    },[])
  return (
    <div className={`navbar ${scrolledNav ? 'scrolled': " " }`}>
        <div className="logo">
          <h2>ProjectGallery</h2>
        </div>

        <ul className={isMenuOpen ? 'menu-open' : 'menu-closed'}>
          <li><a href='#home' className='nav-link' smooth={smoothScrolled .toString()} onClick={(e) => {e.preventDefault(); Scrollto('home');}}>Home</a></li>
          <li><a href='#about' className='nav-link' smooth={smoothScrolled .toString()} onClick={(e) => {e.preventDefault(); Scrollto('about');}}>About</a></li>
          <li><a href='#Project' className='nav-link' smooth={smoothScrolled .toString()} onClick={(e) => {e.preventDefault(); Scrollto('Project');}}>Project</a></li>
          <li><a href='#Skill' className='nav-link' smooth={smoothScrolled .toString()}onClick={(e) => {e.preventDefault(); Scrollto('Skill');}}>Skill</a></li>
          <li><a href='#contact' className='nav-link' smooth={smoothScrolled .toString()} onClick={(e) => {e.preventDefault(); Scrollto('contact');}}>Contact me</a></li>
        </ul>
        

        <div className='icons' onClick={toggleMenu}>
         {isMenuOpen ? (<FaBars className='munu-icons hamburger'/>) : (<FaTimes className='menu-icons'/>)}
        </div>

        <div className="toggletheme" onClick={toggleTheme}>
          {theme === 'dark' ? 
          <div className="dark-mode"><FaMoon className='moon'/><FaSun className='sun'/></div> : 
          <div className="light-mode"><FaMoon className='moon'/><FaSun className='sun'/></div>}
        </div>
    </div>
  )
}

export default Navbar