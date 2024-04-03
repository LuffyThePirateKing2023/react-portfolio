import React, { useRef, useState,useEffect } from 'react';
import './css/Project.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Project1 from '../../assets/project/shoppers.jpg';
import Project2 from '../../assets/project/e-commerce.jpg';
import Project3 from '../../assets/project/ip-tracker.jpg';
import Project4 from '../../assets/project/space-tourism.jpg';
import Project5 from '../../assets/project/news-homepage.jpg';
import Project6 from '../../assets/project/newsletter.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Project = () => {
  const [showMore, setshowMore] = useState(false);
  const mainDivRef = useRef(null);
  const [isLoading, setLoading] = useState(false);

  // toggle show more and show less button
  const toggleShowMore = () => {
    setLoading(true);        //change the set loading state to true

    //add loading delay if it is only show more option
    if(!showMore){
      setTimeout(() => {
        setLoading(false);     //change the state to false
        setshowMore(!showMore);
      },1000);
    }
    else{
      setLoading(false);
      setshowMore(!showMore);

      if(mainDivRef.current){
        const scrolltoTop = mainDivRef.current.offsetTop;
        window.scrollTo({
          top:scrolltoTop,
          behavior:'smooth',
        })
    }
  }
}

useEffect(() => {
  AOS.init({
    duration:800,
    easing:'ease-in'
  })
},[])

  return (
    <Element id='Project' className='project section'>
                <h3 data-aos='fade-left'>My Project</h3>
        <div className='project-container' ref={mainDivRef}>

              <div className="project-content" data-aos='fade-right'>
                <img src={Project1} alt="" />
                <div className='the-content'>
                <h2>SHOPPERS</h2>
                  <p>
                  Shopper: A dynamic e-commerce platform showcasing my proficiency in React,
                  delivering a seamless user experience with fast loading times, real-time updates,
                    and intuitive navigation.
                  </p>
                  <ul>
                    <li><a href='https://jkofficialrepository.github.io/shopper/' target='_blank' rel='noopener noreferrer'>Visit Page</a></li>
                  </ul>
                </div>
              </div>

            <div className="project-content" data-aos='fade-up'>
                <img src={Project2} alt="" />
                <div className='the-content'>
                <h2>E-COMMERCE LANDING PAGE</h2>
                  <p>
                    Crafted with proficiency in HTML, CSS, and JavaScript, my project page showcases a dynamic E-commerce Landing Page,
                    offering a showcase of my skills and expertise in web development.
                  </p>
                  <ul>
                    <li><a href='https://jkofficialrepository.github.io/E-Commerce-Website/' target='_blank' rel='noopener noreferrer'>Visit Page</a></li>
                  </ul>
                </div>
              </div>

              <div className="project-content" data-aos='fade-left'>
                <img src={Project3} alt="" />
                <div className='the-content'>
                <h2>IP-ADDRESS TRACKER</h2>
                  <p>
                   Uur IP Address Tracker project utilizes advanced technologies to provide real-time
                   location tracking based on IP addresses. Seamlessly integrating HTML, CSS, JavaScript, and APIs.
                  </p>
                  <ul>
                    <li><a href='https://jkofficialrepository.github.io/IP-Tracker/' target='_blank' rel='noopener noreferrer'>Visit Page</a></li>
                  </ul>
                </div>
              </div>
          

          {/* hide the remaining divs  */}

          {showMore && ( <> 
          

                <div className="project-content project4" data-aos='fade-right'>
                <img src={Project4} alt="" />
                <div className='the-content'>
                <h2>SPACE TOUR</h2>
                  <p>
                    Embark on an awe-inspiring journey through our Space Tour page, 
                    meticulously designed with HTML, CSS, and JavaScript, inviting you to explore the
                    cosmos and unlock the mysteries of the universe.
                  </p>
                  <ul>
                    <li><a href='https://jkofficialrepository.github.io/Space-Tour/' target='_blank' rel='noopener noreferrer'>Visit Page</a></li>
                  </ul>
                </div>
              </div>

            <div className="project-content" data-aos='fade-up'>
                <img src={Project5} alt="" />
                <div className='the-content'>
                <h2>NEWS HOMEPAGE</h2>
                  <p>
                    Crafted with proficiency in HTML, CSS, and JavaScript, my project page showcases a dynamic News Landing Page,
                    offering a showcase of my skills and expertise in web development.
                  </p>
                  <ul>
                    <li><a href='https://jkofficialrepository.github.io/News-homepage/' target='_blank' rel='noopener noreferrer'>Visit Page</a></li>
                  </ul>
                </div>
              </div>

              <div className="project-content" data-aos='fade-left'>
                <img src={Project6} alt="" />
                <div className='the-content'>
                <h2>NEWSLETTER</h2>
                  <p>
                  The Newsletter Signup Form page demonstrates my expertise in frontend development, 
                  particularly in HTML, CSS, and JavaScript, it showcase my ability to create intuitive and 
                  user-friendly interfaces for seamless communication and engagement.
                  </p>
                  <ul>
                    <li><a href='https://jkofficialrepository.github.io/Newsletter-sign-up-form/' target='_blank' rel='noopener noreferrer'>Visit Page</a></li>
                  </ul>
                </div>
              </div>

              </>
            )}

        </div>

       <button className={`show-more ${isLoading && !showMore ? 'loader' : ' '}`} 
        onClick={toggleShowMore} 
        disabled={isLoading}
       >
        {isLoading ? ' ' : showMore ? 'Show less...' : 'Show more...'}
       </button>

    </Element>
  )
}

export default Project