import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='menu'>
                    <h2>Menu</h2>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/services'}>Services</Link>
                    <Link to={'/reviews'}>Reviews</Link>
                    <Link to={'/blogs'}>Blogs</Link>
                    <Link to={'/aboutme'}>About Me</Link>
                </div>
                <div className='services'>
                    <h2>Services</h2>
                    <Link to={'/'}>Oral hyginen</Link>
                    <Link to={'/'}>Health And life Style</Link>
                    <Link to={'/'}>Headth</Link>
                </div>
                <div className='social'>
                    <h2>Follow Me</h2>
                    <FontAwesomeIcon icon="fa-brands fa-facebook"></FontAwesomeIcon>
                    <FontAwesomeIcon icon="fa-brands fa-google"></FontAwesomeIcon>
                    <FontAwesomeIcon icon="fa-brands fa-twitter"></FontAwesomeIcon>
                </div>
            </div>
            <div>
                <p></p>
            </div>
        </div>
    );
};

export default Footer;