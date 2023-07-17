import React from 'react'
import './Header.css'
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';

function Header() {
  const handleSignout=()=>{
          signOut(auth).then(() => {
            window.location='/signup'
          // Sign-out successful.
          }).catch((error) => {
          // An error happened.
          });
  }
  return (
    <header className='header-container'>
        <h1 className='heading-name'>Learners</h1>
        <div className='nav-container'>
        <ul className='navbar-nav'>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
        </ul>
        <button onClick={handleSignout} className='logout-btn'>Log out</button>

        </div>
        

    </header>
  )
}

export default Header
