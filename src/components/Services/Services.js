import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Services.css"
import Mainnav from './../mainnav/Mainnav';
import Footer from '../main/footer/Footer';
import AIR_IMG from '../../assets/air-kenya.jpg'
import TRUCK_IMG from '../../assets/truck.jpg'
import SHIP_IMG from '../../assets/ship.jpg'
import DOOR_IMG from '../../assets/container.jpg'
import TEMP_IMG from '../../assets/truck-460432_1920.jpg'
import CHARTER_IMG from '../../assets/model-planes-1566822_1920.jpg'

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services-page-wrapper">
            <Mainnav/>
            
            <div className="services-hero">
                <h1>Our Services</h1>
                <p>Comprehensive logistical solutions tailored to your specific industry needs.</p>
            </div>

            <div className="services-content-container">
                <div className="services-grid">
                    <Link to="/services/air-freight" className="service-card-link">
                        <div className="service-card">
                            <div className="service-img-wrapper">
                                <img src={AIR_IMG} alt="Air Freight" />
                                <div className="service-icon-badge"><i className="fas fa-plane"></i></div>
                            </div>
                            <div className="service-card-content">
                                <h3>Air Freight</h3>
                                <p>Specialized handling of cargo, including temperature-sensitive shipments like IVF gametes. We maintain temperatures as low as -180°C across continents.</p>
                                <span className="service-read-more">Learn More &#8594;</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/services/trucking" className="service-card-link">
                        <div className="service-card">
                            <div className="service-img-wrapper">
                                <img src={TRUCK_IMG} alt="Trucking" />
                                <div className="service-icon-badge"><i className="fas fa-truck"></i></div>
                            </div>
                            <div className="service-card-content">
                                <h3>Trucking</h3>
                                <p>Local and regional ground transportation solutions. Reliable, on-time delivery with minimal risk of loss across East Africa and beyond.</p>
                                <span className="service-read-more">Learn More &#8594;</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/services/sea-freight" className="service-card-link">
                        <div className="service-card">
                            <div className="service-img-wrapper">
                                <img src={SHIP_IMG} alt="Sea Freight" />
                                <div className="service-icon-badge"><i className="fas fa-ship"></i></div>
                            </div>
                            <div className="service-card-content">
                                <h3>Sea Freight</h3>
                                <p>Global maritime logistics for various cargo types. Cost-effective solutions for large volume shipments with full tracking capabilities.</p>
                                <span className="service-read-more">Learn More &#8594;</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/services/door-to-door" className="service-card-link">
                        <div className="service-card">
                            <div className="service-img-wrapper">
                                <img src={DOOR_IMG} alt="Door to Door" />
                                <div className="service-icon-badge"><i className="fas fa-box-open"></i></div>
                            </div>
                            <div className="service-card-content">
                                <h3>Door to Door</h3>
                                <p>End-to-end logistics management from origin to final destination. We handle the complexity so you can focus on your business.</p>
                                <span className="service-read-more">Learn More &#8594;</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/services/temperature-controlled" className="service-card-link">
                        <div className="service-card">
                            <div className="service-img-wrapper">
                                <img src={TEMP_IMG} alt="Temperature Controlled" />
                                <div className="service-icon-badge"><i className="fas fa-snowflake"></i></div>
                            </div>
                            <div className="service-card-content">
                                <h3>Temperature Controlled</h3>
                                <p>Total logistics solutions to maintain the cold chain. Safe delivery for fresh produce, medical, and pharmaceutical shipments.</p>
                                <span className="service-read-more">Learn More &#8594;</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/services/air-charter" className="service-card-link">
                        <div className="service-card">
                            <div className="service-img-wrapper">
                                <img src={CHARTER_IMG} alt="Air Cargo Charter" />
                                <div className="service-icon-badge"><i className="fas fa-fighter-jet"></i></div>
                            </div>
                            <div className="service-card-content">
                                <h3>Air Cargo Charter</h3>
                                <p>Dedicated small and large cargo aircraft network for urgent deliveries within the Great Lakes region and broader Africa.</p>
                                <span className="service-read-more">Learn More &#8594;</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="services-info-cta">
                    <h2>Calculate Your Shipping Costs</h2>
                    <p>
                        Freight costs are calculated based on <strong>Chargeable Weight</strong>. Understand how we determine the cost of your shipment before you book.
                    </p>
                    <Link to="/resource-formula" className="services-cta-btn">View Resource Formula</Link>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Services
