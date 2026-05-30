import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Mainnav from '../mainnav/Mainnav'
import Footer from '../main/footer/Footer'
import SHIP_IMG from '../../assets/ship.jpg'
import './ServiceDetail.css'

const SeaFreight = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-page">
            <Mainnav />
            
            <div className="service-hero-banner" style={{backgroundImage: `url(${SHIP_IMG})`}}>
                <div className="service-hero-overlay"></div>
                <div className="service-hero-content">
                    <h1 className="service-hero-title">Sea Freight</h1>
                    <p className="service-hero-subtitle">Cost-effective global maritime logistics for large volume shipments.</p>
                </div>
            </div>

            <div className="service-main-content">
                <h2>Navigating Global Trade</h2>
                <p>
                    For large-volume shipments where cost-efficiency is paramount, our Sea Freight services provide a reliable global maritime logistics solution. We manage the immense complexity of ocean transport, allowing you to focus entirely on your core business operations. We ship to and from various destinations worldwide, focusing heavily on the East African port of Mombasa.
                </p>

                <h2>Regional Port Expertise</h2>
                <p>
                    In addition to major global shipping lanes, we offer specialized regional maritime services:
                </p>
                <ul>
                    <li><i className="fas fa-anchor"></i> <strong>Sudan Hub:</strong> Direct service lines to regional ports like Khartoum via Port Sudan.</li>
                    <li><i className="fas fa-anchor"></i> <strong>Somalia Operations:</strong> Expert handling and delivery to ports including Berbera and Hergesa.</li>
                </ul>

                <h2>Flexible Shipping Options</h2>
                <p>
                    We partner with leading ocean carriers to secure competitive rates and consistent transit times.
                </p>
                <ul>
                    <li><i className="fas fa-cubes"></i> <strong>Full Container Load (FCL):</strong> Exclusive use of standard 20ft, 40ft, or refrigerated containers for your exclusive cargo.</li>
                    <li><i className="fas fa-box"></i> <strong>Less than Container Load (LCL):</strong> Pay only for the CBM (Cubic Meters) you use by consolidating your goods with others.</li>
                </ul>
                <p>
                    Our experienced freight forwarders coordinate everything from port-to-port deliveries to complex multi-modal transport scenarios. Our commitment to meticulous planning ensures that your maritime cargo is tracked, managed, and delivered safely to its final port of call.
                </p>

                <div className="service-cta">
                    <h3>Looking for efficient ocean shipping?</h3>
                    <p>Discover our competitive FCL and LCL rates today.</p>
                    <Link to="/contact" className="service-cta-btn">Get a Quote</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SeaFreight
