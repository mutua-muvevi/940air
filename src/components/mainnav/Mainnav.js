import React from 'react'
import './Mainnav.css'
import {NavLink} from 'react-router-dom'
import LOGO from '../../assets/940 air cargo logo.png'

const Mainnav = () => {
    return (
        <nav className="main-nav-container">
            <div className="main-nav-inner">
                <div className="main-nav-logo">
                    <NavLink to="/">
                        <img className="main-nav-logo-img" src={LOGO} alt="940 Air Cargo Logo"/>
                    </NavLink>
                </div>
                <div className="main-nav-links">
                    <ul className="main-nav-ul">
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'main-nav-li active' : 'main-nav-li')}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'main-nav-li active' : 'main-nav-li')}>About</NavLink></li>
                        <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'main-nav-li active' : 'main-nav-li')}>Services</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'main-nav-li active' : 'main-nav-li')}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="main-nav-quote-btn">
                    <NavLink to="/contact" className="nav-quote-link">Get a Quote</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Mainnav
