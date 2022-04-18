import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
const SignUp = () => {
    const refName = useRef('');
    const refEmail = useRef('');
    const refPassword = useRef('');
    const refConfirmPassword = useRef('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user,loading, createError] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    if(user){
        navigate('/');
    }
    if(createError){
        return setError(createError.message);
    }
    const handleSignUp = (event) =>{
        event.preventDefault();
        const name = refName.current.value;
        const email = refEmail.current.value;
        const password = refPassword.current.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className='form-container'>
            <form onSubmit={handleSignUp} className='form'>
                <input ref={refName} type="text" name="Name" placeholder='Name' id="" />
                <br />
                <input ref={refEmail} type="email" name="Email" placeholder='Email' id="" />
                <br />
                <input ref={refPassword} type="password" name="Password" placeholder='Password' id="" />
                <br />
                <input ref={refConfirmPassword} type="password" name="Confirm Password" placeholder='Confirm Password' id="" />
                <br />
                <div>
                    <input className='btn btn-primary text-white' type="submit" value="Sign Up" />
                </div>
                <p>Already have an account<Link to={'/login'}>Please login</Link></p>
                <div className='divider'>
                    <div className='line-style'></div>
                    <p>or</p>
                    <div className='line-style'></div>
                </div>
                <button className='btn btn-primary text-white w-100 d-block mt-4 mx-auto' onClick={() => signInWithGoogle()}>Google Sign In</button>
            </form>
        </div>
        </div>
    );
};

export default SignUp;