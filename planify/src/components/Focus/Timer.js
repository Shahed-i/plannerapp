// src/components/Focus.js
import React, { useState, useEffect } from 'react';
import Settings from './Settings';

const defaultSettings = {
  work: 1500, // 25 minutes in seconds
  shortBreak: 300, // 5 minutes in seconds
  longBreak: 900, // 15 minutes in seconds
  sessionsBeforeLongBreak: 4, // Number of focus sessions before a long break
};

const customColors = {
    breakColor: '#FC9CDB', 
    focusColor: '#FF69B4',
  };

const Focus = () => {
  const [timeLeft, setTimeLeft] = useState(defaultSettings.work);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const [settings, setSettings] = useState(defaultSettings);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handlePhaseSwitch();
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handlePhaseSwitch = () => {
    if (!isBreak) {
      setIsBreak(true);
      if (cyclesCompleted < settings.sessionsBeforeLongBreak - 1) {
        setTimeLeft(settings.shortBreak);
      } else {
        setTimeLeft(settings.longBreak);
        setCyclesCompleted(0);
      }
      setCyclesCompleted(cyclesCompleted + 1);
    } else {
      setIsBreak(false);
      setTimeLeft(settings.work);
    }
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(settings.work);
    setIsBreak(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Circular progress calculations
  const circleRadius = 45;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const totalDuration = isBreak ? settings.shortBreak : settings.work;
  const progress = (timeLeft / totalDuration) * 100;
  const strokeDasharray = circleCircumference;
  const strokeDashoffset = circleCircumference - (circleCircumference * (progress / 100));

  // Status text
  const statusText = isBreak
    ? timeLeft === settings.shortBreak
      ? 'Short Break'
      : 'Long Break'
    : 'Focus Time';

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
      <div className="relative flex items-center justify-center mb-6">
        <svg
          className="w-40 h-40"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Static background circle */}
          <circle
            cx="50"
            cy="50"
            r={circleRadius}
            strokeWidth="10"
            stroke="gray"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={circleRadius}
            strokeWidth="10"
            stroke={isBreak ? customColors.breakColor : customColors.focusColor}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          {/* Time text */}
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dy="0.3em"
            className="text-2xl font-mono text-gray-800"
          >
            {formatTime(timeLeft)}
          </text>
        </svg>
      </div>
      <div className="text-lg font-semibold mb-4">
        {statusText}
      </div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={toggleTimer}
          className={`px-4 py-2 text-white font-semibold rounded-md transition-colors 
                      ${isActive ? 'bg-pink-500 hover:bg-pink-400' : 'bg-pink-500 hover:bg-pibk-400'}`}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-400"
        >
          Reset
        </button>
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600"
        >
          Settings
        </button>
      </div>
      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        setSettings={setSettings}
      />
    </div>
  );
};

export default Focus;
