// SearchBar.js
import React, { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        console.log('Search Query:', searchQuery);
    };

    return (
        <>
        
        <form onSubmit={handleSearchSubmit} className="flex items-center justify-center h-screen bg-gray-600 ">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    borderRadius: '0.25rem 0 0 0.25rem',
                }}
            />
            <button
                type="submit"
                style={{
                    background: '#3490dc',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '0 0.25rem 0.25rem 0',
                    cursor: 'pointer',
                }}
            >
                Search
            </button>
        </form>
        
        </>
    );
};

export default SearchBar;
