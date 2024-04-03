import React, { useEffect } from 'react';
import './css/Home.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import light_icon from '../../assets/light_icon_home.png';
import dark_icon from '../../assets/dark_icon_home.png';
import myCV from '../../assets/cv/DownloadCV.pdf';

const Home = ({ theme, setTheme }) => {
  //handle download for my cv
  const DownloadCv = () => {
    const link = document.createElement('a');
    link.href = myCV;
    link.download = 'ResumeData.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      alert('Done Downloading')
    }, 1000);
  };

  const smoothScrolled = true;
  const ScrollTo = (e) => {
    scroller.scrollTo(e, { 
        duration:800,
        delay:0,
        smooth: 'easeInOutQuart'
    });
  };
  return (
    <Element id='home' className='home section' >
        <div className="content">
            <div className="mainContent">
                <h2 >Hello, it's me  </h2>
                <h1 ><span>Kevin</span></h1>
                <h3 className='text-anim'>Web Developer</h3>
                <p>
                  Transforming visions into captivating experiences is my forte. 
                  I specialize in crafting web applications that seamlessly merge
                  functionality with visual appeal. Explore my portfolio and feel 
                  free to contact me or download my CV for more details
                </p>
                <div className="btn">
                <button onClick={DownloadCv}>Download CV</button>
                <a href='#contact' smooth={smoothScrolled .toString()} onClick={(e) => {e.preventDefault(); ScrollTo('contact');}}>
                  <button>Contact Me</button>
                  </a>
                </div>
            </div>
            <div className="svgContent">
                    <img src={theme === 'light' ? light_icon : dark_icon} alt='svg' />
            </div>
        </div>
    </Element>
  )
}

export default Home