import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import RegisterImage from '../../images/register-image.png';

const Register = () => {
    const navigate = useNavigate();

    const initialUser = {
        name: '',
        email: '',
        password: '',
        phone: '',
        gender: 'Male',
        hearAbout: [],
        city: 'Mumbai',
        state: 'Gujarat',
    };

    const [userData, setUserData] = useState(initialUser);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });

    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (
            userData.name === '' ||
            userData.email === '' ||
            userData.phone === ''
        ) {
            alert('Any of the fields is missing');
            return;
        }

        sessionStorage.setItem('user', JSON.stringify(userData));
        console.log('User data saved in local storage:', userData);

        navigate('/dashboard');

        console.log('Register Successfully', userData);
        setUserData(initialUser);
    };

    return (
        <div className="register__container">
            <div className="register__form">
                <div className="register__image__container">
                    <img
                        className="register__image__logo"
                        src={RegisterImage}
                        alt="user profile"
                    />
                </div>

                <h1 className="register__heading">Register</h1>

                <p className="register__text">
                    Welcome user, get ready to unlock new possibilities with
                    your account.
                </p>

                <form onSubmit={handleRegister} className="register__form__inputs">
                    <input
                        className="register__input__field"
                        onChange={handleChange}
                        value={userData.name}
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        required
                    />
                    <input
                        className="register__input__field"
                        onChange={handleChange}
                        value={userData.email}
                        type="email"
                        placeholder="Email"
                        name="email" required
                    />
                    <input
                        className="register__input__field"
                        onChange={handleChange}
                        value={userData.password}
                        type="password"
                        placeholder="Password"
                        name="password" required
                    />
                    <input
                        className="register__input__field"
                        onChange={handleChange}
                        value={userData.phone}
                        type="text"
                        placeholder="Phone"
                        name="phone" required
                    />

                    <div className="register__gender">
                        <label>Gender:</label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={userData.gender === 'Male'}
                            onChange={handleChange}
                        />
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={userData.gender === 'Female'}
                            onChange={handleChange}
                        />
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="Others"
                            checked={userData.gender === 'Others'}
                            onChange={handleChange}
                        />
                        Others
                    </div>

                    <div className="register__hear-about">
                        <label>How did you hear about this?</label>
                        <div className="hear-about__field">
                            <input
                                type="radio"
                                name="hearAbout"
                                value="LinkedIn"
                                checked={userData.hearAbout === 'LinkedIn'}
                                onChange={handleChange}
                            />
                            LinkedIn
                        </div>
                        <div className="hear-about__field">
                            <input
                                type="radio"
                                name="hearAbout"
                                value="Friends"
                                checked={userData.hearAbout === 'Friends'}
                                onChange={handleChange}
                            />
                            Friends
                        </div>
                        <div className="hear-about__field">
                            <input
                                type="radio"
                                name="hearAbout"
                                value="Job Portal"
                                checked={userData.hearAbout === 'Job Portal'}
                                onChange={handleChange}
                            />
                            Job Portal
                        </div>
                        <div className="hear-about__field">
                            <input
                                type="radio"
                                name="hearAbout"
                                value="Others"
                                checked={userData.hearAbout === 'Others'}
                                onChange={handleChange}
                            />
                            Others
                        </div>
                    </div>

                    <div className="register__city">
                        <label>City:</label>
                        <select
                            className="register__select"
                            name="city"
                            value={userData.city}
                            onChange={handleChange}
                        >
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                        </select>
                    </div>

                    <div className="register__state">
                        <label>State:</label>
                        <input
                            className="register__input__field"
                            name="state"
                            value={userData.state}
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        type="submit"
                        className="register__button"
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                </form>

                <p>
                    Already have an account?{' '}
                    <a href="/">Log In</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
