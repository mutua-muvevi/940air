import React from 'react'
import './fiveimages.css'
import truck from "../../../assets/truck-460432_1920.jpg"
import heli from "../../../assets/new-zealand-2998846_1920.jpg"
import container from "../../../assets/container.jpg"
import shipping from "../../../assets/shipping.jpg"
import planes from "../../../assets/model-planes-1566822_1920.jpg"

const Fiveimages = () => {
    return (
        <div className="five-images">
            <div className="five-images-left">
                <img className="five-images-left-img" src={container} alt="Container Shipping"/>
                <div className="mosaic-overlay">
                    <h3>Door to Door</h3>
                </div>
            </div>
            <div className="five-images-right">
                <div className='five-image-fragmentation'>
                    <div className="mosaic-wrapper">
                        <img className="five-images-right-img" src={truck} alt="Trucking"/>
                        <div className="mosaic-overlay">
                            <h3>Trucking</h3>
                        </div>
                    </div>
                    <div className="mosaic-wrapper">
                        <img className="five-images-right-img" src={heli} alt="Air Transport"/>
                        <div className="mosaic-overlay">
                            <h3>Express Cargo</h3>
                        </div>
                    </div>
                </div>
                <div className='five-image-fragmentation'>
                    <div className="mosaic-wrapper">
                        <img className="five-images-right-img" src={shipping} alt="Sea Shipping"/>
                        <div className="mosaic-overlay">
                            <h3>Sea Freight</h3>
                        </div>
                    </div>
                    <div className="mosaic-wrapper">
                        <img className="five-images-right-img" src={planes} alt="Planes"/>
                        <div className="mosaic-overlay">
                            <h3>Air Freight</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fiveimages
