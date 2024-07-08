import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Category from '../components/Tasks/CategoryBox';
import NewCategory from '../components/Tasks/NewCategory';
import NewCategoryName from '../components/Tasks/NewCategoryName'; // Adjust the import path as needed

function Tasks() {
    const [categories, setCategories] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const addCategory = (categoryName) => {
        setCategories([categoryName, ...categories]);
        closePopup();
    };

    return (
        <div>
            <NavBar />
            <h1 className="head-text px-10 py-3"> Hello <span className="pink-gradient-text font-semibold drop-shadow-sm">Name!</span> </h1>
            <h3 className="subhead-text py-2 px-14 text-gray-600">Categories</h3>
            <div className="flex ml-14 flex-wrap flex-row">
                <NewCategory openPopup={openPopup} />
                {categories.map((category, index) => (
                    <Category key={index} name={category} />
                ))}
            </div>
            {isPopupOpen && <NewCategoryName closePopup={closePopup} addCategory={addCategory} />}
        </div>
    );
}

export default Tasks;
