import React, { useEffect,useState } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Footer from './components/Pages/Footer';
import MySkill from './components/Pages/MySkill';
import Project from './components/Pages/Project';

const App = () => {

  const [theme, setTheme] = useState('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {

    if (window.scrollY > 500) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Home theme={theme} setTheme={setTheme}/>
        <About theme={theme} setTheme={setTheme}/>
        <Project/>
        <MySkill/>
        <Contact/>
        <Footer/>
        <button className={`scrollTop ${showScrollTop ? 'show shake' : ''}`} onClick={scrollToTop}><FaArrowUp/></button>
    </div>
  )
}

export default App