import React, { useState } from 'react';
import ProfilePicture from '../components/Profile/ProfilePicture';
import Stats from '../components/Profile/Stats';
import Preferences from '../components/Profile/Preferences';
import NavBar from '../components/NavBar';
import GoogleLogin from '../components/Profile/GoogleLogin';

const Profile = () => {
  const [user, setUser] = useState(null); // Store the user object

  // Default values in case the user isn't logged in yet
  const fullName = user ? user.name : "There";
  const profilePicUrl = user ? user.picture : null; // Get the profile picture from user object
  const tasksCompletedDaily = 5; // Replace with dynamic data
  const tasksCompletedWeekly = 35; // Replace with dynamic data

  return (
    <div className="bg-neutral-50 min-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen overflow-auto">
        <ProfilePicture fullName={fullName} profilePicUrl={profilePicUrl} />
        {/* <Stats daily={tasksCompletedDaily} weekly={tasksCompletedWeekly} />
        <Preferences /> */}
        {/* Google Login Button */}
        <div className="mt-6">
          <GoogleLogin user={user} setUser={setUser} /> {/* Pass user and setUser */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
