import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    const location = useLocation();
    
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/chat" className={`nav-link ${location.pathname === '/chat' ? 'active' : ''}`}>
                            <span className="nav-icon">💬</span>
                            Chat
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/plans" className={`nav-link ${location.pathname === '/plans' ? 'active' : ''}`}>
                            <span className="nav-icon">📋</span>
                            My Plans
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>
                            <span className="nav-icon">👤</span>
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;