import React from 'react';

const SignUp = () => {
    return (
        <div>
            <div className='form-container'>
            <form onSubmit={ } className='form'>
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
                <p><Link to={'/signup'}></Link></p>
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