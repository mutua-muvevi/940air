import React from 'react'
import './ContactUsForm.css'

const ContactUsForm = () => {
    return (
        <div className="contact-us-form">
            <div className="contact-form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form className="the-contact-us-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name*</label>
                        <input type="text" placeholder="John" required/>
                    </div>
                    <div className="form-group">
                        <label>Last Name*</label>
                        <input type="text" placeholder="Doe" required/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Email Address*</label>
                        <input type="email" placeholder="john@example.com" required/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+254 700 000 000"/>
                    </div>
                </div>

                <div className="form-group">
                    <label>Your Message*</label>
                    <textarea placeholder="How can we help you today?" required></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
        </div>
    )
}

export default ContactUsForm
