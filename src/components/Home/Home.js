import React from 'react'
import './Home.css'

function Home() {
  const handleAskPage=()=>{
    window.location='/ask-page'
  }

  const handleSolvePage=()=>{
    window.location='/solve-page'
  }


  return (
    <div className='Home-container'>
      <h1>Find Solutions For Your Problems!</h1>
      <div className='button-container'>
      <div className='ask-question-btn'>
            <button onClick={handleAskPage}>Ask<br/>Question</button>
        </div>
        <img src='..\book.jpg' className='book_image'></img>
        <div className='post-question-btn'>
            <button onClick={handleSolvePage}>Solve<br/>Question</button>
        </div>
        
      </div>
      
        
        
      
    </div>
  )
}

export default Home
