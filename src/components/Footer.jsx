import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-inline"> React&Laravel </div>
            <strong>Copyright &copy; {currentYear} <a href="#">AdminLTE.io</a>. </strong> All rights reserved.
        </footer>
    );
};

export default Footer;