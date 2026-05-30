import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Mainnav from '../mainnav/Mainnav'
import Footer from '../main/footer/Footer'
import AIR_IMG from '../../assets/air-kenya.jpg'
import './ServiceDetail.css'

const AirFreight = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-page">
            <Mainnav />
            
            <div className="service-hero-banner" style={{backgroundImage: `url(${AIR_IMG})`}}>
                <div className="service-hero-overlay"></div>
                <div className="service-hero-content">
                    <h1 className="service-hero-title">Air Freight</h1>
                    <p className="service-hero-subtitle">Fast, secure, and reliable air cargo logistics connecting Africa to the world.</p>
                </div>
            </div>

            <div className="service-main-content">
                <h2>Precision Above the Clouds</h2>
                <p>
                    At 940 Air Cargo, our Air Freight solutions are meticulously tailored to meet the most demanding timelines and conditions. We understand that air freight is a premium service reserved for time-critical and high-value cargo. Our global network ensures your goods arrive on time, every time, without compromise.
                </p>

                <h2>Specialized Handling Capabilities</h2>
                <p>
                    We excel in the specialized handling of cargo, ensuring that even your most delicate shipments reach their destinations securely.
                </p>
                <ul>
                    <li><i className="fas fa-check-circle"></i> <strong>IVF & Gametes Transport:</strong> We possess niche expertise in the transport of biological materials, maintaining strict temperature controls down to -180°C.</li>
                    <li><i className="fas fa-check-circle"></i> <strong>High-Value Goods:</strong> Enhanced security protocols and continuous monitoring for electronics, jewelry, and sensitive documents.</li>
                    <li><i className="fas fa-check-circle"></i> <strong>Perishables:</strong> Expedited handling and cold-chain integrity for agricultural exports, fresh cut flowers, and pharmaceuticals.</li>
                </ul>

                <h2>Global Network & Partnerships</h2>
                <p>
                    Whether you are an importer, exporter, or an international organization, we leverage our extensive network and direct negotiations with top-tier airlines and cargo handlers to provide seamless air freight forwarding. By securing block space agreements, we guarantee uplift capacity even during peak seasons.
                </p>

                <div className="service-cta">
                    <h3>Ready to fly your cargo?</h3>
                    <p>Contact our air freight specialists today for an accurate quote based on chargeable weight.</p>
                    <Link to="/contact" className="service-cta-btn">Get a Quote</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AirFreight
