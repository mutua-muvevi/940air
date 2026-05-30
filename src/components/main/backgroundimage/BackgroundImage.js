import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./BackgroundImage.css";

const BackgroundImage = () => {
    const navigate = useNavigate();

    return (
        <div className="background-image-section">
            <div className="background-image-overlay"></div>
            <div className="background-image-section-content">
                <h2 className="background-image-content-h2">We Are Here For You</h2>
                <p className="background-image-content-p">
                    At 940 Air Cargo, we thrive on the delivery of quality services. 
                    We provide logistical solutions to local Exporters, Importers, and International Organizations within Africa and across the globe. 
                    Our word is our bond—results delivered.
                </p>
                <button className="background-img-button" onClick={() => navigate('/contact')}>
                    Contact Us Now
                </button>
            </div>
        </div>
    )
}

export default BackgroundImage
