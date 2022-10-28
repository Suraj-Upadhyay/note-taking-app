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

    return (
        <div className='search-box'>
            <div className='input-container'>
                <input type='text' value={props.searchTerm} onChange={onSearchChange}/>
            </div>
            <div className='search-icon'>
                <img src={searchIcon} alt='Search'/>
            </div>
        </div>
    );
}

Search.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
};
