import React, { useState } from 'react';

function NewCategoryName({ closePopup, addCategory }) {
    const [categoryName, setCategoryName] = useState('');

    const handleInputChange = (e) => {
        setCategoryName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryName.trim()) {
            addCategory(categoryName);
        }
    };

    return (
        <div className="popup" id="popup-1">
            <div className="overlay" onClick={closePopup}></div>
            <div className="content flex justify-center items-center flex-col">
                <div className="close-btn" onClick={closePopup}>&times;</div>
                <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
                    <label htmlFor="category-name" className="head-text px-10 pt-2 mt-2">Name Your New Category:</label>
                    <br />
                    <input
                        type="text"
                        id="category-name"
                        name="category-name"
                        className="border-2 border-gray-300 rounded-lg p-3 w-[calc(100%-24px)] box-border mb-5"
                        value={categoryName}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="px-4 my-2 py-2 mt-4 mb-2 bg-pink-200 rounded-2xl hover:bg-pink-300 hover:text-white font-medium">Done</button>
                </form>
            </div>
        </div>
    );
}

export default NewCategoryName;
