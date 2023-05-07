import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="Header">
            <h1>Umair Khalid</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;