import React, { useState } from 'react';
import Search from './components/Search';
import Profile from './components/Profile'
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import sampleNotes from './assets/SampleNotes';
import NoteModalBox from './components/NoteModalBox';
import './styles/note_app.css';

const AddNewNote = -1;
const DontShowModal = -2;

export default function NoteApp() {
    const [notes, setNotes] = useState(sampleNotes);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalNoteIndex, setModalNoteIndex] = useState(DontShowModal);

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
        if (index === AddNewNote)
            setNotes(prevNotes => [
                ...prevNotes,
                note
            ]);
        else
            setNotes(prevNotes => {
                prevNotes[index] = note;
                return prevNotes;
            });
        closeNoteModel();
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
                        note={ modalNoteIndex === AddNewNote ? null : notes[modalNoteIndex] }
                        index={modalNoteIndex}
                        onSave={onNoteSave}
                        onClose={closeNoteModel}
                    />
                : []
            }
        </div>
    );
}
