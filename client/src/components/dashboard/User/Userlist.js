import React, { useState } from 'react';
import './Userlist.css';
import User from './User';
import AddUser from './AddUser';

const Userlist = ({ sortingCriteria, users, onUpdate, onDelete }) => {
    const [isAddUserOpen, setIsAddUserOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOption, setSearchOption] = useState('name');

    const openAddUserPopup = () => {
        setIsAddUserOpen(true);
    };

    const closeAddUserPopup = () => {
        setIsAddUserOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchOptionChange = (e) => {
        setSearchOption(e.target.value);
    };

    const filteredUsers = users.filter((user) => {
        if (searchOption === 'name') {
            return user.name.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (searchOption === 'phone') {
            return user.phone.includes(searchQuery);
        } else if (searchOption === 'email') {
            return user.email.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return true;
    });

    const sortUsers = (users) => {
        if (sortingCriteria === 'A-Z') {
            return users.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortingCriteria === 'Z-A') {
            return users.sort((a, b) => b.name.localeCompare(a.name));
        }
        return users;
    };

    const sortedUsers = sortUsers(filteredUsers);

    return (
        <>
            <div className="userlist__container">
                <div className="add__user__button">
                    <button className="upload__btn" onClick={openAddUserPopup}>
                        ➕ Add New User
                    </button>
                </div>

                {users.length > 0 && (
                    <div className="nav__search">
                        <select
                            className='nav__search__options'
                            name="search__options"
                            onChange={handleSearchOptionChange}
                            value={searchOption}
                        >
                            <option value="name">Name</option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                        </select>
                        <input
                            className='nav__searchfield'
                            type="text"
                            placeholder={`Search by ${searchOption}`}
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                )
                }

                {sortedUsers.length > 0 && <h1 className='users__title'>Available Users</h1>}
                <div className="userlist__users">
                    {sortedUsers.length > 0 ? sortedUsers.map((user) => (
                        <User key={user._id} user={user} onUpdate={onUpdate} onDelete={onDelete} />
                    )) : (
                        <img style={{ 'width': '500px' }} src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png" alt="No users available" />
                    )}
                </div>
            </div>

            {isAddUserOpen && (
                <AddUser closeAddUserPopup={closeAddUserPopup} />
            )}
        </>
    );
};

export default Userlist;
