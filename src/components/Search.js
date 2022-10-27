import React, { useState, useEffect } from 'react';
import '../styles/search.css';
import searchIcon from '../assets/search-icon.png';

export default function Search() {
    return (
        <div className='search-box'>
            <div className='input-container'>
                <input />
            </div>
            <div className='search-icon'>
                <img src={searchIcon} />
            </div>
        </div>
    );
}
