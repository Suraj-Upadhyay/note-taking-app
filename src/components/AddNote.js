import React from 'react';
import '../styles/add_note.css';
import AddIcon from '../assets/add-icon.png'

export default function AddNote() {
    return (
        <div className='add-icon-container'>
            <img src={AddIcon} alt='Add Note'/>
        </div>
    );
}
