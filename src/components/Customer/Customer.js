import React from 'react'
import './customer.css'
import Mainnav from './../mainnav/Mainnav';
import Footer from '../main/footer/Footer';
import Cresourse from './customer resources/Cresourse';

const Customer = () => {
    return (
        <div className="customer-page-wrapper">
            <Mainnav/>
            <Cresourse/>
            <Footer/>
        </div>
    )
}

export default Customer
