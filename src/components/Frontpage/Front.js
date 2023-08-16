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
    <div>
      <div className='main-container'>
        <div className='text-container'>
        <h1 className='text'>Learners<br></br>A Great Place<br></br>to Learn</h1>
        <button className='front-container-button' onClick={handleGetStarted}>Get Started</button>
      </div>
        
        <img src='..\student.png' className='image'></img>
        
      

      </div>
      



      
    </div>
    
  )
}

export default Front
