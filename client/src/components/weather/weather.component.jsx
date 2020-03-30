import React, { useState } from 'react';
import cheerio from 'cheerio';
import axios from 'axios';

const Weather = () => {
  const [forecast, setForcast] = useState({headers: [], data: []});
  const [hourly, setHourly] = useState({headers: [], data: []});

  const getHourlyData = async () => {
    try {
      const res = await axios.get(`https://weather.com/weather/hourbyhour/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f`);
      if (res.status === 200) {
        const $ = cheerio.load(res.data)
        const hourlyWeatherData = {
          headers: [],
          data: []
        }
        $('.twc-table thead tr th').each((index, element) => {
          hourlyWeatherData.headers.push(($(element).text()))
        });
        $('.twc-table tbody tr').each((index, element) => {
          const obj = {};
          obj.time = `${$(element).find('.hourly-time').text().replace(`\n`, '') + " " + $(element).find('.hourly-date').text()}`
          obj.description = `${$(element).find('.description').text()}`
          obj.temp = `${$(element).find('.temp').text()}`
          obj.feels = `${$(element).find('.feels').text()}`
          obj.precip = `${$(element).find('.precip').text()}`
          obj.humidity = `${$(element).find('.humidity').text()}`
          obj.wind = `${$(element).find('.wind').text()}`
          hourlyWeatherData.data.push(obj);
        });
        console.table(hourlyWeatherData.headers)
        console.table(hourlyWeatherData.data)
        setHourly(hourlyWeatherData)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const getForecastData = async () => {
    try {
      const res = await axios.get(`https://weather.com/weather/tenday/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f`);
      if (res.status === 200) {
        const $ = cheerio.load(res.data)
        const hourlyWeatherData = {
          headers: [],
          data: []
        }
        $('.twc-table thead tr th').each((index, element) => {
          hourlyWeatherData.headers.push(($(element).text()))
        });
        $('.twc-table tbody tr').each((index, element) => {
          // hourlyWeatherTable.push(($(element).text()))
          const obj = {};
          obj.time = `${$(element).find('.date-time').text() + " " + $(element).find('.day-detail').text()}`
          obj.description = `${$(element).find('.description').text()}`
          obj.temp = `${$(element).find('.temp').text()}`
          obj.precip = `${$(element).find('.precip').text()}`
          obj.wind = `${$(element).find('.wind').text()}`
          obj.humidity = `${$(element).find('.humidity').text()}`
          hourlyWeatherData.data.push(obj);
        });
        console.table(hourlyWeatherData.headers)
        console.table(hourlyWeatherData.data)
        setForcast(hourlyWeatherData)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="weather">
      <h1>Weather</h1>
      <button onClick={getHourlyData}>Get Hourly</button>
      <button onClick={getForecastData}>Get Weather</button>
      <table>
        <thead>
          <tr>
            {hourly.headers.map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {hourly.data.map(item => 
            <tr key={item.time}>
              {Object.values(item).map((value, index) => <td key={`${item.time}-${value}-${index}`}>{value}</td>)}
            </tr>
          )}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            {forecast.headers.map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {forecast.data.map(item => 
            <tr key={item.time}>
              {Object.values(item).map((value, index) => <td key={`${item.time}-${value}-${index}`}>{value}</td>)}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};

export default Weather;