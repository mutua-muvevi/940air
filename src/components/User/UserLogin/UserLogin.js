import React from 'react'
import './UserLogin.css'
import "../UserForm/UserForm.css"

const UserLogin = () => {
    // ==========================
        // we are using styles from userForm
    //=========================== 
    return (
        <div className="user-login">
            <div className="user-login-banner">
                <h2 className="user-login-banner-h2">
                    Welcome user
                </h2>
                <p className="user-login-banner-p" >
                    To continue let's validate first
                </p>
            </div>
            <form className="the-user-form">
                <br/>
                <label className="user-label" >Enter your Email</label>
                <input className="user-form-input" type="text" placeholder="Your Email or userName here"/>

                <label className="user-label" >Enter your Password</label>
                <input className="user-form-input" type="password" placeholder="Your password here"/>

                <button type="submit" className="user-form-button">Submit</button>
                <br/>
            </form>
        </div>
    )
}

export default UserLogin
