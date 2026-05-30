import React, { useState, useRef, useEffect, useCallback } from 'react'
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(false);
    
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoBgRef = useRef(null);

    const bannerVideo1 = "https://res.cloudinary.com/dqweh6zte/video/upload/v1780134220/VID-20260317-WA0002_lo41e8.mp4";
    const bannerVideo2 = "https://res.cloudinary.com/dqweh6zte/video/upload/v1780134223/VID-20260211-WA0079_lx1mez.mp4";

    const safePlay = useCallback(async (videoElement) => {
        if (videoElement) {
            videoElement.muted = true;
            try {
                await videoElement.play();
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.warn("Video playback failed:", error);
                    // Fallback: try playing again after a short delay
                    setTimeout(() => {
                        videoElement.play().catch(() => {});
                    }, 1000);
                }
            }
        }
    }, []);

    const handleVideoEnd = () => {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setIsAutoPlay(nextIndex > 1);
    };

    const handleChange = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        // Precise playback management based on slide index
        if (currentIndex === 0) {
            setIsAutoPlay(false);
            if (videoRef1.current) {
                videoRef1.current.currentTime = 0;
                safePlay(videoRef1.current);
            }
            if (videoRef2.current) videoRef2.current.pause();
            if (videoBgRef.current) videoBgRef.current.pause();
        } else if (currentIndex === 1) {
            setIsAutoPlay(false);
            if (videoRef2.current) {
                videoRef2.current.currentTime = 0;
                safePlay(videoRef2.current);
            }
            if (videoBgRef.current) {
                videoBgRef.current.currentTime = 0;
                safePlay(videoBgRef.current);
            }
            if (videoRef1.current) videoRef1.current.pause();
        } else {
            setIsAutoPlay(true);
            if (videoRef1.current) videoRef1.current.pause();
            if (videoRef2.current) videoRef2.current.pause();
            if (videoBgRef.current) videoBgRef.current.pause();
        }
    }, [currentIndex, safePlay]);

    // Extra trigger for the very first load
    useEffect(() => {
        const initialTrigger = setInterval(() => {
            if (currentIndex === 0 && videoRef1.current && videoRef1.current.paused) {
                safePlay(videoRef1.current);
            } else if (currentIndex === 0 && videoRef1.current && !videoRef1.current.paused) {
                clearInterval(initialTrigger);
            }
        }, 1000);
        return () => clearInterval(initialTrigger);
    }, [currentIndex, safePlay]);

    return (
        <div className="main-banner-carousel">
            <Carousel 
                selectedItem={currentIndex}
                onChange={handleChange}
                autoPlay={isAutoPlay}
                infiniteLoop={true}
                showThumbs={false} 
                showStatus={false}
                interval={5000}
                stopOnHover={false}
                transitionTime={1000}
                animationHandler="fade"
                swipeable={false}
            >
                {/* Video Slide 1 (Landscape) */}
                <div className="slide-container">
                    <video 
                        ref={videoRef1}
                        key="video-landscape"
                        src={bannerVideo1} 
                        muted={true}
                        playsInline={true}
                        autoPlay={true}
                        className="slide-image" 
                        onEnded={handleVideoEnd}
                        onCanPlay={() => currentIndex === 0 && safePlay(videoRef1.current)}
                    />
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h2>Expert Logistics in Motion</h2>
                            <p>Reliable cargo solutions delivered with speed and precision.</p>
                            <button className="slide-btn" onClick={() => navigate('/contact')}>Get a Quote</button>
                        </div>
                    </div>
                </div>

                {/* Video Slide 2 (Portrait with Blurred Background) */}
                <div className="slide-container">
                    <div className="portrait-video-wrapper">
                        <video 
                            ref={videoBgRef}
                            src={bannerVideo2} 
                            muted={true}
                            playsInline={true}
                            autoPlay={true}
                            className="video-bg-blur"
                            loop={true}
                        />
                        <video 
                            ref={videoRef2}
                            key="video-portrait"
                            src={bannerVideo2} 
                            muted={true}
                            playsInline={true}
                            autoPlay={true}
                            className="video-foreground" 
                            onEnded={handleVideoEnd}
                        />
                    </div>
                </div>

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
