import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-info'>
                <div>
                    <h1>
                        <span>Hello, I am a Doctor.</span>
                        <br />
                        <span>I am specialist on cardiologist.</span>
                    </h1>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;