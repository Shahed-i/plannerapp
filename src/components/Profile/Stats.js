import React from 'react';

const Stats = ({ daily, weekly }) => {
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">My Stats</h2>
      <div className="flex justify-between mb-4">
        <div className="text-center">
          <p className="text-3xl font-bold">{daily}</p>
          <p className="text-sm">Tasks Completed Today</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{weekly}</p>
          <p className="text-sm">Tasks Completed This Week</p>
        </div>
      </div>
      {/* Placeholder for Graph of weekly/daily stats */}
      <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  );
};

export default Stats;
