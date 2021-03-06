import React, { useState } from 'react';
import './Login.css';
import Amazon from './Amazon.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
function Login() {
    const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn=e=>{
        e.preventDefault();
        //SOME LOGIN FIREBASE CODE
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
           
            if(auth){
                history.push('/')
            }
        }).catch(error=> alert(error.message))
    }

    const register=e=>{
        e.preventDefault();
        //SOME REGISTER FIREBASE CODE
        //email dan password dipassing dari state kita
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
           
            if(auth){
                history.push('/')
            }
        }).catch(error=> alert(error.message))
    }

    

    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login__logo"
                    src={Amazon}
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                    type="text"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                    type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}

                    />

                    <button 
                    type='submit'
                    className='login__signInButton'
                    onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By sign-In you are agree to the Amazon clone terms and conditions
                    of use and sale. please see our privacy and cookies notice and 
                    our interest-based ads notice.
                </p>

                <button 
                className='login__registerButton'
                onClick={register}
                >
                    Create your account
                </button>
            </div>

        </div>
    )
}

export default Login
