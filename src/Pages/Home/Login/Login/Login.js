import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './Login.css';
const Login = () => {
    const refEmail = useRef('');
    const refPassword = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';
    if(user){
        navigate(from, {replace: true});
    }
    const handleSignIn = (event) =>{
        event.preventDefault();
        const email = refEmail.current.value;
        const password = refPassword.current.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSignIn} className='form'>
                <input ref={refEmail} type="email" name="Email" placeholder='Email' id="" />
                <br />
                <input ref={refPassword} type="password" name="Password" placeholder='Password' id="" />
                <br />
                <div>
                    <input type="submit" value="Login" />
                </div>
                <p>New To website<Link to={'/signup'}>Create an account</Link></p>
                <div className='divider'>
                    <div className='line-style'></div>
                    <p>or</p>
                    <div className='line-style'></div>
                </div>
            </form>
        </div>
    );
};

export default Login;