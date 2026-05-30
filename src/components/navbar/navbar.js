import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import LOGO from '../../assets/940-AIR-LOGO.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo-container">
                <img src={LOGO} alt="940 Air Cargo Logo" className="navbar-logo-img" />
                <h2 className="navbar-logo">940 AIR CARGO</h2>
            </div>
            <ul className="navbar-ul">
                <li>
                    <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'navbar-li active' : 'navbar-li')}>
                        <i className="fas fa-newspaper"></i> <span>Blogs</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/customer-resources" className={({ isActive }) => (isActive ? 'navbar-li active' : 'navbar-li')}>
                        <i className="fas fa-folder-open"></i> <span>Resources</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'navbar-li active' : 'navbar-li')}>
                        <i className="fas fa-file-invoice-dollar"></i> <span>Request a Quote</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
