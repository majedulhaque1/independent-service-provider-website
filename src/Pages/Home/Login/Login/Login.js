import { sendEmailVerification } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './Login.css';
const Login = () => {
    const refEmail = useRef('');
    const refPassword = useRef('');
    const [errorMessege, setErrorMessege] = useState('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth, sendEmailVerification);
    const [signInWithGoogle, googleUser, googlLoading, GoogleSignInError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';
    if(user){
        navigate(from, {replace: true});
    }
    if(error || GoogleSignInError){
        return setErrorMessege(error.massege)
    }
    const handleSignIn = (event) =>{
        event.preventDefault();
        const email = refEmail.current.value;
        const password = refPassword.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const handleResetPass = () =>{
        sendPasswordResetEmail();
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
                <p>{errorMessege}</p>
                <p>New To website<Link to={'/signup'}>Create an account</Link></p>
                <button onClick={handleResetPass}>Reset password</button>
                <div className='divider'>
                    <div className='line-style'></div>
                    <p>or</p>
                    <div className='line-style'></div>
                </div>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </form>
        </div>
    );
};

export default Login;