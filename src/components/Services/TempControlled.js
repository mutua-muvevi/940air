import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Mainnav from '../mainnav/Mainnav'
import Footer from '../main/footer/Footer'
import TEMP_IMG from '../../assets/truck-460432_1920.jpg'
import './ServiceDetail.css'

const TempControlled = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-detail-page">
            <Mainnav />
            
            <div className="service-hero-banner" style={{backgroundImage: `url(${TEMP_IMG})`}}>
                <div className="service-hero-overlay"></div>
                <div className="service-hero-content">
                    <h1 className="service-hero-title">Temperature Controlled</h1>
                    <p className="service-hero-subtitle">Total logistics solutions to maintain the cold chain during transport.</p>
                </div>
            </div>

            <div className="service-main-content">
                <h2>Protecting the Cold Chain</h2>
                <p>
                    940 Air Cargo offers total logistics solutions to maintain the strict cold chain requirements for temperature-sensitive cargo. We understand that a minor temperature fluctuation can compromise the integrity, safety, and value of your goods.
                </p>

                <h2>Specialized Cargo Handling</h2>
                <p>
                    Our fleet and facilities are equipped with state-of-the-art climate control technology, allowing us to safely transport a wide variety of delicate shipments:
                </p>
                <ul>
                    <li><i className="fas fa-seedling"></i> <strong>Agricultural & Horticultural:</strong> Keeping fresh cut flowers, Khatt, and perishable produce fresh from farm to market.</li>
                    <li><i className="fas fa-pills"></i> <strong>Medical & Pharmaceutical:</strong> Secure, stable environments for life-saving drugs, vaccines, and sensitive medical shipments.</li>
                    <li><i className="fas fa-snowflake"></i> <strong>Cryogenic Transport:</strong> Extreme low-temperature handling (down to -180°C) specifically designed for IVF gametes and embryos.</li>
                </ul>

                <h2>Knowledge & Compliance</h2>
                <p>
                    From specialized active cooling containers to passive thermal packaging, we possess the necessary knowledge and industry certifications to assure the safe delivery of your cargo. Our team monitors the ambient temperature at every handover point, ensuring zero exposure to adverse weather conditions.
                </p>

                <div className="service-cta">
                    <h3>Do you have sensitive cargo to move?</h3>
                    <p>Consult with our cold-chain experts to design a secure transit plan.</p>
                    <Link to="/contact" className="service-cta-btn">Get a Quote</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TempControlled
