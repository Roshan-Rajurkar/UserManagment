import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import LoginImage from '../../images/login-image.png'

const Login = () => {
    const navigate = useNavigate();

    const initialUser = {
        email: '',
        password: '',
    };

    const [userData, setUserData] = useState(initialUser);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (userData.email === '' || userData.password === '') {
            alert('Email and password are required');
            return;
        }

        const storedUserData = JSON.parse(sessionStorage.getItem('user'));

        if (
            storedUserData &&
            userData.email === storedUserData.email &&
            userData.password === storedUserData.password
        ) {
            alert('Login successful!');
            navigate('/dashboard');
        } else {
            alert('Invalid email or password');
        }
    };


    return (
        <div className='login__container'>
            <div className="login__form">
                <div className="login__image__container">
                    <img className='login__image__logo' src={LoginImage} alt="user profile" />
                </div>

                <h1 className='login__heading'>Sign In</h1>

                <p className='login__text'>Welcome user, you are going to have an experience like never before.</p>

                <form onSubmit={handleLogin} className='login__form__inputs'>
                    <input
                        className='login__input__field'
                        onChange={handleChange}
                        value={userData.email}
                        type="email"
                        placeholder='Email'
                        name="email"
                    />
                    <input
                        className='login__input__field'
                        onChange={handleChange}
                        value={userData.password}
                        type="password"
                        placeholder='Password'
                        name="password"
                    />

                    <button type="submit" className='login__button'>Log In</button>
                </form>
                <p className='login__instruct'>Still without an account? <a href="/register">Create Account</a></p>
            </div>
        </div>
    );
};

export default Login;
