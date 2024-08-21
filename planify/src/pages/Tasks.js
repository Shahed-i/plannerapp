import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import CategoryBox from '../components/Tasks/CategoryBox';
import NewCategory from '../components/Tasks/NewCategory';
import NewCategoryName from '../components/Tasks/NewCategoryName'; // Adjust the import path as needed
import Category from '../components/Tasks/Category';

function Tasks() {
    const [categories, setCategories] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Load categories from localStorage when the component mounts
    useEffect(() => {
        const savedCategories = JSON.parse(localStorage.getItem('task-categories-data'));
        if (savedCategories && Array.isArray(savedCategories)) {
            setCategories(savedCategories);
        }
    }, []);

    // Save categories to localStorage whenever they change
    useEffect(() => {
        if (categories.length > 0) {
            localStorage.setItem('task-categories-data', JSON.stringify(categories));
        }
    }, [categories]);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const addCategory = (category) => {
        setCategories([category, ...categories]);
        closePopup();
    };

    const openCategory = (category) => {
        setSelectedCategory(category);
    };

    const goBackToCategories = () => {
        setSelectedCategory(null);
    };

    return (
        <div>
            <NavBar />
                {!selectedCategory ? (
                    <>
                        <h1 className="head-text px-10 py-3"> Hello <span className="pink-gradient-text font-semibold drop-shadow-sm">Name!</span> </h1>
                        <h3 className="subhead-text py-2 px-14 text-gray-600">Categories</h3>
                        <div className="flex ml-14 flex-wrap flex-row">
                        <NewCategory openPopup={openPopup} />
                        {categories.map((category, index) => (
                            <CategoryBox 
                                key={index} 
                                name={category.name} 
                                color={category.color} 
                                openCategory={() => openCategory(category)} 
                            />
                        ))}
                        </div>
                    </>
                ) : (
                    <div>
                        <button onClick={goBackToCategories} className="flex-box flex-col flex box-border w-28 h-8 bg-pink-200 hover:bg-pink-300 items-center text-center justify-center font-semibold rounded-2xl mx-3 mb-2 mt-5"> BACK </button>
                        <div> <Category category={selectedCategory}/> </div>
                        {/* Render tasks for the selected category here */}
                    </div>
                )}
            {isPopupOpen && <NewCategoryName closePopup={closePopup} addCategory={addCategory} />}
        </div>
    );
}

export default Tasks;
