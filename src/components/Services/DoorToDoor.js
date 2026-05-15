import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Mainnav from '../mainnav/Mainnav'
import Footer from '../main/footer/Footer'
import DOOR_IMG from '../../assets/container.jpg'
import './ServiceDetail.css'

const DoorToDoor = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-page">
            <Mainnav />
            
            <div className="service-hero-banner" style={{backgroundImage: `url(${DOOR_IMG})`}}>
                <div className="service-hero-overlay"></div>
                <div className="service-hero-content">
                    <h1 className="service-hero-title">Door-to-Door Delivery</h1>
                    <p className="service-hero-subtitle">End-to-end logistics management from origin to final destination.</p>
                </div>
            </div>

            <div className="service-main-content">
                <h2>Ultimate Convenience & Peace of Mind</h2>
                <p>
                    Our Door-to-Door logistics service is designed to remove all the stress and complexity from your supply chain. We take full responsibility for your shipment from the precise moment it leaves the origin facility until it is safely placed in the final recipient's hands, anywhere in the world.
                </p>

                <h2>End-to-End Management</h2>
                <p>
                    By trusting 940 Air Cargo with your logistics, you benefit from a single point of contact and streamlined communication. We manage the entire lifecycle of the shipment:
                </p>
                <ul>
                    <li><i className="fas fa-truck-loading"></i> <strong>Origin Pickup:</strong> Collecting cargo directly from your supplier's warehouse or factory.</li>
                    <li><i className="fas fa-file-signature"></i> <strong>Export Customs:</strong> Handling all export declarations and compliance documentation.</li>
                    <li><i className="fas fa-globe"></i> <strong>Main Carriage:</strong> Coordinating the primary Air or Sea freight routing.</li>
                    <li><i className="fas fa-stamp"></i> <strong>Import Clearance:</strong> Managing import duties, taxes, and port handling at the destination.</li>
                    <li><i className="fas fa-map-marked-alt"></i> <strong>Final Mile:</strong> Delivering the goods directly to the final address or retail location.</li>
                </ul>

                <p>
                    We combine our Air, Sea, and Trucking capabilities to offer a seamless, integrated solution. We deliver results, straight to your doorstep. Focus on your core business while we handle the complexity of global logistics.
                </p>

                <div className="service-cta">
                    <h3>Simplify your supply chain today.</h3>
                    <p>Request an all-inclusive door-to-door quotation.</p>
                    <Link to="/contact" className="service-cta-btn">Get a Quote</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DoorToDoor
