import React from 'react';
import Note from './Note';
import PropTypes from 'prop-types';
import '../styles/notes.css';

export default function Notes(props) {
    return (
        <div className='notes-container'>
            {props.notes.filter(
                    (note, index) =>
                        note.text.includes(props.searchTerm)
                )
                .map(
                    (note, index) => 
                        <Note note={note} key={index} onEdit={props.onEditNote}/>
                )
            }
        </div>
    );
}

Notes.propTypes = {
    notes: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    onEditNote: PropTypes.func.isRequired
};
