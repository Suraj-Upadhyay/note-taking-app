import React from 'react';
import '../styles/note.css';
import EditIcon from '../assets/edit-icon.png'

export default function Note(props) {
    const title = props.note.title;
    const text = props.note.text;
    const date = props.note.date;

    return (
        <div className='note-container'>
            <div className='note-header'>
                <div className='title-container'>
                    <div className='title'>{title}</div>
                    <div className='date'>{date}</div>
                </div>
                <div className='edit-button' onClick={() => props.onEdit(props.index)}>
                    <img src={EditIcon} alt='Edit Note Icon'/>
                </div>
            </div>
            <div className='text-container'>
                <p>{text}</p>
            </div>
        </div>
    );
}
