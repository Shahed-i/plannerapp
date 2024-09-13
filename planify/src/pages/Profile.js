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
  const tasksCompletedDaily = 5; // Replace with dynamic data
  const tasksCompletedWeekly = 35; // Replace with dynamic data

  return (
    <div className="bg-neutral-50 min-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen overflow-auto">
        <ProfilePicture fullName={fullName} />
        <Stats daily={tasksCompletedDaily} weekly={tasksCompletedWeekly} />
        <Preferences />
        {/* Google Login Button */}
        <div className="mt-6">
          <GoogleLogin setUser={setUser} /> {/* Pass setUser to GoogleLogin */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
