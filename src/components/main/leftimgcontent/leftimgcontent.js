import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./leftimgcontent.css"
import truck from '../../../assets/truck-460432_1920.jpg'

const Leftimgcontent = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage-about-section">
            <div className="hp-about-image-wrapper">
                <img src={truck} alt="940 Air Cargo Trucking" className="hp-about-img"/>
                <div className="hp-about-experience-badge">
                    <span className="years">10+</span>
                    <span className="text">Years of<br/>Excellence</span>
                </div>
            </div>
            
            <div className="hp-about-content">
                <h4 className="hp-about-subtitle">ABOUT US</h4>
                <h2 className="hp-about-title">Providing Logistical Solutions Globally</h2>
                
                <p className="hp-about-text">
                    940 Air Cargo provides comprehensive logistical solutions to local Exporters, Importers, and International Organizations within Africa and other parts of the world. 
                </p>
                <p className="hp-about-text">
                    The pillar of any company dealing with logistics is the ability to deliver on time with minimal risk of loss. At 940 Air Cargo, <strong>our Word is our Bond, Results Delivered.</strong> We have extensive contacts throughout the region and possess the local knowledge advantage to ensure your business runs smoothly.
                </p>
                
                <button className="hp-about-btn" onClick={() => navigate('/about')}>
                    Learn More About Us
                </button>
            </div>
        </div>
    )
}

export default Leftimgcontent
