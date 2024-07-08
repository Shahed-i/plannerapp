import React from 'react';

function CategoryBox({ name, openCategory }) {
    return (
        <div className="flex flex-container w-64 h-auto justify-center">
            <button
                className="flex-box flex-col flex box-border w-60 h-32 bg-pink-200 hover:bg-pink-300 text-2xl items-center text-center justify-center font-medium rounded-3xl mx-3 my-2"
                onClick={openCategory}
            >
                <p className="max-w-52 break-words">{name}</p>
            </button>
        </div>
    );
}

export default CategoryBox;
