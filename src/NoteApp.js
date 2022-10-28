import React from 'react';
import Search from './components/Search';
import Profile from './components/Profile'
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import './styles/note_app.css';

export default function NoteApp() {
    return (
        <div>
            <div className='nav-bar'>
                <div></div>
                <div className='search-bar'>
                    <Search />
                </div>
                <div className='profile-icon'>
                    <AddNote />
                    <Profile />
                </div>
            </div>
            <div className='body'>
                <div></div>
                <Notes />
            </div>
        </div>
    );
}
