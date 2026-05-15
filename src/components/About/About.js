import React from 'react'
import './About.css'
import Mainnav from './../mainnav/Mainnav';
import Footer from './../main/footer/Footer';
import AboutBanner from './About banner/AboutBanner';
import SomeQuotes from './SomeQuotes/SomeQuotes';
import AboutTabs from './AboutTabs/AboutTabs';
import Leftimgcontent from '../main/leftimgcontent/leftimgcontent';

const About = () => {
    return (
        <div className="about-page-wrapper">
            <Mainnav/>
            <AboutBanner/>
            <div className="about-content-section">
                {/* Re-using the modernized Leftimgcontent because it has our newly designed About Us layout */}
                <Leftimgcontent />
            </div>
            <SomeQuotes/>
            <AboutTabs/>
            <Footer/>
        </div>
    )
}

export default About