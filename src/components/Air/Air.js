import React from 'react'
import "./Air.css"
import Mainnav from './../mainnav/Mainnav';
import Footer from '../main/footer/Footer';

const Air = () => {
    return (
        <div className="air">
            <Mainnav/>
            <h2>Air Freight Services</h2>
            <div className="service-details">
                <p>
                    At 940 Air Cargo, we provide specialized air freight solutions designed for speed, security, and reliability. From standard cargo to highly sensitive shipments, our global network ensures your goods arrive on time, every time.
                </p>
                <p>
                    <strong>Specialized Handling:</strong> We are pioneers in transporting temperature-controlled goods, including IVF gametes and embryos. Our specialized equipment maintains temperatures as low as -180°C across continents, demonstrating our commitment to precision and care.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default Air
