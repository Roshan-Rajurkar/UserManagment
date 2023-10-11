import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ onSortAZ, onSortZA }) => {
    const [sortingCriteria, setSortingCriteria] = useState('A-Z');

    const handleSortChange = (event) => {
        const newSortingCriteria = event.target.id;
        setSortingCriteria(newSortingCriteria);

        if (newSortingCriteria === 'a-z') {
            onSortAZ();
        } else if (newSortingCriteria === 'z-a') {
            onSortZA();
        }
    };

    return (
        <div className='filter__container'>
            <h1 className='filter__heading'>Filter</h1>

            <div className="filter__options">
                <div className='option__box'>
                    <input
                        type="radio"
                        name="sorting"
                        id="a-z"
                        checked={sortingCriteria === 'a-z'}
                        onChange={handleSortChange}
                    />
                    <label htmlFor="a-z">A-Z</label>
                </div>
                <div className='option__box'>
                    <input
                        type="radio"
                        name="sorting"
                        id="z-a"
                        checked={sortingCriteria === 'z-a'}
                        onChange={handleSortChange}
                    />
                    <label htmlFor="z-a">Z-A</label>
                </div>
            </div>
        </div>
    );
};

export default Filter;
