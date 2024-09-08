import React from 'react';

function Task({ task, onEdit, onDelete }) {
    return (
        <div className="flex flex-row justify-between w-full bg-pink-100 hover:bg-pink-200 h-8 px-2">
            <span className="flex-1 flex items-center pl-5 cursor-pointer" onClick={onEdit}>{task.name}</span>
            <span className="flex-1 flex items-center pl-5 cursor-pointer" onClick={onEdit}>{task.date}</span>
            <span className="flex-1 flex items-center pl-5 cursor-pointer" onClick={onEdit}>{task.description}</span>
            <span className="flex-1 flex items-center pl-5 cursor-pointer" onClick={onEdit}>{task.priority}</span>
            <span className="flex-1 flex items-center pl-5 cursor-pointer" onClick={onEdit}>{task.frequency}</span>
            <span className="flex-1 flex items-center pl-5 cursor-pointer" onClick={onEdit}>{task.status}</span>
            <button
                className="w-0 h-8 pr-4 items-center text-red-600 cursor-pointer"
                onClick={onDelete}
            >
                x
            </button>
        </div>
    );
}

export default Task;
