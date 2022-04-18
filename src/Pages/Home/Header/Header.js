import React from 'react';
import Banner from '../Banner/Banner';
import MainNavbar from '../Navbar/Navbar';
import './Header.css';
const Header = () => {
    return (
        <div className='header-container'>
            <MainNavbar></MainNavbar>
        </div>
    );
};

export default Header;