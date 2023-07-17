import React, { useState } from 'react'
import './Reset.css'
import { Link } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'

function Reset() {
    const handleReset=()=>{

        sendPasswordResetEmail(auth, reset)
        .then(() => {
        alert("Reset email send!")
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       
  });

    }
    const [reset,setReset]=useState("")
  return (
    <div className='reset-password'>
        <div className='reset-container'>
                <h1>Reset Password</h1>
                <input type='text' placeholder='Enter email' onChange={(event)=>{setReset(event.target.value)}}></input>
                <button onClick={handleReset} className='reset-btn'>Reset</button>
                <div className='remember'>
                <p><Link to='/signin' className='link-text'><span>Sign In &nbsp;</span></Link>  <span><Link to='/signup' className='link-text'>Sign Up</Link></span></p>

                </div>

                
            </div>
      
    </div>
  )
}

export default Reset
