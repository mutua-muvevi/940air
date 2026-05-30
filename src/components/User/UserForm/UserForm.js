import React from 'react'
import './UserForm.css'

const UserForm = () => {
    return (
        <div className="user-form">
            <form className="the-user-form">
                <label className="user-label" >Article Title</label>
                <input className="user-form-input" type="text" placeholder="article title here"/>

                <label className="user-label" >The Date</label>
                <input className="user-form-input" type="date" placeholder="article title here"/>

                <label className="user-label" >Article image</label>
                <input className="user-form-input" type="file" placeholder="image"/>

                <label className="user-label" >Article Text</label>
                <textarea required />

                <label className="user-label" >Author</label>
                <select className="user-form-input">
                    <option value="user1">User 1 from database</option>
                    <option value="user2">User 2 from database</option>
                    <option value="user3">User 3 from database</option>
                </select>
                

                <button type="submit" className="user-form-button">Submit</button>
            </form>
        </div>
    )
}

export default UserForm
