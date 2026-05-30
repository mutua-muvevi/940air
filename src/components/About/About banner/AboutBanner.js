import React from 'react'
import './AboutBanner.css'

const AboutBanner = () => {
    return (
        <div className="about-banner-section">
            <div className="about-banner-overlay"></div>
            <div className="about-banner-content">
                <h4 className="about-banner-subtitle">ABOUT 940 AIR CARGO</h4>
                <h1 className="about-banner-title">
                    Who We Are
                </h1>
                <p className="about-banner-text">
                    A dedicated logistics team serving Africa and the world with integrity and excellence. We bridge the gap between local exporters and global markets.
                </p>
            </div>
        </div>
    )
}

export default AboutBanner
