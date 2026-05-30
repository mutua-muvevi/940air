import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Mainnav from '../mainnav/Mainnav'
import Footer from '../main/footer/Footer'
import TRUCK_IMG from '../../assets/truck.jpg'
import './ServiceDetail.css'

const Trucking = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-page">
            <Mainnav />
            
            <div className="service-hero-banner" style={{backgroundImage: `url(${TRUCK_IMG})`}}>
                <div className="service-hero-overlay"></div>
                <div className="service-hero-content">
                    <h1 className="service-hero-title">Trucking & Ground</h1>
                    <p className="service-hero-subtitle">Robust ground logistics covering East Africa and regional distribution networks.</p>
                </div>
            </div>

            <div className="service-main-content">
                <h2>The Backbone of Regional Trade</h2>
                <p>
                    Our ground transportation network is built on reliability, local knowledge, and unmatched efficiency. We provide comprehensive trucking solutions for local exporters, importers, and organizations operating throughout East Africa and beyond. From port-to-warehouse transfers to cross-border long-haul routes, we keep your supply chain moving.
                </p>

                <h2>Our Fleet Capabilities</h2>
                <p>
                    We deploy a versatile fleet capable of handling diverse cargo requirements safely and securely.
                </p>
                <ul>
                    <li><i className="fas fa-truck"></i> <strong>Full Truckload (FTL):</strong> Dedicated vehicles for large shipments, offering direct, uninterrupted delivery to your destination.</li>
                    <li><i className="fas fa-box-open"></i> <strong>Less-than-Truckload (LTL):</strong> Cost-effective consolidation services for smaller shipments without sacrificing delivery speed.</li>
                    <li><i className="fas fa-shield-alt"></i> <strong>High-Security Transits:</strong> GPS-tracked vehicles with escorted convoys available for high-value cargo.</li>
                </ul>

                <h2>Unmatched Local Expertise</h2>
                <p>
                    We understand that the pillar of any logistics company is the ability to deliver on time with minimal risk of loss. Our extensive contacts throughout the region and our team's local language advantage ensure that your cargo crosses borders and navigates local road networks without unnecessary delays or bureaucratic hurdles.
                </p>

                <div className="service-cta">
                    <h3>Need reliable ground transport?</h3>
                    <p>Let our dispatch team coordinate your next regional delivery.</p>
                    <Link to="/contact" className="service-cta-btn">Get a Quote</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Trucking
