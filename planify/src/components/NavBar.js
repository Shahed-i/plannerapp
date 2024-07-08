import React from "react";
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <header className="shadow mb-2">
            <div className="relative md:mx-auto max-w-screen-xl flex flex-col px-4 py-4 sm:flex-row sm:items-center justify-between font-medium overflow-hidden">
                <NavLink className="text-5xl flex items-center pink-purple-gradient_text font-semibold leading-snug mr-2 pr-3" to='/'>PLANIFY</NavLink>
                <input className="peer hidden" type="checkbox" id="navbar-open"/>
                <label className="sm:hidden cursor-pointer absolute right-0 mt-5 text-xl pr-3" for="navbar-open">    
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav class="peer-checked:block hidden py-4 sm:py-0 sm:block">
                    <ul className="flex flex-col sm:flex-row sm:gap-x-8 gap-y-4">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} to='/'>Tasks </NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} to='/Notes'>Notes </NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} to='/Calendar'>Calendar </NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'} to='/Focus'>Focus </NavLink></li>
                        <li className="mt-2 sm:mt-0"><NavLink className={({ isActive }) => isActive ? 'rounded-xl border-2 px-6 py-2 border-pink-400 font-medium text-white bg-pink-400 hover:text-gray-600 hover:bg-pink-300 hover:border-pink-300' : 'rounded-xl border-2 px-6 py-2 border-pink-400 font-medium text-pink-500 hover:text-white hover:bg-pink-400'} to='/Profile'>Profile</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;