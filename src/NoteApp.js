import React, { useState } from 'react';
import Search from './components/Search';
import Profile from './components/Profile'
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import './styles/note_app.css';
import userNotes from './UserNotes/UserNotes';

export default function NoteApp() {
    const [notes, setNotes] = useState(userNotes);
    const [searchTerm, setSearchTerm] = useState('');

    const onAddNote = (newNote) => {
        setNotes((prevNotes) =>
            [...prevNotes, newNote]
        );
    };

    const onEditNote = (index, editedNote) => {
        const sameNodes = notes.filter((note, noteIndex) => noteIndex !== index);
        setNotes((prevNotes) => [
            ...sameNodes,
            editedNote
        ]);
    };

    const onSearch = (searchFor) => {
        setSearchTerm(searchFor);
    };

    return (
        <div>
            <div className='nav-bar'>
                <div></div>
                <div className='search-bar'>
                    <Search searchTerm={searchTerm} onSearch={onSearch}/>
                </div>
                <div className='profile-icon'>
                    <AddNote onAddNote={onAddNote}/>
                    <Profile />
                </div>
            </div>
            <div className='body'>
                <div></div>
                <Notes notes={notes} searchTerm={searchTerm} onEditNote={onEditNote}/>
            </div>
        </div>
    );
}
