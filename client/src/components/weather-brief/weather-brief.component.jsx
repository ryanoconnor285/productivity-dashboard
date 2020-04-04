import React, { useState, useEffect } from 'react';
import cheerio from 'cheerio';
import axios from 'axios';

import './weather-brief.styles.scss';
import WeatherHourly from '../weather-hourly/weather-hourly.component';
import WeatherIcon from '../weather-icon/weather-icon.component';

const WeatherBrief = () => {
  const [weatherBrief, setWeatherBrief] = useState({
    temperature: '',
    description: '',
    feels: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`https://weather.com/weather/today/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f`);
        if (res.status === 200) {
          const $ = cheerio.load(res.data)
          const temperature = $('.today_nowcard-section').find('.today_nowcard-temp').text()
          const description = $('.today_nowcard-section').find('.today_nowcard-phrase').text()
          const feels = $('.today_nowcard-section').find('.today_nowcard-feels').text()
          setWeatherBrief({
            temperature: temperature,
            description: description,
            feels: feels
          })
        }
      } catch (error) {
        console.error(error);
      }
    })()
  }, [])

  return (
    <div>
      <div className="weather-brief">
        <h1>{weatherBrief.temperature} {weatherBrief.description} <WeatherIcon description={weatherBrief.description} /></h1> 
        <div><h4>{weatherBrief.feels}</h4></div>
      </div>
      <WeatherHourly />
    </div>
  )
};

export default WeatherBrief;