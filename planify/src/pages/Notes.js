import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../components/Notes/NotesList';
import NavBar from '../components/NavBar';

const Notes = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: 'This is my first note!',
            date: '15/04/2021',
        },
        {
            id: nanoid(),
            text: 'This is my second note!',
            date: '21/04/2021',
        },
        {
            id: nanoid(),
            text: 'This is my third note!',
            date: '28/04/2021',
        },
        {
            id: nanoid(),
            text: 'This is my new note!',
            date: '30/04/2021',
        },
    ]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    }, [notes]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div>
            <NavBar />
            <div className='container'>
                <h1>This is Notes page!</h1>
            
                <NotesList
                    notes={notes}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    );
};

export default Notes;
