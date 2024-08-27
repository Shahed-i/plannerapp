import React, { useState, useEffect } from 'react';

function NewTaskForm({ task, onSave, onCancel, isEditing }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('low');
    const [frequency, setFrequency] = useState('once');
    const [status, setStatus] = useState('not started');

    useEffect(() => {
        if (task) {
            setName(task.name);
            setDate(task.date);
            setDescription(task.description);
            setPriority(task.priority);
            setFrequency(task.frequency);
            setStatus(task.status);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            name,
            date,
            description,
            priority,
            frequency,
            status,
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold mb-4">{isEditing ? 'Edit Task' : 'Create New Task'}</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Task Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                        Date
                    </label>
                    <input
                        id="date"
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input
                        id="description"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <label className="block mb-2">
                    Priority
                    <select
                        name="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </label>
                <label className="block mb-2">
                    Frequency
                    <select
                        name="frequency"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="once">Once</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bimonthly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </label>
                <label className="block mb-4">
                    Status
                    <select
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="not started">Not Started</option>
                        <option value="in progress">In Progress</option>
                        <option value="complete">Complete</option>
                    </select>
                </label>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        {isEditing ? 'Edit Task' : 'Create Task'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewTaskForm;
