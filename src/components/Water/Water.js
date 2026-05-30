import React from 'react'
import "./Water.css"
import Mainnav from './../mainnav/Mainnav';
import Footer from './../main/footer/Footer';

const Water = () => {
    return (
        <div className="water">
            <Mainnav/>

            <h2>Sea Freight Solutions</h2>
            <div className="service-details">
                <p>
                    Navigate the complexities of global trade with our comprehensive sea freight services. 940 Air Cargo handles maritime logistics for businesses of all sizes, offering both Full Container Load (FCL) and Less than Container Load (LCL) options.
                </p>
                <p>
                    We work with leading ocean carriers to secure competitive rates and reliable transit times. Our team manages all necessary documentation, port handling, and customs clearance, providing a seamless port-to-port or door-to-door experience.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default Water
