import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [forecast, getForcast] = useState([]);

  const getForecastData = () => {
    try {
      const res = axios.get(`https://samples.openweathermap.org/data/2.5/forecast?id=4464368&appid=b6907d289e10d714a6e88b30761fae22`)
      if (res.status === 200) {
        console.log(res)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="weather">
      <h1>Weather</h1>
      <button onClick={()=>getForecastData()}>Get Weather</button>
    </div>
  )
};

export default Weather;