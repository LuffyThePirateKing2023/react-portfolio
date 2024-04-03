import React, { useEffect} from 'react';
import './css/MySkill.css';
import {Element} from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MySkill = () => {
  useEffect(() => {
    AOS.init({
      duration:600,
      easing:'ease-in'
    })
  },[])
  return (
    <Element id='Skill' className='mySkill section'>
        <div className="skill-container">
            <div className="header-content">
              <h2 data-aos='fade-right'>My skill</h2>
              <p data-aos='zoom-in-right'>As a web developer, I possess a diverse range of technical skills and expertise across both 
                frontend and backend technologies. With a passion for crafting robust and scalable web applications,
                I continually strive to expand my knowledge and stay up-to-date with the latest industry trends 
                and best practices. <br></br> <span className='forSpan' data-aos='zoom-in-left'>Below are some of the key skills I bring to the
                table:</span>
              </p>
            </div>

            <div className="skill-content">
                <div className="skillset" data-aos='fade-right'>
                    <div className="text">
                      <h2>HTML</h2>
                      <h3>80%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter first"></div>
                    </div>
                </div>

                <div className="skillset" data-aos='fade-left'>
                    <div className="text">
                      <h2>CSS</h2>
                      <h3>75%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter second"></div>
                    </div>
                </div>

                <div className="skillset" data-aos='fade-right'>
                    <div className="text">
                      <h2>TAILWIND CSS</h2>
                      <h3>60%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter third"></div>
                    </div>
                </div>

                <div className="skillset" data-aos='fade-left'>
                    <div className="text">
                      <h2>JAVASCRIPT</h2>
                      <h3>70%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter fourth"></div>
                    </div>
                </div>

                <div className="skillset" data-aos='fade-right'>
                    <div className="text">
                      <h2>REACT</h2>
                      <h3>65%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter fifth"></div>
                    </div>
                </div>

                <div className="skillset" data-aos='fade-left'>
                    <div className="text">
                      <h2>RESPONSIVE WEBSITE</h2>
                      <h3>75%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter six"></div>
                    </div>
                </div>

                
                <div className="skillset" data-aos='fade-right'>
                    <div className="text">
                      <h2>VERSION CONTROL / GIT</h2>
                      <h3>55%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter seven"></div>
                    </div>
                </div>

                
                <div className="skillset" data-aos='fade-left'>
                    <div className="text">
                      <h2>APIs</h2>
                      <h3>50%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter eight"></div>
                    </div>
                </div>

                
                <div className="skillset" data-aos='fade-right'>
                    <div className="text">
                      <h2>NODE JS</h2>
                      <h3>50%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter nine"></div>
                    </div>
                </div>

    
                <div className="skillset" data-aos='fade-left'>
                    <div className="text">
                      <h2>EXPRESS JS</h2>
                      <h3>45%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter ten"></div>
                    </div>
                </div>


                <div className="skillset" data-aos='fade-right'>
                    <div className="text">
                      <h2>MONGODB DATABASE</h2>
                      <h3>50%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter eleven"></div>
                    </div>
                </div>
                
                <div className="skillset" data-aos='fade-left'>
                    <div className="text">
                      <h2>C++ Programming</h2>
                      <h3>40%</h3>
                    </div>
                    <div className="meter">
                        <div className="percent-meter twelve"></div>
                    </div>
                </div>
            </div>

        </div>
    </Element>
  )
}

export default MySkill