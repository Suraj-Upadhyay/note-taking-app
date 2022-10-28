import React from 'react';
import '../styles/profile.css';
import ProfileIcon from '../assets/profile-icon.png'

export default function Notes() {
    return (
        <div className='profile-container'>
            <img src={ProfileIcon} alt='Profile'/>
        </div>
    );
}
