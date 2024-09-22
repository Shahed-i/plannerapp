import React from "react";
import { NavLink } from 'react-router-dom';
import planifyLogo from '../icons/planifylogo.png'; // Adjust the path as needed

function NavBar() {
    return (
        <header className="shadow mb-2">
            <div className="w-full px-4 py-4 flex items-center justify-between font-medium">
                <NavLink to='/'>
                <img src={planifyLogo} alt="Planify Logo" style={{ height: '6rem', width: 'auto' }} />
                </NavLink>
                <input className="peer hidden" type="checkbox" id="navbar-open"/>
                <label className="sm:hidden cursor-pointer text-xl" htmlFor="navbar-open">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav className="peer-checked:block hidden sm:flex">
                    <ul className="flex gap-x-8">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} to='/'>Tasks</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} to='/Notes'>Notes</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} to='/Calendar'>Calendar</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} to='/Focus'>Focus</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'rounded-xl border-2 px-6 py-2 border-pink-400 font-medium text-white bg-pink-400 hover:text-gray-600 hover:bg-pink-300 hover:border-pink-300' : 'rounded-xl border-2 px-6 py-2 border-pink-400 font-medium text-pink-500 hover:text-white hover:bg-pink-400'} to='/Profile'>Profile</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
