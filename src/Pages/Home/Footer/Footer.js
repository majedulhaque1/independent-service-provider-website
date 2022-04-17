import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div>
                <h2>Menu</h2>
                <Link to={'/'}>Home</Link>
                <Link to={'/services'}>Services</Link>
                <Link to={'/reviews'}>Reviews</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'/aboutme'}>About Me</Link>
            </div>
        </div>
    );
};

export default Footer;