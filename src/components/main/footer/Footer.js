import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logo from '../../../assets/940-AIR-LOGO.png'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-col company-info">
                    <img className="footer-logo-img" src={logo} alt='940 Air Cargo Logo'/>
                    <p>940 Air Cargo provides logistical solutions to local exporters, importers, and international organizations. Big to Deliver, Small to Listen.</p>
                    <div className="footer-contact">
                        <p><i className="fas fa-map-marker-alt"></i> JKIA Cargo Village, Nairobi</p>
                        <p><i className="fas fa-phone-alt"></i> +254 020 243 2584</p>
                        <p><i className="fas fa-envelope"></i> info@940aircargo.com</p>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/blogs">Newsroom</Link></li>
                        <li><Link to="/customer-resources">Customer Resources</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Our Services</h3>
                    <ul className="footer-links">
                        <li><Link to="/services/air-freight">Air Freight</Link></li>
                        <li><Link to="/services/trucking">Trucking</Link></li>
                        <li><Link to="/services/sea-freight">Sea Freight</Link></li>
                        <li><Link to="/services/door-to-door">Door to Door Logistics</Link></li>
                    </ul>
                </div>

                <div className="footer-col newsletter">
                    <h3>Newsletter</h3>
                    <p>Get our latest news & market updates delivered directly to your inbox.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email address" />
                        <button type="button">Subscribe</button>
                    </div>
                    
                    <h3 className="social-title">Follow Us</h3>
                    <div className="social-icons">
                        <a href="#!" onClick={(e) => e.preventDefault()} className="social-btn"><i className="fab fa-facebook-f"></i></a>
                        <a href="#!" onClick={(e) => e.preventDefault()} className="social-btn"><i className="fab fa-twitter"></i></a>
                        <a href="#!" onClick={(e) => e.preventDefault()} className="social-btn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#!" onClick={(e) => e.preventDefault()} className="social-btn"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>&copy; {new Date().getFullYear()} 940 Air Cargo. All Rights Reserved.</p>
                    <ul className="legal-links">
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-and-condition">Terms & Conditions</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
