import React from 'react';
import { Link } from 'react-router-dom';
import IconsImports from '../assets/js/Imports.js';
import Sidebarhooks from '../assets/hooks/Sidebarhooks';

function Sidebar() {

    Sidebarhooks();

    return (
        <nav className="sidebar close">
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={IconsImports.logoicon} alt="" />
                    </span>
                    <div className="text logo-text">
                        <span className="name">TO DO TASK</span>
                    </div>
                </div>
            </header>
            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <Link to="/">
                                <i className="bx bxs-dashboard icon"></i>
                                <span className="text nav-text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/tasklist">
                                <i className="bx bxs-note icon"></i>
                                <span className="text nav-text">Task List</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/announcement">
                                <i className="bx bxs-megaphone icon"></i>
                                <span className="text nav-text">Announcement</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/user">
                                <i className="bx bxs-user-circle icon"></i>
                                <span className="text nav-text">User</span>                           
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="bottom-content">
                    <li>
                        <a href="">
                            <i className="bx bxs-calendar-check icon"></i>
                            <span className="text nav-text"></span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="bx bx-log-out icon"></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>
                    <li className="mode">
                        <div className="sun-moon">
                            <i className="bx bx-moon icon moon"></i>
                            <i className="bx bx-sun icon sun"></i>
                        </div>
                        <span className="mode-text text">Dark mode</span>
                        <div className="toggle-switch">
                            <span className="switch"></span>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
