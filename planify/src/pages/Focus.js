import React from 'react';
import NavBar from '../components/NavBar';

function Focus() {
    return (
        <div className="bg-blue-500 min-h-screen flex flex-col items-center justify-center text-white">
            <NavBar />
            <h1 className="text-4xl font-bold">
                This is Focus page!
            </h1>
            <p className="mt-4 text-lg">
                Tailwind CSS is working on this page!
            </p>
        </div>
    );
}

export default Focus;
