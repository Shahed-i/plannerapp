// src/components/Settings.js
import React, { useState } from 'react';

const Settings = ({ isOpen, onClose, settings, setSettings }) => {
  const [localSettings, setLocalSettings] = useState({
    work: settings.work / 60, // Convert seconds to minutes
    shortBreak: settings.shortBreak / 60, // Convert seconds to minutes
    longBreak: settings.longBreak / 60, // Convert seconds to minutes
    sessionsBeforeLongBreak: settings.sessionsBeforeLongBreak,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalSettings((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setSettings({
      work: localSettings.work * 60, // Convert minutes to seconds
      shortBreak: localSettings.shortBreak * 60, // Convert minutes to seconds
      longBreak: localSettings.longBreak * 60, // Convert minutes to seconds
      sessionsBeforeLongBreak: localSettings.sessionsBeforeLongBreak
    });
    onClose();
  };

  const handleClose = () => {
    setLocalSettings({
      work: settings.work / 60, // Reset to initial values
      shortBreak: settings.shortBreak / 60,
      longBreak: settings.longBreak / 60,
      sessionsBeforeLongBreak: settings.sessionsBeforeLongBreak
    });
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Focus Time (minutes)</label>
          <input
            type="number"
            name="work"
            value={localSettings.work || ''}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Short Break (minutes)</label>
          <input
            type="number"
            name="shortBreak"
            value={localSettings.shortBreak || ''}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Long Break (minutes)</label>
          <input
            type="number"
            name="longBreak"
            value={localSettings.longBreak || ''}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Sessions Before Long Break</label>
          <input
            type="number"
            name="sessionsBeforeLongBreak"
            value={localSettings.sessionsBeforeLongBreak || ''}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-400"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Settings;
