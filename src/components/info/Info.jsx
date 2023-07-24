import React from 'react'
import "./info.css"
const Info = ({ data }) => {

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  return (
    <div className='info-container'>
      {
        data.name ? (
          <div>
            <div className='location'>
              {data.name && <p>{data.name}, {data.sys.country}</p>}
            </div>
            <div className='date'>
              {data.name && <p>{formattedDate}</p>}
            </div>
            <div className='temperature-container'>
              <div className='temperature'>
                {data.main && data.main.temp && <p>{data.main.temp}</p>}
              </div>
              <div className='weather'>
                {data.weather && data.weather.length > 0 && <p>{data.weather[0].main}</p>}
              </div>
            </div>
          </div>)
          : (
            <p className='welcome-text'>Check the weather in any <br></br> city in the world!</p>
          )
      }
    </div>
  )
}

export default Info