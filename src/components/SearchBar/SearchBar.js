import React from 'react';

const SearchBar = ({ advancedSearchChange }) => {
    return (
        <div>
            <input
                style={{padding: '6px'}}
                type="search" placeholder="Search..."
                onChange={advancedSearchChange}
            />
        </div>
    );
};

export default SearchBar;