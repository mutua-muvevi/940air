import React from 'react'
import harborOne from "../../../assets/harbor.jpg"
import harborTwo from "../../../assets/harbor1.jpg"
import harborThree from "../../../assets/harbor2.jpg"
import theTruck from "../../../assets/truck.jpg"
import "./News.css"

const News = () => {
    return (
        <div className="main-news-section">
            <div className="main-news-header">
                <h4 className="news-subtitle">940 Air Cargo Newsroom</h4>
                <h2 className="news-title">Our Articles</h2>
                <p className="news-description">Stay updated with the latest trends and insights in the logistics and freight forwarding industry. Our experts share their knowledge to help you navigate the complexities of global shipping.</p>
            </div>
            
            <div className="news-grid-container">
                <div className="news-featured-card">
                    <img className="news-featured-img" src={theTruck} alt="logistics truck"/>
                    <div className="news-featured-content">
                        <span className="news-tag">LOGISTICS INSIGHTS</span>
                        <h3 className="news-card-title">The Science of Temperature-Controlled Logistics</h3>
                        <span className="news-date">15-05-2026</span>
                        <p className="news-card-excerpt">
                            Maintaining a constant temperature of -180°C across continents is no small feat. It requires a blend of advanced technology, meticulous planning, and specialized handling. At 940 Air Cargo, we've mastered this art to ensure...
                        </p>
                        <button className="read-more-link">Read full article &#8594;</button>
                    </div>
                </div>
                
                <div className="news-side-list">
                    <div className="news-list-item">
                        <img className="news-list-img" src={harborOne} alt="harbor one"/>
                        <div className="news-list-content">
                            <h4 className="news-list-title">Expanding our Reach in East Africa</h4>
                            <span className="news-date">10-04-2026</span>
                            <p className="news-list-excerpt">
                                We are proud to announce the opening of our new distribution hubs...
                            </p>
                        </div>
                    </div>

                    <div className="news-list-item">
                        <img className="news-list-img" src={harborTwo} alt="harbor one"/>
                        <div className="news-list-content">
                            <h4 className="news-list-title">Chargeable Weight Explained</h4>
                            <span className="news-date">22-03-2026</span>
                            <p className="news-list-excerpt">
                                Understanding how freight costs are calculated can save your business...
                            </p>
                        </div>
                    </div>

                    <div className="news-list-item">
                        <img className="news-list-img" src={harborThree} alt="harbor one"/>
                        <div className="news-list-content">
                            <h4 className="news-list-title">Sustainable Shipping Solutions</h4>
                            <span className="news-date">05-02-2026</span>
                            <p className="news-list-excerpt">
                                At 940 Air Cargo, we are committed to reducing our carbon footprint...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="news-footer-action">
                <button className="btn-primary">View All Articles</button>
            </div>
        </div>
    )
}

export default News
