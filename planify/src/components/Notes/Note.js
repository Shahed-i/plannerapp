import React, { useState } from 'react';
import DeleteIcon from '../../icons/DeleteIcon.png';
import FullSizedNote from './FullSizedNote';

const Note = ({ id, text, date, handleDeleteNote, handleSaveNote, color }) => {
    const [isFullNoteOpen, setIsFullNoteOpen] = useState(false);

    const openFullNote = () => {
        setIsFullNoteOpen(true);
    };

    const closeFullNote = () => {
        setIsFullNoteOpen(false);
    };

    const extractPlainText = (html) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html.replace(/<br\s*\/?>/gi, '\n'); 
        return tempDiv.textContent || tempDiv.innerText || '';
    };

    const getFirstLine = (text) => {
        return text.split('\n')[0]; 
    };

    const truncateText = (text, maxLength) => {
        const plainText = extractPlainText(text);
        const firstLine = getFirstLine(plainText);
        const hasMoreText = plainText.length > firstLine.length;
        if (firstLine.length > maxLength) {
            return firstLine.substring(0, maxLength) + '...';
        }
        return hasMoreText ? firstLine + '...' : firstLine;
    };

    return (
        <>
            <div
                className={`rounded-3xl mx-3 my-2 p-6 min-w-[300px] min-h-[150px] hover:opacity-70 flex flex-col justify-between ${color}`}
                onClick={openFullNote}
            >
                <span className='text-gray-900 mb-2'>
                    {truncateText(text, 15)}
                </span>
                <div className='flex justify-between items-center mt-2'>
                    <small className='text-gray-500'>{date}</small>
                    <button
                        onClick={(e) => { e.stopPropagation(); handleDeleteNote(id); }}
                        className={`font-bold p-3 rounded-md ${color} hover:bg-opacity-75 flex items-center`}
                    >
                        <img src={DeleteIcon} alt='Delete' className='w-6 h-6' />
                    </button>
                </div>
            </div>
            {isFullNoteOpen && (
                <FullSizedNote
                    note={{ id, text, date, color }}
                    handleSaveNote={handleSaveNote}
                    closeFullNote={closeFullNote}
                />
            )}
        </>
    );
};

export default Note;
