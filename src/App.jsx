import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/input/Input';
import Box from './Box';
import axios from 'axios';
import Info from './components/info/info';
function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState({});
  const [backgroundClass, setBackgroundClass] = useState("warm");


  const getBackgroundClass = (temp) => {
    if(temp > 20){
      return 'warm';
    }else{
      return 'cold'
    }
  }

  useEffect((() => {
      if(data && data.main && data.main.temp){
        const tempClass = getBackgroundClass(data.main.temp);
        setBackgroundClass(tempClass);
      }
  }), [data]);



  const searchWeather = async (city) => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a258df472fc7a46c7f6f7338be30b136&units=metric`;
      const response = await axios.get(URL);
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${backgroundClass}`} >
      <main className={`main`}>
          <Input city={city} setCity={setCity} searchWeather={searchWeather} />
          <Info data={data}/>
      </main>
    </div>

  );
}

export default App;
