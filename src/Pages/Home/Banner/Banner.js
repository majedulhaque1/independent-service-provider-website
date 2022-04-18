import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-info'>
                <div>
                    <h1 className='text-white'>
                        <span>Hello, My Name is kevin.</span>
                        <br />
                        <span>I am Doctor.</span>
                    </h1>
                    <button className='btn btn-light mt-4 text-primary py-2 px-3'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;