import React, { useState } from 'react';
import Search from './components/Search';
import Profile from './components/Profile'
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import sampleNotes from './assets/SampleNotes';
import NoteModalBox from './components/NoteModalBox';
import './styles/note_app.css';

const DontShowModal = -2;
const AddNewNote = -1;

export default function NoteApp() {
    const [notes, setNotes] = useState(sampleNotes);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalNoteIndex, setModalNoteIndex] = useState(DontShowModal);

    // const onAddNote = (newNote) => {
    //     setNotes((prevNotes) =>
    //         [...prevNotes, newNote]
    //     );
    // };

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

    const openNoteModal = (index = AddNewNote) => {
        setModalNoteIndex(index);
    };

    const closeNoteModel = () => {
        setModalNoteIndex(DontShowModal);
    };

    const onNoteSave = (index, note) => {
        // If index = -1; Add note to the notes list.
        // if not, replace the note at the particular index.
    };

    return (
        <div>
            <div className='nav-bar'>
                <div></div>
                <div className='search-bar'>
                    <Search searchTerm={searchTerm} onSearch={onSearch} />
                </div>
                <div className='profile-icon'>
                    <AddNote openNoteModal={openNoteModal} />
                    <Profile />
                </div>
            </div>
            <div className='body'>
                <div></div>
                <Notes notes={notes} searchTerm={searchTerm} openNoteModal={openNoteModal} />
            </div>
            {
                modalNoteIndex !== DontShowModal ?
                    <NoteModalBox
                        note={ modalNoteIndex === AddNewNote ? {} : notes[modalNoteIndex] }
                        onSave={onNoteSave}
                        onClose={closeNoteModel}
                    />
                : []
            }
        </div>
    );
}
