import React, { useState } from 'react';

const FullSizedNote = ({ note, handleSaveNote, closeFullNote }) => {
    const [noteText, setNoteText] = useState(note.text);

    const handleTextChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        handleSaveNote(note.id, noteText);
        closeFullNote();
    };

    return (
        <div className="fixed inset-0 z-50 bg-white p-8">
            <button
                className="text-right mb-4 text-2xl font-bold text-gray-600"
                onClick={closeFullNote}
            >
                &times;
            </button>
            <textarea
                className="w-full h-5/6 p-4 border rounded-lg resize-none focus:outline-none"
                value={noteText}
                onChange={handleTextChange}
                placeholder="Edit your note here..."
            />
            <div className="flex justify-between mt-4">
                <small className="text-gray-500">{note.date}</small>
                <button
                    className="font-bold p-2 rounded-md bg-blue-100 hover:bg-blue-200"
                    onClick={handleSaveClick}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default FullSizedNote;
