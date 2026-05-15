import React from 'react'
import Footer from '../main/footer/Footer'
import BlogSection from './BlogSection/BlogSection'
import Mainnav from './../mainnav/Mainnav';
import bannerImg from '../../assets/harbor1.jpg';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className="blogs-page">
            <Mainnav/>
            
            <div className="blogs-banner" style={{backgroundImage: `linear-gradient(rgba(2, 29, 73, 0.8), rgba(2, 29, 73, 0.8)), url(${bannerImg})`}}>
                <div className="blogs-banner-content">
                    <h1>940 Air Cargo Newsroom</h1>
                    <p>Insights, updates, and expert perspectives on global logistics and freight forwarding.</p>
                </div>
            </div>

            <div className="blogs-content-container">
                <BlogSection isFullPage={true} />
            </div>

            <Footer/>
        </div>
    )
}

export default Blogs
