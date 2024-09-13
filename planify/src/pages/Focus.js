import React from 'react';
import NavBar from '../components/NavBar';
import PomodoroTimer from '../components/Focus/Timer';

function Focus() {
    return (
        <div className="bg-neutral-50 min-h-screen">
        <NavBar />
        <h1>
        <PomodoroTimer />
        </h1>
        </div>
    );
}

export default Focus;
