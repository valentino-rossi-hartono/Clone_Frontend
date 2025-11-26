import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="wrapper"> 
            
            <Header />
            <Sidebar />

            <div className="content-wrapper">
                {children} 
            </div>

            <Footer />

            <aside className="control-sidebar control-sidebar-dark"></aside>
        </div>
    );
};

export default Layout;