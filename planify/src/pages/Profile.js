import React from 'react';
import ProfilePicture from '../components/Profile/ProfilePicture';
import Stats from '../components/Profile/Stats';
import Preferences from '../components/Profile/Preferences';
import NavBar from '../components/NavBar';


const Profile = () => {
  const fullName = "Neha Parmar"; // Replace with dynamic data
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
    </div>
    </div>
  );
};

export default Profile;
