import React, { useState } from 'react';
import axios from 'axios';
import '../../../form/login/Login.css'
import './User.css';

const User = ({ user, onUpdate, onDelete }) => {
    const { _id, name: initialName, email: initialEmail, phone: initialPhone } = user;

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [phone, setPhone] = useState(initialPhone);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setName(initialName);
        setEmail(initialEmail);
        setPhone(initialPhone);
    };

    const handleSaveEdit = async () => {
        try {
            const response = await axios.put(`/dashboard/${_id}`, { name, email, phone });
            const updatedUser = response.data;
            onUpdate(updatedUser);
        } catch (error) {
            console.error('Error updating user:', error);
        }
        setIsEditing(false);
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`/dashboard/${_id}`);
                onDelete(_id);
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        }
    };

    return (
        <div className='user-card'>
            <img
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt="User"
                className="user-image"
            />
            <div className="user-info">
                {isEditing ? (
                    <div>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="login__input__field" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="login__input__field" />
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="login__input__field" />
                    </div>
                ) : (
                    <div>
                        <h2 className="user-name">{name}</h2>
                        <p className="user-email">{email}</p>
                        <p className="user-phone">{phone}</p>
                    </div>
                )}
            </div>
            <div >
                {isEditing ? (
                    <div className="user-actions">
                        <button className="save-button edit-button" onClick={handleSaveEdit}>Save</button>
                        <button className="cancel-button delete-button" onClick={handleCancelEdit}>Cancel</button>
                    </div>
                ) : (
                    <div className="user-actions">
                        <button className="edit-button" onClick={handleEdit}>Edit</button>
                        <button className="delete-button" onClick={handleDelete}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default User;
