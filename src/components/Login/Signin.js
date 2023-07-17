import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase'

function Signin() {
const handleSignin=()=>{
    signInWithEmailAndPassword(auth,loginEmail,loginPassword)
    .then((userCredential)=>{
        const user=userCredential;
        window.location='/home'
    })
    .catch((err)=>{
        const error=err.message;
        alert("Invalid Email/Password")
    })

}

    const [loginEmail,setLoginEmail]=useState("")
    const [loginPassword,setLoginPassword]=useState("")
    const [user,setUser]=useState("")

  return (
    <div className='main-container'>
        <div className='heading-paragraph'>
            <h1>Learners</h1>
        </div>
            <div className='sign-in-container'>
                <h1>Sign In</h1>
                <input type='text' placeholder='Email' onChange={(event)=>{setLoginEmail(event.target.value)}}></input>
                <input type='text' placeholder='Password' onChange={(event)=>{setLoginPassword(event.target.value)}}></input>
                <button onClick={handleSignin} className='signin-btn'>Sign In</button>
                <div className='remember'>
                <p>Don't have an account?&nbsp;<span><Link to='/signup' className='link-text'>Sign Up</Link></span></p>
                <p>Forgot Password?&nbsp;<span ><Link to='/reset' className='link-text'>Reset here</Link></span></p>
                </div>

                
            </div>
            
      
    </div>

  )
}

export default Signin
