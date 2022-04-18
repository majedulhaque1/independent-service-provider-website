import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className='footer' bg="primary">
            <div className='footer-container'>
                <div className='menu'>
                    <h2>Menu</h2>
                    <Link className='text-white text-decoration-none' to={'/'}>Home</Link>
                    <Link className='text-white text-decoration-none' to={'/services'}>Services</Link>
                    <Link className='text-white text-decoration-none' to={'/reviews'}>Reviews</Link>
                    <Link className='text-white text-decoration-none' to={'/blogs'}>Blogs</Link>
                    <Link className='text-white text-decoration-none' to={'/aboutme'}>About Me</Link>
                </div>
                <div className='services'>
                    <h2>Services</h2>
                    <Link className='text-white text-decoration-none' to={'/'}>Oral hyginen</Link>
                    <Link className='text-white text-decoration-none' to={'/'}>Health And life Style</Link>
                    <Link className='text-white text-decoration-none' to={'/'}>Headth</Link>
                </div>
                <div className='social'>
                    <h2>Follow Me</h2>
                    <FontAwesomeIcon icon="fa-brands fa-facebook"></FontAwesomeIcon>
                    <FontAwesomeIcon icon="fa-brands fa-google"></FontAwesomeIcon>
                    <FontAwesomeIcon icon="fa-brands fa-twitter"></FontAwesomeIcon>
                </div>
            </div>
            <div>
                <p className='text-center text-white'>copyright Majedul Haque Rakib</p>
            </div>
        </div>
    );
};

export default Footer;