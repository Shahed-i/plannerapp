import React from 'react';

const ProfilePicture = ({ fullName }) => {
  return (
    <div className="text-center mb-6">
      <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
      <h1 className="text-2xl font-semibold">Hi {fullName}!</h1>
    </div>
  );
};

export default ProfilePicture;
