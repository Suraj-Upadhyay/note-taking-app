import React from 'react';
import '../styles/note.css';

export default function Note () {
    return (
        <div className='note-container'>
            <div className='title-container'>
                <h2>Title</h2>
                <h4>Date</h4>
            </div>
            <div className='text-container'>
                <p>Text</p>
            </div>
        </div>
    );
}
