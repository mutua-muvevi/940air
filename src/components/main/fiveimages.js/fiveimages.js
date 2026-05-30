import React from 'react'
import './fiveimages.css'
import truck from "../../../assets/truck-460432_1920.jpg"
import expressImg from "../../../assets/IMG-20260321-WA0020.jpg"
import doorToDoorImg from "../../../assets/IMG-20260211-WA0046.jpg"
import shipping from "../../../assets/shipping.jpg"
import airFreightImg from "../../../assets/IMG-20260211-WA0087.jpg"

const Fiveimages = () => {
    return (
        <div className="five-images">
            <div className="five-images-left">
                <img className="five-images-left-img" src={doorToDoorImg} alt="Door to Door"/>
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
                        <img className="five-images-right-img" src={expressImg} alt="Express Cargo"/>
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
                        <img className="five-images-right-img" src={airFreightImg} alt="Air Freight"/>
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
