import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'

function Signup() {
const handleSignup=()=>{

    createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        const user = userCredential.user;
        window.location='/home'
        
    })
    .catch((err)=>{
        const error=err.message
        alert("Email Already registered!")
    })
}

    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")
  return (
    <div>
        <div className='signup-container'>
        <div className='heading-paragraph'>
            <h1>Learners</h1>
        </div>
            <div className='sign-up-container'>
                <h1>Sign Up</h1>
                <input type='text' placeholder='Email' onChange={(event)=>{setEmail(event.target.value)}}></input>
                <input type='password' placeholder='Password' onChange={(event)=>{setPassword(event.target.value)}}></input>
                <button onClick={handleSignup} className='signup-btn'>Sign Up</button>
                <div className='remember'>
                <p>Already have an account?&nbsp;<span ><Link to='/signin' className='link-text'>Sign In</Link></span></p>
                </div>

                
            </div>
            
      
    </div>
      
    </div>
  )
}

export default Signup
