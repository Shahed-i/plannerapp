import React from 'react';

function NewCategory({ openPopup }) {
    return (
        <div className="flex flex-container w-64 h-auto justify-center">
            <button className="flex-box flex-col flex box-border w-60 h-32 bg-purple-200 hover:bg-purple-300 text-2xl items-center text-center justify-center font-medium rounded-3xl mx-3 my-2" onClick={openPopup}>
                <p className="">+</p>
            </button>
        </div>
    );
}

export default NewCategory;
