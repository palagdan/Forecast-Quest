import React from 'react'
import './input.css'
const Input = ({city , setCity, searchWeather}) => {


  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        searchWeather(e.target.value);
      }
    };

  return (
    <div className='search-box'>
        <input type="text" 
        required
        className='search-bar'
        value={city}
        placeholder='search...'
        onKeyDown={handleKeyDown}
        onChange={(e) => setCity(e.target.value)}/>
    </div>
  )
}

export default Input