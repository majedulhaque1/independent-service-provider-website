import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const refName = useRef('');
    const refEmail = useRef('');
    const refPassword = useRef('');
    const refConfirmPassword = useRef('');
    return (
        <div>
            <div className='form-container'>
            <form className='form'>
                <input ref={refName} type="text" name="Name" placeholder='Name' id="" />
                <br />
                <input ref={refEmail} type="email" name="Email" placeholder='Email' id="" />
                <br />
                <input ref={refPassword} type="password" name="Password" placeholder='Password' id="" />
                <br />
                <input ref={refConfirmPassword} type="password" name="Confirm Password" placeholder='Confirm Password' id="" />
                <br />
                <div>
                    <input type="submit" value="Sign Up" />
                </div>
                <p>Already have an account<Link to={'/login'}>Please login</Link></p>
                <div className='divider'>
                    <div className='line-style'></div>
                    <p>or</p>
                    <div className='line-style'></div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default SignUp;