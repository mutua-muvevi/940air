import React from 'react'
import { Link } from 'react-router-dom'
import "./Cresource.css"

const Cresourse = () => {
    return (
        <div className="customer-resources-wrapper">
            <div className="resources-hub-hero">
                <h1>Customer Resources</h1>
                <p>Everything you need to know about managing your shipments, calculating costs, and understanding our policies.</p>
            </div>

            <div className="resources-hub-grid">
                <Link to="/resource-formula" className="resource-hub-card">
                    <div className="hub-card-icon">
                        <i className="fas fa-calculator"></i>
                    </div>
                    <h3>Resource Formulas</h3>
                    <p>Learn how to calculate Chargeable Weight, Volumetric Weight, CBM, and understand our industry-standard measurements for Air and Sea Freight.</p>
                    <span className="hub-card-link">Explore Formulas &#8594;</span>
                </Link>

                <Link to="/terms-and-condition" className="resource-hub-card">
                    <div className="hub-card-icon">
                        <i className="fas fa-file-contract"></i>
                    </div>
                    <h3>Terms and Conditions</h3>
                    <p>Read our comprehensive legal framework covering contracts, liabilities, transportation hindrances, and customer undertakings.</p>
                    <span className="hub-card-link">Read Terms &#8594;</span>
                </Link>

                <Link to="/past-performance" className="resource-hub-card">
                    <div className="hub-card-icon">
                        <i className="fas fa-award"></i>
                    </div>
                    <h3>Past Performances</h3>
                    <p>Discover our portfolio, meet our partners, and see how we've successfully delivered results and satisfaction across the globe.</p>
                    <span className="hub-card-link">View Portfolio &#8594;</span>
                </Link>
            </div>
        </div>
    )
}

export default Cresourse