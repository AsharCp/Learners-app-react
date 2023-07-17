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
        <div className='ask-question-btn'>
            <button onClick={handleAskPage}>Ask<br/>Question</button>

        </div>
        <div className='post-question-btn'>
        <button onClick={handleSolvePage}>Solve<br/>Question</button>

        </div>
        <div className='search-question-btn'>
        <button>Search<br/>Answer</button>

        </div>
      
    </div>
  )
}

export default Home
