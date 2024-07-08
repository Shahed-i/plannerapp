import React from 'react';
import NavBar from '../components/NavBar';

function Tasks() {
    return (
        <div>
        <NavBar />
        <h1 className="head-text px-10 py-3">
            Hello <span className="pink-gradient-text font-semibold drop-shadow-sm">Name!</span>
        </h1>
        </div>
    );
    };
export default Tasks;
