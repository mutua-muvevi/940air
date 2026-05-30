import React from 'react'
import "./DoorToDoor.css"
import Mainnav from './../mainnav/Mainnav';
import Footer from './../main/footer/Footer';

const DoorToDoor = () => {
    return (
        <div className="door-to-door">
            <Mainnav/>

            <h2>Door-to-Door Delivery</h2>
            <div className="service-details">
                <p>
                    Experience ultimate convenience with our end-to-end door-to-door delivery service. We take full responsibility for your shipment from the moment it leaves your facility until it reaches the final recipient's hands, anywhere in the world.
                </p>
                <p>
                    Our service includes pickup, freight forwarding (air, sea, or ground), customs clearance at both origin and destination, and final mile delivery. Focus on your core business while we handle every step of the supply chain.
                </p>
            </div>
            
            <Footer/>
        </div>
    )
}

export default DoorToDoor
