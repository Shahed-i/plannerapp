import { useState } from 'react';

const colors = [
    'bg-rose-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-200',
    'bg-purple-200',
];

function AddNotePopup({ closePopup, handleAddNote }) {
    const [noteText, setNoteText] = useState('');
    const [noteColor, setNoteColor] = useState(colors[0]); 
    const [hoverColor, setHoverColor] = useState(null); 

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleColorClick = (color) => {
        setNoteColor(color);
        setHoverColor(null); 
    };

    const handleSaveClick = (event) => {
        event.preventDefault();
        if (noteText.trim().length > 0) {
            handleAddNote(noteText, noteColor);  
            setNoteText('');
            closePopup();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div
                className={`rounded-lg shadow-lg p-6 w-1/3 ${hoverColor ? hoverColor : noteColor}`}
                style={{ transition: 'background-color 0.3s' }}
            >
                <button
                    className="text-right mb-4 text-2xl font-bold text-gray-600"
                    onClick={closePopup}
                >
                    &times;
                </button>
                <div className='shadow-sm rounded-md p-4 mb-4'>
                    <textarea
                        className='w-full h-auto focus:outline-none rounded-md p-2'
                        placeholder='Type to add a note...'
                        value={noteText}
                        onChange={handleChange}
                    ></textarea>
                    <div className='flex flex-col mt-2'>
                        <label className='text-gray-700 mb-2'>Select Note Color:</label>
                        <div className='flex space-x-2 mb-4'>
                            {colors.map(color => (
                                <div
                                    key={color}
                                    className={`w-8 h-8 cursor-pointer rounded-full ${color} border-2 ${noteColor === color ? 'border-gray-800' : 'border-transparent'}`}
                                    onClick={() => handleColorClick(color)}
                                    onMouseEnter={() => setHoverColor(color)} 
                                    onMouseLeave={() => setHoverColor(null)} 
                                />
                            ))}
                        </div>
                        <button
                            className='font-bold p-2 rounded-md bg-slate-100 hover:bg-slate-50'
                            onClick={handleSaveClick}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNotePopup;
