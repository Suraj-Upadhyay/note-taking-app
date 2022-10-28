import React from 'react';
import Note from './Note';
import '../styles/notes.css';

export default function Notes() {
    return (
        <div className='notes-container'>
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    );
}
