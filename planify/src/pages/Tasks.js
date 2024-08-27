import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CategoryBox from '../components/Tasks/CategoryBox';
import NewCategory from '../components/Tasks/NewCategory';
import NewCategoryName from '../components/Tasks/NewCategoryName';
import Category from '../components/Tasks/Category';

function Tasks() {
    const [categories, setCategories] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [highPriorityTasks, setHighPriorityTasks] = useState([]);
    const location = useLocation();

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

    // Update high-priority tasks whenever categories change
    useEffect(() => {
        const tasks = categories.flatMap(category => {
            const categoryTasks = JSON.parse(localStorage.getItem(`tasks-${category.name}`)) || [];
            return categoryTasks.map(task => ({
                ...task,
                categoryName: category.name
            }));
        });

        const highPriority = tasks.filter(task => task.priority === 'high');
        setHighPriorityTasks(highPriority);
    }, [categories, selectedCategory]);

    // Clear selectedCategory when route changes
    useEffect(() => {
        setSelectedCategory(null);
    }, [location]);

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

    const deleteCategory = (categoryToDelete) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            setCategories(categories.filter(category => category !== categoryToDelete));
            localStorage.removeItem(`tasks-${categoryToDelete.name}`);
        }
    };

    return (
        <div className="bg-orange-120 min-h-screen">
            <NavBar />
            {!selectedCategory ? (
                <>
                    <div className="px-10 py-3 flex flex-col">
                        <h1 className="head-text mb-3">Hello <span className="pink-gradient-text font-semibold drop-shadow-sm">Name!</span></h1>
                        <div className="flex items-center justify-between">
                            <h3 className="subhead-text text-gray-600">Categories</h3>
                            <button 
                                onClick={() => setIsDeleteMode(!isDeleteMode)}
                                className="bg-red-300 hover:bg-red-400 text-black font-bold py-2 px-4 rounded"
                            >
                                {isDeleteMode ? 'Cancel' : 'Delete'}
                            </button>
                        </div>
                    </div>
                    <div className="flex ml-14 flex-wrap flex-row">
                        <NewCategory openPopup={openPopup} />
                        {categories.map((category) => (
                            <CategoryBox 
                                key={category.name}
                                name={category.name} 
                                color={category.color} 
                                shake={isDeleteMode}
                                openCategory={() => {
                                    if (isDeleteMode) {
                                        deleteCategory(category);
                                    } else {
                                        openCategory(category);
                                    }
                                }} 
                            />
                        ))}
                    </div>
                    <div className="px-10 py-3">
                        <div className="flex items-center justify-between">
                            <h3 className="subhead-text text-gray-600">High Priority Tasks</h3>
                        </div>
                        {highPriorityTasks.length > 0 ? (
                            <div className="mt-4 flex flex-wrap gap-4">
                                {highPriorityTasks.map((task, index) => (
                                    <div key={index} className="p-4 bg-orange-150 border border-gray-200 rounded-lg shadow-md flex-shrink-0 w-full sm:w-80">
                                        <p className="font-semibold text-lg mb-1">
                                            {task.categoryName}
                                        </p>
                                        <p className="text-gray-700 mb-1">
                                            {task.name}
                                        </p>
                                        <p className="text-gray-600">
                                            {task.date}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600 mt-3">No high-priority tasks available.</p>
                        )}
                    </div>
                </>
            ) : (
                <div>
                    <Category category={selectedCategory} goBackToCategories={goBackToCategories} />
                </div>
            )}
            {isPopupOpen && <NewCategoryName closePopup={closePopup} addCategory={addCategory} />}
        </div>
    );
}

export default Tasks;
