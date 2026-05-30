import React, { useEffect } from 'react'
import Mainnav from '../../mainnav/Mainnav'
import Footer from '../../main/footer/Footer'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <Mainnav />
            <div className="legal-banner">
                <h1>Privacy Policy</h1>
                <p>Last Updated: May 15, 2026</p>
            </div>
            
            <div className="legal-content-container">
                <section className="legal-section">
                    <h2>1. Introduction</h2>
                    <p>940 Air Cargo Limited ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
                </section>

                <section className="legal-section">
                    <h2>2. The Data We Collect About You</h2>
                    <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul>
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Financial Data</strong> includes bank account and payment card details.</li>
                        <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>3. How We Use Your Personal Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., fulfilling a shipping order).</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation (e.g., customs declarations).</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>4. Data Security</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
                </section>

                <section className="legal-section">
                    <h2>5. Your Legal Rights</h2>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.</p>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy
