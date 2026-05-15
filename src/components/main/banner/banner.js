import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom';
import './banner.css'

import slide1 from '../../../assets/IMG-20260321-WA0017.jpg'
import slide2 from '../../../assets/IMG-20260321-WA0019.jpg'
import slide3 from '../../../assets/IMG-20260321-WA0020.jpg'
import slide4 from '../../../assets/IMG-20260211-WA0046.jpg'
import slide5 from '../../../assets/IMG-20260211-WA0050.jpg'
import slide6 from '../../../assets/IMG-20260211-WA0087.jpg'

const BannerCarousel = () => {
    const navigate = useNavigate();

    return (
        <div className="main-banner-carousel">
            <Carousel 
                autoPlay 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false}
                interval={5000}
                stopOnHover={false}
                transitionTime={1000}
                animationHandler="fade"
                swipeable={false}
            >
                <div className="slide-container">
                    <img src={slide1} alt="Slide 1" className="slide-image" />
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>Fast & Reliable Freight</h2>
                            <p>Delivering your cargo securely across borders.</p>
                            <button className="slide-btn" onClick={() => navigate('/contact')}>Get a Quote</button>
                        </div>
                    </div>
                </div>
                <div className="slide-container">
                    <img src={slide2} alt="Slide 2" className="slide-image" />
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>Big to Deliver, Small to Listen</h2>
                            <p>Providing logistical solutions globally with a personal touch.</p>
                            <button className="slide-btn" onClick={() => navigate('/services')}>Our Services</button>
                        </div>
                    </div>
                </div>
                <div className="slide-container">
                    <img src={slide3} alt="Slide 3" className="slide-image" />
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>Expert Handling</h2>
                            <p>Specialized in time-sensitive and critical shipments.</p>
                            <button className="slide-btn" onClick={() => navigate('/contact')}>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className="slide-container">
                    <img src={slide4} alt="Slide 4" className="slide-image" />
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>Seamless Maritime Logistics</h2>
                            <p>Cost-effective sea freight solutions for global trade.</p>
                            <button className="slide-btn" onClick={() => navigate('/services/sea-freight')}>Sea Freight</button>
                        </div>
                    </div>
                </div>
                <div className="slide-container">
                    <img src={slide5} alt="Slide 5" className="slide-image" />
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>Robust Ground Network</h2>
                            <p>Reliable trucking and regional distribution.</p>
                            <button className="slide-btn" onClick={() => navigate('/services/trucking')}>Trucking</button>
                        </div>
                    </div>
                </div>
                <div className="slide-container">
                    <img src={slide6} alt="Slide 6" className="slide-image" />
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>End-to-End Delivery</h2>
                            <p>From origin to destination, we manage the complexity.</p>
                            <button className="slide-btn" onClick={() => navigate('/services/door-to-door')}>Door to Door</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default BannerCarousel
