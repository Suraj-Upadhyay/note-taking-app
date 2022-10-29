import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/note_modal_box.css'

export default function NoteModalBox(props) {

    const [note, setNote] = useState({
        title: props.note ? props.note.title : '',
        date: props.note ? props.note.date : new Date().toDateString(),
        text: props.note ? props.note.text : ''
    });

    const onNoteChange = (e) => {
        e.preventDefault();
        setNote(prevNote => ({
            ...prevNote,
            [e.target.name]: e.target.value
        }));
    };

    const onSave = (e) => {
        e.preventDefault();
        props.onSave(props.index, note);
    };

    const onDiscard = (e) => {
        e.preventDefault();
        props.onClose();
    };

    useEffect(() => {
        const onWindowClick = (e) => {
            const modal = document.getElementById('modal-container');
            if (e.target === modal) {
                props.onClose();
            };
        };

        window.addEventListener('click', onWindowClick);

        return () => {
            window.removeEventListener('click', onWindowClick);
        };
    });

    return (
        <div className='modal-container' id="modal-container">
            <div className='modal-box'>
                <div className='modal-header'>
                    <input
                        placeholder='Enter Title...'
                        type='text'
                        name='title'
                        value={note.title}
                        onChange={onNoteChange}
                    />
                    <div className='date'>{note.date}</div>
                    <span className='modal-close'></span>
                </div>
                <div className='modal-content'>
                    <input
                        placeholder='Type Something...'
                        type='text'
                        name='text'
                        value={note.text}
                        onChange={onNoteChange}
                    />
                </div>
                <div className='modal-footer'>
                    <button onClick={onDiscard}>Discard</button>
                    <button onClick={onSave}>Save</button>
                </div>
            </div>
        </div>
    );
}

NoteModalBox.propTypes = {

};
