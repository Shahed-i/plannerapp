import React from 'react';
import DeleteIcon from '../../icons/DeleteIcon.png';

const Note = ({ id, text, date, handleDeleteNote, color }) => {
    return (
        <div className={`rounded-3xl mx-3 my-2 p-6 min-w-[300px] min-h-[150px] flex flex-col justify-between ${color}`}>
            <span className='text-gray-900 mb-2'>{text}</span>
            <div className='flex justify-between items-center mt-2'>
                <small className='text-gray-500'>{date}</small>
                <button
                    onClick={() => handleDeleteNote(id)}
                    className={`font-bold p-3 rounded-md ${color} hover:bg-opacity-75 flex items-center`}
                >
                    <img src={DeleteIcon} alt='Delete' className='w-6 h-6' />
                </button>
            </div>
        </div>
    );
};

export default Note;
