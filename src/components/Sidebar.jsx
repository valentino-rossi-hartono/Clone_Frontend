import React from 'react';
import { Link } from 'react-router-dom'; 
const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to="/" className="brand-link">
                <span className="brand-text font-weight-light">Event Gacor</span>
            </Link>

            {/* Sidebar Menu */}
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        <li className="nav-item">
                            <Link to="/event" className="nav-link">
                                <i className="nav-icon fa-solid fa-calendar-days"></i>
                                <p> Event</p>
                            </Link>
                        </li>
                        
                        {/* Tambahkan link ke Login Page di sini */}
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                {/* Gunakan ikon yang relevan, misalnya fa-sign-in-alt atau fa-right-to-bracket jika tersedia */}
                                <i className="nav-icon fa-solid fa-sign-in-alt"></i> 
                                <p> Login</p>
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;