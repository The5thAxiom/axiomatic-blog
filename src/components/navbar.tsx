import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const navbarLinks: { to: string; title: string }[] = [
    { to: '/', title: 'Home' },
    { to: '/search', title: 'Search' },
    { to: '/about', title: 'About' },
];

export default function Navbar() {
    return (
        <nav id='navbar'>
            <div id='navbar-heading'>Axiomatic</div>
            <div id='navbar-links'>
                {navbarLinks.map(({ to, title }, index) => (
                    <NavLink
                        key={index}
                        className={({ isActive }) =>
                            isActive ? 'current-page' : 'other-page'
                        }
                        to={to}
                    >
                        {title}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
