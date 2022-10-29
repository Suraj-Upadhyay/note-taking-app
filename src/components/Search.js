import React from 'react';
import PropTypes from 'prop-types';
import '../styles/search.css';
import searchIcon from '../assets/search-icon.png';

export default function Search(props) {
    const onSearchChange = (e) => {
        e.preventDefault();
        const searchTerm = e.target.value;
        props.onSearch(searchTerm);
    };

    const focusOnSearchInput = (e) => {
        e.preventDefault();
        document.getElementById('search-input').focus();
    };

    return (
        <div className='search-box'>
            <div className='input-container'>
                <input id='search-input' type='text' value={props.searchTerm} onChange={onSearchChange}/>
            </div>
            <div className='search-icon' onClick={focusOnSearchInput}>
                <img src={searchIcon} alt='Search'/>
            </div>
        </div>
    );
}

Search.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
};
