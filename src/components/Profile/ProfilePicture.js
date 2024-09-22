import React from 'react';

const ProfilePicture = ({ fullName, profilePicUrl }) => {
  return (
    <div className="text-center mb-6">
      {profilePicUrl ? (
        <img
          src={profilePicUrl}
          alt={`${fullName}'s profile`}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
      ) : (
        <div className="w-24 h-24 bg-pink-300 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
      )}
      <h1 className="text-2xl font-semibold">Hi {fullName}!</h1>
    </div>
  );
};

export default ProfilePicture;
