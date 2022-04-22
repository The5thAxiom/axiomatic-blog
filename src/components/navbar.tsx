import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    return (
        <nav id='navbar'>
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'current-page' : 'other-page'
                }
                to='/'
            >
                Home
            </NavLink>
            {' | '}
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'current-page' : 'other-page'
                }
                to='/about'
            >
                About
            </NavLink>
        </nav>
    );
}
