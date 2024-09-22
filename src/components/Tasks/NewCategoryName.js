import React, { useState } from 'react';

const colors = [
    'bg-rose-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-200',
    'bg-purple-200',
];

function NewCategoryName({ closePopup, addCategory }) {
    const [categoryName, setCategoryName] = useState('');
    const [categoryColor, setCategoryColor] = useState(colors[0]);
    const [hoverColor, setHoverColor] = useState(null);

    const handleInputChange = (e) => {
        setCategoryName(e.target.value);
    };

    const handleColorClick = (color) => {
        setCategoryColor(color);
        setHoverColor(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryName.trim()) {
            addCategory({ name: categoryName, color: categoryColor });
            setCategoryName('');
            closePopup();
        }
    };

    return (
        <div className="popup" id="popup-1">
            <div className="overlay" onClick={closePopup}></div>
            <div
                className={`content flex justify-center items-center flex-col ${hoverColor ? hoverColor : categoryColor}`}
                style={{ transition: 'background-color 0.3s' }}
            >
                <div className="close-btn" onClick={closePopup}>&times;</div>
                <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
                    <label htmlFor="category-name" className="head-text px-10 pt-2 mt-2">
                        Name Your New Category:
                    </label>
                    <br />
                    <input
                        type="text"
                        id="category-name"
                        name="category-name"
                        className="border-2 border-gray-300 rounded-lg p-3 w-[calc(100%-24px)] box-border mb-5"
                        value={categoryName}
                        onChange={handleInputChange}
                    />
                    <label className="text-gray-700 mb-2">Select Category Color:</label>
                    <div className="flex space-x-2 mb-4">
                        {colors.map((color) => (
                            <div
                                key={color}
                                className={`w-8 h-8 cursor-pointer rounded-full ${color} border-2 ${
                                    categoryColor === color ? 'border-gray-800' : 'border-transparent'
                                }`}
                                onClick={() => handleColorClick(color)}
                                onMouseEnter={() => setHoverColor(color)}
                                onMouseLeave={() => setHoverColor(null)}
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="px-4 my-2 py-2 mt-4 mb-2 bg-pink-200 rounded-2xl hover:bg-pink-300 hover:text-white font-semibold"
                    >
                        Done
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewCategoryName;
