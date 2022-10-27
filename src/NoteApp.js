import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Profile from './components/Profile'
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import './NoteApp.css';

export default function NoteApp() {
    return (
        <div>
            <div className='nav-bar'>
                <div></div>
                <div className='search-bar'>
                    <Search />
                </div>
                <div className='profile-icon'>
                    <Profile />
                </div>
            </div>
            <div className='body'>
                <Notes />
                <AddNote />
            </div>
        </div>
    );
}
