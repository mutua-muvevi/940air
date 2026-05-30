import React from 'react'
import './ContactUs.css'
import Mainnav from './../mainnav/Mainnav';
import Footer from '../main/footer/Footer';
import ContactUsForm from './ContactUsForm/ContactUsForm';
import bannerImg from '../../assets/call.jpg';

const Contactus = () => {
    return (
        <div className="contact-us">
            <Mainnav/>
            
            <div className="contact-us-banner" style={{backgroundImage: `linear-gradient(rgba(0, 25, 51, 0.7), rgba(0, 25, 51, 0.7)), url(${bannerImg})`}}>
                <div className="contact-us-banner-content">
                    <h2>Contact Us</h2>
                    <p>We are always here to listen. Reach out to 940 Air Cargo for any inquiries, quotes, or support.</p>
                </div>
            </div>

            <div className="contact-container">
                <div className="contact-info-card">
                    <h3>Get in Touch</h3>
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Address:</strong>
                            <p>FIT Building, 1st Floor, JKIA Cargo Village,<br/>Second Freight Lane, Nairobi, Kenya</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone-alt"></i>
                        <div>
                            <strong>Phone:</strong>
                            <p>+254 020 243 2584<br/>+254 777 794 001</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <strong>Email:</strong>
                            <p>info@940aircargo.com<br/>ken.wadhwa@940aircargo.com</p>
                        </div>
                    </div>
                    
                    <div className="office-hours">
                        <h3>Office Hours</h3>
                        <ul>
                            <li><span>Monday - Friday:</span> <span>8:00 AM - 5:00 PM</span></li>
                            <li><span>Saturday:</span> <span>9:00 AM - 1:00 PM</span></li>
                            <li><span>Sunday:</span> <span>Closed</span></li>
                        </ul>
                    </div>
                </div>
                
                <div className="contact-form-wrapper">
                    <ContactUsForm/>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Contactus
