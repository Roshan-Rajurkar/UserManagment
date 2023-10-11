import React, { useState } from 'react';
import './Userlist.css';
import '../../../form/login/Login.css';
import axios from 'axios';

const AddUser = ({ closeAddUserPopup }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleAddUser = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/dashboard', userData);
            console.log(response);
        } catch (error) {
            console.error('Error adding user:', error);
        }
        closeAddUserPopup();
    };

    return (
        <div className="add-user-popup">
            <div className="popup-content">
                <button className="close-popup" onClick={closeAddUserPopup}>
                    ❌
                </button>
                <h2>Add New User</h2>
                <form onSubmit={handleAddUser} className='login__form__inputs'>
                    <input
                        className='login__input__field'
                        type="text"
                        placeholder='Name'
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                    <input
                        className='login__input__field'
                        type="email"
                        placeholder='Email'
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <input
                        className='login__input__field'
                        type="text"
                        placeholder='Phone'
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                    />
                    <button type="submit" className='login__button' >Add User</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
