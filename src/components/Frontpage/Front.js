import React from 'react'
import './Front.css'
import { Link } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../../Firebase/Firebase'

function Front() {
    const handleGetStarted=()=>{

        onAuthStateChanged(auth, (user) => {
            if (user)
             {
                window.location='/home'
              const uid = user.uid;
            } else 
            {
                    window.location='/signup'
            }
          });

    }
    
  return (
    <div className='front-container'>
        <button onClick={handleGetStarted}>Get Started</button>
    </div>
  )
}

export default Front
