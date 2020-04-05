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
    hilo: '',
    sunrise: '',
    sunset: '',
    wind: ''
  });

  const getWeather = async () => {
    try {
      const res = await axios.get(`https://weather.com/weather/today/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f`);
      if (res.status === 200) {
        const $ = cheerio.load(res.data)
        const temperature = $('.today_nowcard-section').find('.today_nowcard-temp').text()
        const description = $('.today_nowcard-section').find('.today_nowcard-phrase').text()
        const feels = $('.today_nowcard-section').find('.today_nowcard-feels').text()
        const hilo = `H ${$('.daypart-0 .today-daypart-temp').find('span').text()} / L ${$('.daypart-1 .today-daypart-temp').find('span').text()}`
        const sunrise = $('#dp0-details-sunrise').text()
        const sunset = $('#dp0-details-sunset').text()
        setWeatherBrief({
          temperature: temperature,
          description: description,
          feels: feels,
          hilo: hilo,
          sunrise: sunrise,
          sunset: sunset,
        })
        console.log(weatherBrief);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWeather();
    const interval = setInterval(() => {
      getWeather();
    }, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="weather-brief">
      <div className="weather-headline">
        <div>{weatherBrief.description !== '' ? <WeatherIcon description={weatherBrief.description}/> : null}</div>
        <div><h1 className="current-weather">{weatherBrief.temperature} {weatherBrief.description}</h1><h4>{weatherBrief.feels}</h4></div>
        <div>
          <h4>{weatherBrief.hilo}</h4>
          <h4>Sunrise {weatherBrief.sunrise}</h4>
          <h4>Sunset {weatherBrief.sunset}</h4>
          <h4>{weatherBrief.wind}</h4>
        </div>
      </div>
      <WeatherHourly />
    </div>
  )
};

export default WeatherBrief;