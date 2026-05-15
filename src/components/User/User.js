import React, {useState} from 'react'
import Mainnav from '../mainnav/Mainnav'
import Footer from './../main/footer/Footer';
import UserForm from './UserForm/UserForm';
import './User.css'
import UserLogin from './UserLogin/UserLogin';

const User = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className="user-component">
            <Mainnav/>
            {
                loggedIn === true ? <UserLogin/>: <UserForm/>
            }
            <Footer/>
        </div>
    )
}

export default User
