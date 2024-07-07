import React from 'react';
import DeleteIcon from '../../icons/DeleteIcon.png'; 

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <button
                    onClick={() => handleDeleteNote(id)}
                    className='delete-icon'
                >
                    <img src={DeleteIcon} alt='Delete' className='icon' />
                </button>
            </div>
        </div>
    );
};

export default Note;
