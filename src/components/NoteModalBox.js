import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/note_modal_box.css';
import CloseIcon from '../assets/close-icon.png'

export default function NoteModalBox(props) {

    const [note, setNote] = useState({
        title: props.note ? props.note.title : '',
        date: props.note ? props.note.date : new Date().toDateString(),
        text: props.note ? props.note.text : ''
    });
    const [showCloseNotePopup, setShowCloseNotePopup] = useState(false);

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

    const onNoteClose = () => {
        setShowCloseNotePopup(true);
    };

    useEffect(() => {
        const onWindowClick = (e) => {
            const modal = document.getElementById('modal-container');
            if (e.target === modal) {
                setShowCloseNotePopup(true);
            };
        };

        window.addEventListener('click', onWindowClick);

        return () => {
            window.removeEventListener('click', onWindowClick);
        };
    }, []);

    useEffect(() => {
        if (!showCloseNotePopup) return;

        const onWindowClick = (e) => {
            const closeDialog = document.getElementById('close-dialog-box');
            if (e.target === closeDialog) {
                setShowCloseNotePopup(false);
            }
        };

        window.addEventListener('click', onWindowClick);

        return () => {
            window.removeEventListener('click', onWindowClick);
        };
    }, [showCloseNotePopup]);

    return (
        <div className='modal-container' id="modal-container">
            <div className='modal-box'>
                <div className='modal-header'>
                    <input
                        className='input-title input'
                        placeholder='Enter Title.'
                        type='text'
                        name='title'
                        value={note.title}
                        onChange={onNoteChange}
                    />
                    <span className='modal-close' onClick={onNoteClose}>
                        <img src={CloseIcon} alt='Close Note Dialog' />
                    </span>
                    <div className='modal-date'>{note.date}</div>
                </div>
                <div className='modal-content'>
                    <textarea
                        className='input-text input'
                        placeholder='Type Something.'
                        type='text'
                        name='text'
                        value={note.text}
                        onChange={onNoteChange}
                    />
                </div>
                <div className='modal-footer'>
                    <button className='modal-save-btn' onClick={onSave}>Save</button>
                </div>
            </div>
            {
                showCloseNotePopup ?
                    <div className='close-dialog-box' id='close-dialog-box'>
                        <div className='close-dialog-content'>
                            <button className='close-dialog-discard-btn' onClick={onDiscard}>Discard</button>
                            <button className='close-dialog-save-btn' onClick={onSave}>Save</button>
                        </div>
                    </div>
                : []
            }
        </div>
    );
}

NoteModalBox.propTypes = {

};
