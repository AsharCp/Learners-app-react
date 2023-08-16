import React, { useEffect,useState } from 'react'
import './Header.css'
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';
import {  onAuthStateChanged } from "firebase/auth";

function Header() {

  const [islogged, setIslogged] = useState()


  const handleSignout=()=>{
          signOut(auth).then(() => {
            window.location='/signup'
          // Sign-out successful.
          }).catch((error) => {
          // An error happened.
          });
  }
  
  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user)
       {
        setIslogged(true)
         
      } else 
      {
        setIslogged(false)
      }
    });
  
    return () => {
      
    }
  }, [])
  

  return (
    <header className='header-container'>
        <h1 className='heading-name'>Learners</h1>
        <div className='nav-container'>
        <ul className='navbar-nav'>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
        </ul>
        {islogged?
        <button onClick={handleSignout} className='logout-btn'>Log out</button>:
        <button onClick={handleSignout} className='logout-btn-not'>Log out</button>
        }
        

        </div>
        

    </header>
  )
}

export default Header
