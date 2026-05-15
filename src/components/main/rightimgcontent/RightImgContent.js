import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './RightImgContent.css'

const RightImgContent = () => {
    return (
        <div className="testimonial-section-wrapper">
            <div className="testimonial-content-left">
                <div className="testimonial-text-header">
                    <h4 className="testimonial-subtitle">CLIENT SUCCESS</h4>
                    <h2 className="testimonial-title">Excellence in Logistics</h2>
                    <p className="testimonial-description">
                        Our clients trust us with their most sensitive and time-critical shipments. From medical supplies to heavy machinery, we ensure everything reaches its destination safely. Hear what they have to say.
                    </p>
                </div>
                <div className="testimonial-carousel-container">
                    <Carousel 
                        autoPlay 
                        infiniteLoop 
                        showThumbs={false} 
                        showStatus={false}
                        showIndicators={true}
                        interval={6000}
                        className="testimonial-carousel"
                    >
                        <div className="testimonial-slide">
                            <i className="fas fa-quote-left testimonial-icon"></i>
                            <p className="testimonial-quote">
                                "The pillar of any company that deals with logistics is the ability to deliver on time with minimal risk of loss. 940 Air Cargo has consistently exceeded our expectations with our regional ground transport."
                            </p>
                            <h4 className="testimonial-author">- Operations Manager, Leading East African Retailer</h4>
                        </div>
                        <div className="testimonial-slide">
                            <i className="fas fa-quote-left testimonial-icon"></i>
                            <p className="testimonial-quote">
                                "Handling IVF gametes requires absolute precision and zero margin for error. 940 Air Cargo's temperature-controlled logistics (-180°C) is flawless. They are the only partner we trust."
                            </p>
                            <h4 className="testimonial-author">- Clinic Director, International Fertility Center</h4>
                        </div>
                        <div className="testimonial-slide">
                            <i className="fas fa-quote-left testimonial-icon"></i>
                            <p className="testimonial-quote">
                                "From port clearing in Mombasa to final door delivery in Kampala, they handled the entire supply chain seamlessly. We saved 15% on demurrage costs in our first quarter working with them."
                            </p>
                            <h4 className="testimonial-author">- Supply Chain Head, Manufacturing Firm</h4>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="testimonial-content-right">
                {/* Background image is handled via CSS */}
            </div>
        </div>
    )
}

export default RightImgContent
