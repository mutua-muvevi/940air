import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Mainnav from '../mainnav/Mainnav'
import Footer from '../main/footer/Footer'
import CHARTER_IMG from '../../assets/model-planes-1566822_1920.jpg'
import './ServiceDetail.css'

const AirCharter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-page">
            <Mainnav />
            
            <div className="service-hero-banner" style={{backgroundImage: `url(${CHARTER_IMG})`}}>
                <div className="service-hero-overlay"></div>
                <div className="service-hero-content">
                    <h1 className="service-hero-title">Air Cargo Charter</h1>
                    <p className="service-hero-subtitle">Dedicated small & large cargo aircraft networks for urgent, regional logistics.</p>
                </div>
            </div>

            <div className="service-main-content">
                <h2>Urgent Logistics for the Great Lakes Region</h2>
                <p>
                    When standard commercial flights cannot meet your timeline or capacity requirements, 940 Air Cargo provides dedicated Air Cargo Charter services. We have an extensive network of small and large cargo aircraft within the region, offering the ultimate flexibility to move your urgent cargoes precisely when you need them.
                </p>

                <h2>Regional Coverage</h2>
                <p>
                    Our charter operations specialize in rapidly deploying aircraft across the entire Great Lakes region and neighboring states, including:
                </p>
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i> Kenya, Uganda, Tanzania</li>
                    <li><i className="fas fa-map-marker-alt"></i> Burundi & Rwanda</li>
                    <li><i className="fas fa-map-marker-alt"></i> South Sudan & Somalia</li>
                    <li><i className="fas fa-map-marker-alt"></i> Democratic Republic of Congo</li>
                </ul>

                <h2>Comprehensive Charter Support</h2>
                <p>
                    We don't just supply the aircraft; we provide end-to-end operational support for your chartered flight. Our additional air services include:
                </p>
                <ul>
                    <li><i className="fas fa-plane-arrival"></i> <strong>Clearances:</strong> Securing rapid Landing Permissions and Overflight rights.</li>
                    <li><i className="fas fa-gas-pump"></i> <strong>Aviation Services:</strong> Fuel Brokerage and Cargo capacity sales.</li>
                    <li><i className="fas fa-clipboard-check"></i> <strong>Logistics:</strong> Cargo reservations and Post-Flight Confirmation of cargo uplift.</li>
                    <li><i className="fas fa-users"></i> <strong>Crew Support:</strong> Hotel Bookings and Crew Transport logistics.</li>
                </ul>

                <div className="service-cta">
                    <h3>Require immediate aircraft deployment?</h3>
                    <p>Contact our aviation charter desk for rapid availability and payload quotes.</p>
                    <Link to="/contact" className="service-cta-btn">Request Charter Quote</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AirCharter
