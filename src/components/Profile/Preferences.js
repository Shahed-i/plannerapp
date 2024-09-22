import React from 'react';

const Preferences = () => {
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Preferences</h2>
      <div className="mb-4">
        <label htmlFor="theme" className="block text-sm font-medium mb-2">Theme</label>
        <select
          id="theme"
          className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded focus:outline-none"
        >
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="notifications" className="block text-sm font-medium mb-2">Notifications?? maybe</label>
        <input
          type="checkbox"
          id="notifications"
          className="rounded"
        /> Enable notifications
      </div>
    </div>
  );
};

export default Preferences;
