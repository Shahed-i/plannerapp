import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../components/Notes/NotesList';
import NavBar from '../components/NavBar';
import AddNotePopup from '../components/Notes/AddNotePopup';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
        if (savedNotes && Array.isArray(savedNotes)) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
        }
    }, [notes]);

    const addNote = (text, color) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
            color: color,
        };
        setNotes(prevNotes => [...prevNotes, newNote]);
    };

    const deleteNote = (id) => {
        setNotes(prevNotes => prevNotes.filter((note) => note.id !== id));
    };

    const saveNote = (id, updatedText) => {
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === id ? { ...note, text: updatedText } : note
            )
        );
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="bg-neutral-50 min-h-screen">
            <NavBar />
            <div className="container">
                <h1 className="head-text px-10 py-3">Notes</h1>
                <div className="flex ml-14 flex-wrap flex-row">
                    <NotesList
                        notes={notes}
                        handleAddNote={addNote}
                        handleDeleteNote={deleteNote}
                        handleSaveNote={saveNote}  
                    />
                </div>
            </div>
            {isPopupOpen && <AddNotePopup closePopup={closePopup} handleAddNote={addNote} />}
        </div>
    );
};

export default Notes;
