import React, { useState, useEffect } from 'react';
import Header from './Header';
import Filter from './Filter';
import Userlist from './User/Userlist';
import axios from 'axios';

const Dashboard = () => {
    const [sortingCriteria, setSortingCriteria] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/dashboard');
                setUsers(await response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, [users]);

    const updateUser = (updatedUser) => {
        const updatedUsers = users.map((user) =>
            user._id === updatedUser._id ? updatedUser : user
        );
        setUsers(updatedUsers);
    };

    const deleteUser = (userId) => {
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
    };

    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <Filter
                    onSortAZ={() => setSortingCriteria('A-Z')}
                    onSortZA={() => setSortingCriteria('Z-A')}
                />
                <Userlist
                    sortingCriteria={sortingCriteria}
                    users={users}
                    onUpdate={updateUser}
                    onDelete={deleteUser}
                />
            </div>
        </div>
    );
};

export default Dashboard;
