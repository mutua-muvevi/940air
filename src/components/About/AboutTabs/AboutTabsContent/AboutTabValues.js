import React from 'react'
import "./AboutTabContent.css"

const AboutTabValues = () => {
    return (
        <div className="about-tab-contents">
            <h2 className="about-tab-contents-h2">
                Our Values
            </h2>
            <p className="about-tab-contents-p">
                At 940 Air Cargo, we believe that success breeds success. Our core values guide every interaction and every shipment.
            </p>
            <ul>
                <li><strong>Integrity:</strong> Our Word is our Bond.</li>
                <li><strong>Results-Oriented:</strong> We focus on delivering results for our clients.</li>
                <li><strong>Quality:</strong> We maintain the highest standards of service and planning.</li>
                <li><strong>Partnership:</strong> Your success is our success.</li>
            </ul>
        </div>
    )
}

export default AboutTabValues
