import React from 'react'
import "./Carousel.css"
import planes from "../../../assets/air-kenya.jpg"
import truck from "../../../assets/truck.jpg"
import ship from "../../../assets/ship.jpg"
import van from "../../../assets/container.jpg"
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div className="sectors-carousel-container">
            <div className="carousel-content">
                <h2 className="carousel-h2">OUR KEY SECTORS</h2>
                <p className="carousel-p">Comprehensive logistical solutions tailored to your needs</p>
            </div>

            <div className="carousel-cards">
                <Link to="/services/trucking" className="carousel-single-card">
                    <img className="carousel-image" src={truck} alt="Trucking"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">Trucking</h2>
                        <span className="find-out-more">Find out more &#8594;</span>
                    </div>
                </Link>

                <Link to="/services/air-freight" className="carousel-single-card">
                    <img className="carousel-image" src={planes} alt="Air Freight"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">Air Freight</h2>
                        <span className="find-out-more">Find out more &#8594;</span>
                    </div>
                </Link>

                <Link to="/services/sea-freight" className="carousel-single-card">
                    <img className="carousel-image" src={ship} alt="Sea Freight"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">Sea Freight</h2>
                        <span className="find-out-more">Find out more &#8594;</span>
                    </div>
                </Link>

                <Link to="/services/door-to-door" className="carousel-single-card">
                    <img className="carousel-image" src={van} alt="Door to Door"/>
                    <div className="carousel-image-text">
                        <h2 className="carousel-image-text-h2">Door to Door</h2>
                        <span className="find-out-more">Find out more &#8594;</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Carousel
