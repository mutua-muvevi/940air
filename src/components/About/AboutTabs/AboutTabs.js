import React, {useState} from 'react'
import './AboutTabs.css'
import AboutTabvission from './AboutTabsContent/AboutTabvission';
import AboutTabwhyus from './AboutTabsContent/AboutTabwhyus';
import AboutTabmission from './AboutTabsContent/AboutTabmission';
import AboutTabValues from './AboutTabsContent/AboutTabValues';

const AboutTabs = () => {
    const [tabType, setTabType] = useState('whyus')

    const switchTabs = () => {
        if (tabType === "whyus"){
            return <AboutTabwhyus/>
        } else if (tabType === "vision") {
            return <AboutTabvission/>
        } else if (tabType === "mission") {
            return <AboutTabmission/>
        } else if (tabType === "values"){
            return <AboutTabValues/>
        }
    }

    return (
        <div className="about-tabs-container">
            <div className="about-tabs-layout">
                <div className="about-tabs-sidebar">
                    <button 
                        onClick={()=>setTabType('whyus')} 
                        className={`about-tab-btn ${tabType === 'whyus' ? 'active' : ''}`}>
                        Why Choose Us
                    </button>
                    <button 
                        onClick={()=>setTabType('vision')} 
                        className={`about-tab-btn ${tabType === 'vision' ? 'active' : ''}`}>
                        Our Vision
                    </button>
                    <button 
                        onClick={()=>setTabType('mission')} 
                        className={`about-tab-btn ${tabType === 'mission' ? 'active' : ''}`}>
                        Our Mission
                    </button>
                    <button 
                        onClick={()=>setTabType('values')} 
                        className={`about-tab-btn ${tabType === 'values' ? 'active' : ''}`}>
                        Core Values
                    </button>
                </div>
                
                <div className="about-tabs-content-area">
                    {switchTabs()}
                </div>
            </div>
        </div>
    )
}

export default AboutTabs
