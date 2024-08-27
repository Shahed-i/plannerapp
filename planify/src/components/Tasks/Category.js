import React, { useState, useEffect } from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';

function Category({ category, goBackToCategories }) {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(true); //Can use this so the popout is by choice

    useEffect(() => {
        // Load tasks from localStorage when the component mounts
        const savedTasks = JSON.parse(localStorage.getItem(`tasks-${category.name}`));
        if (savedTasks && Array.isArray(savedTasks)) {
            setTasks(savedTasks);
        }
    }, [category.name]);

    useEffect(() => {
        // Save tasks to localStorage whenever they change
        if (tasks.length > 0) {
            localStorage.setItem(`tasks-${category.name}`, JSON.stringify(tasks));
        }
    }, [tasks, category.name]);

    const addTask = (task) => {
        if (taskToEdit !== null) {
            setTasks(tasks.map(t => (t === taskToEdit ? task : t)));
        } else {
            setTasks([...tasks, task]);
        }
        setTaskToEdit(null);
        setShowForm(false);
    };

    const editTask = (task) => {
        setTaskToEdit(task);
        setShowForm(true);
    };

    const deleteTask = (taskToDelete) => {
        if (!showDeleteConfirm || window.confirm("Are you sure you want to delete this task?")) {
            // Filter tasks in state
            const updatedTasks = tasks.filter(task => task.name !== taskToDelete.name);
            localStorage.setItem(`tasks-${category.name}`, JSON.stringify(updatedTasks));
            setTasks(updatedTasks);
        }
    };
    
    return (
        <div className="mx-8">
            <div className="flex items-center justify-between">
                <h1 className="head-text py-3 pink-gradient-text font-semibold drop-shadow-sm text-left">
                    {category.name}
                </h1>
                <button
                    onClick={goBackToCategories}
                    className="flex-box flex-col flex box-border w-12 h-8 bg-slate-300 hover:bg-slate-200 items-center text-center justify-center font-semibold rounded-2xl mr-3"
                >
                    ←
                </button>
            </div>
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between w-full bg-brown p-2 rounded-t-lg">
                        <span className="flex-1 flex items-center pl-5 font-bold">Task</span>
                        <span className="flex-1 flex items-center font-bold">Date</span>
                        <span className="flex-1 flex items-center font-bold">Description</span>
                        <span className="flex-1 flex items-center font-bold">Priority</span>
                        <span className="flex-1 flex items-center font-bold">Frequency</span>
                        <span className="flex-1 flex items-center font-bold">Status</span>
                    </div>
                    {tasks.map((task, index) => (
                        <Task
                            key={index}
                            task={task}
                            onEdit={() => editTask(task)}
                            onDelete={() => deleteTask(task)}
                        />
                    ))}
                    <div 
                        className="flex flex-row justify-between w-full bg-orange-100 hover:bg-orange-150 p-2 cursor-pointer rounded-b-lg"
                        onClick={() => {
                            setTaskToEdit(null);
                            setShowForm(true);
                        }}
                    >
                        <span className="flex-1 flex items-center pl-5 font-bold">+ New</span>
                    </div>
                </div>

                {showForm && (
                    <NewTaskForm
                        task={taskToEdit}
                        onSave={addTask}
                        onCancel={() => setShowForm(false)}
                        isEditing={taskToEdit !== null}  // Pass a prop to differentiate between editing and adding
                    />
                )}
            </div>
        </div>
    );
}

export default Category;
