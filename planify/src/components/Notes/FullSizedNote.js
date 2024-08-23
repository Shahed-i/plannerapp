import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        ["link", "image", "video"],
    ],
};

const FullSizedNote = ({ note, handleSaveNote, closeFullNote }) => {
    const [value, setValue] = useState(note.text || "");

    const handleSaveClick = () => {
        handleSaveNote(note.id, value);
        closeFullNote();
    };

    return (
        <div className="fixed inset-0 z-50 bg-white p-8 flex flex-col h-full">
            <button
                className="self-end text-2xl font-bold text-gray-600 mb-4"
                onClick={closeFullNote}
            >
                &times;
            </button>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className='editor-input flex-grow mb-10' // Space below the editor
                modules={modules}
            />
            <div className="flex justify-between items-center mt-4">
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
