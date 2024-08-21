import React, { useState } from 'react';
import AddNotePopup from './AddNotePopup'; 
const NoteCreator = ({ handleAddNote }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div>
            <button
                className='w-60 h-32 bg-rose-100 hover:bg-rose-200 text-2xl font-medium rounded-3xl mx-3 my-2 p-6 min-w-[300px] min-h-[150px] flex items-center justify-center'
                onClick={openPopup}
            >
                <p>+</p>
            </button>
            {isPopupOpen && (
                <AddNotePopup closePopup={closePopup} handleAddNote={handleAddNote} />
            )}
        </div>
    );
};

export default NoteCreator;

//<div className={`rounded-3xl mx-3 my-2 p-6 min-w-[300px] min-h-[150px] flex flex-col justify-between ${color}`}>