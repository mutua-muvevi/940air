import React from 'react'
import Mainnav from '../mainnav/Mainnav'
import NotFoundText from './404/404';
import Footer from '../main/footer/Footer'
import './NotFound.css'

const Notfound = () => {
    return (
        <div className="not-found">
            <Mainnav/>
            <NotFoundText/>
            <Footer/>
        </div>
    )
}

export default Notfound
