import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Profile from './components/Profile'
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import NoteModalBox from './components/NoteModalBox';
import { fetchNotesList, insertNewNote, updateNote, removeNote } from './database/db-operations';
import './styles/note_app.css';

const AddNewNote = -1;
const DontShowModal = -2;

export default function NoteApp() {
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalNoteIndex, setModalNoteIndex] = useState(DontShowModal);

    const getNotes = async () => {
        setNotes( await fetchNotesList());
    };

    const insertNote = async (newNote) => {
        setNotes( await insertNewNote(newNote));
    };

    const editNote = async (index, editedNote) => {
        const noteId = notes[index]._id;
        setNotes( await updateNote(noteId, editedNote));
    };

    const deleteNote = async (index) => {
        const noteId = notes[index]._id;
        setNotes( await removeNote(noteId));
    };

    useEffect(() => {
        getNotes();
    }, [])

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
            insertNote(note);
        else
            editNote(index, note);
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
                {
                    notes.length
                    ? <Notes notes={notes} searchTerm={searchTerm} openNoteModal={openNoteModal} onDelete={deleteNote}/>
                    : ''
                }
            </div>
            {
                modalNoteIndex !== DontShowModal ?
                    <NoteModalBox
                        note={ modalNoteIndex === AddNewNote ? null : notes[modalNoteIndex] }
                        index={modalNoteIndex}
                        onSave={onNoteSave}
                        onDelete={deleteNote}
                        onClose={closeNoteModel}
                    />
                : []
            }
        </div>
    );
}
