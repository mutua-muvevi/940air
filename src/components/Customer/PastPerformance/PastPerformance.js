import React, { useEffect } from 'react'
import Mainnav from '../../mainnav/Mainnav'
import Footer from '../../main/footer/Footer'
import './PastPerformance.css'
import achievementsImg from '../../../assets/achievements.jpg'
import clientsImg from '../../../assets/clients.jpg'
import partnersImg from '../../../assets/partners.jpg'

const PastPerformance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="past-performance-page">
            <Mainnav />
            <div className="performance-hero">
                <h1>Past Performances</h1>
                <p>A proven track record of excellence in global logistics.</p>
            </div>

            <div className="performance-content-container">
                <section className="performance-intro">
                    <p>Our company has quite a portfolio to boot. We ensure every detail is taken care of to ensure the task is not only accomplished but the accomplishment leaves all parties involved happy and satisfied.</p>
                </section>

                <section className="performance-grid">
                    <div className="perf-card">
                        <img src={achievementsImg} alt="Achievements" />
                        <div className="perf-card-content">
                            <h3>Our Achievements</h3>
                            <p>Over the years, we have successfully transported thousands of tonnes of critical cargo across the globe. From navigating complex customs regulations to executing time-sensitive temperature-controlled deliveries, our operational success rate stands at the top of the industry.</p>
                        </div>
                    </div>

                    <div className="perf-card reverse">
                        <img src={clientsImg} alt="Our Clients" />
                        <div className="perf-card-content">
                            <h3>Our Clients</h3>
                            <p>We serve a diverse range of clients, from local East African exporters to massive international organizations and healthcare providers. Our ability to scale our services to meet the precise needs of each client has forged long-lasting, trusted relationships.</p>
                        </div>
                    </div>

                    <div className="perf-card">
                        <img src={partnersImg} alt="Our Partners" />
                        <div className="perf-card-content">
                            <h3>Our Partners</h3>
                            <p>Logistics is a global team effort. We have partnered with world-class airlines, ocean carriers, and ground transport networks to ensure seamless end-to-end delivery. These strategic alliances allow us to offer competitive rates and guaranteed space.</p>
                        </div>
                    </div>
                </section>

                <div className="cta-banner">
                    <h2>Ready to become our next success story?</h2>
                    <a href="/contact" className="cta-btn">Get a Quote</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PastPerformance
