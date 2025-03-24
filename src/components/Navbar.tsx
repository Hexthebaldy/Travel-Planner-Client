import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = ()=>{
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/plans" className="nav-link">
                            MyPlans
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;