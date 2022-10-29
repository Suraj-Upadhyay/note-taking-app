import React from 'react';
import '../styles/add_note.css';
import AddIcon from '../assets/add-icon.png'

export default function AddNote(props) {
    const handleOnClick = () => {
        props.openNoteModal();
    };

    return (
        <div className='add-icon-container' onClick={handleOnClick}>
            <img src={AddIcon} alt='Add Note' />
        </div>
    );
}
