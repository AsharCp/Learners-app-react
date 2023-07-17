import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className='search-input-bar-container'>
        <div>
            <input className='input-tag' type='text' placeholder='Enter your question' spellCheck='false'></input>
        </div>
      
    </div>
  )
}

export default Search
