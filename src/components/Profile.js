import React from 'react';
import '../styles/profile.css';

export default function Notes() {
    const imageAddress = 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-person-user-19.png';
    return (
        <div className='profile-container'>
            <img src={imageAddress} alt='Profile'/>
        </div>
    );
}
