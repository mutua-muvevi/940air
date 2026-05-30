import React from 'react'
import './Ground.css'
import Mainnav from './../mainnav/Mainnav';
import Footer from './../main/footer/Footer';

const Ground = () => {
    return (
        <div className="Ground">
            <Mainnav/>

            <h2>Trucking & Ground Logistics</h2>
            <div className="service-details">
                <p>
                    Our ground transportation division offers flexible and reliable trucking services across East Africa and neighboring regions. Whether it's a dedicated full truckload (FTL) or a less-than-truckload (LTL) shipment, we have the fleet to accommodate your needs.
                </p>
                <p>
                    We provide meticulous route planning and real-time tracking, ensuring secure transit from pick-up to the final destination. Let us handle the complexities of cross-border customs and regional road networks.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default Ground
