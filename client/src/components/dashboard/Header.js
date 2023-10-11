import React, { useState, useEffect } from 'react';
import './Header.css'

const Header = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const storedUserData = JSON.parse(sessionStorage.getItem('user'));

        if (storedUserData) {
            setCurrentUser(storedUserData.email);
        }
    }, []);

    return (
        <nav className="navbar">
            <h1 className='nav__heading'>USER-MINE</h1>


            <div className="nav__profile">
                <img className='nav__profile__img' src="https://cutewallpaper.org/24/person-icon-png-transparent/transparent-6da89-background-2fa67-person-e01f5-icon-5674f-png-cbeb2-image-dfc31-transparent-90f70-png-95cb1-free---download---on---seekpng.png" alt="user profile" />
                <span className='nav__user'>{currentUser ? `${currentUser}` : 'Guest'}</span>
            </div>
        </nav>
    );
}

export default Header;
