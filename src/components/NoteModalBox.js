import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/note_modal_box.css'

export default function NoteModalBox(props) {

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
                <span className='modal-close'></span>
                <div className='modal-content'>
                    {/* <Note note={props.note} onEdit={props.onEditNote}/> */}
                </div>
                <div className='modal-footer'>
                </div>
            </div>
        </div>
    );
}

NoteModalBox.propTypes = {

};
