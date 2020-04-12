import React, { useState, useEffect } from 'react';
import cheerio from 'cheerio';
import axios from 'axios';

import './weather-hourly.styles.scss';
// import WeatherIcon from '../weather-icon/weather-icon.component';

const WeatherHourly = () => {
  const [hourly, setHourly] = useState({ headers: [], data: [] });

  const getWeather = async () => {
      try {
        const res = await axios.get(`https://weather.com/weather/hourbyhour/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f`);
        if (res.status === 200) {
          const $ = cheerio.load(res.data)
          const hourlyWeatherData = {
            headers: [],
            data: []
          }
          $('.twc-table thead tr th').each(element => {
            hourlyWeatherData.headers.push(($(element).text()))
          });
          $('.twc-table tbody tr').each((index, element) => {
            if ( index < 6 ) {
              const obj = {};
              obj.time = `${$(element).find('.hourly-time').text().replace(`\n`, '')}`
              obj.description = `${$(element).find('.description').text()}`
              obj.temp = `${$(element).find('.temp').text()}`
              obj.precip = `${$(element).find('.precip').text()}`
              hourlyWeatherData.data.push(obj);
            }
          });
          console.table(hourlyWeatherData.headers)
          console.table(hourlyWeatherData.data)
          setHourly(hourlyWeatherData)
        }
      } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    getWeather();
    const interval = setInterval(() => {
      getWeather();
    }, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="weather-hourly">
      {hourly.data.map(item =>
        <div className="hour" key={item.time}>
            <h3>{item.time.replace(`:00 `, '')}</h3>
            <h3>{item.description}</h3>
            {/* <h3>{item.description !== '' ? <WeatherIcon description={item.description}/> : null}</h3> */}
            <h3>{item.temp}</h3>
            <h3>{item.precip}</h3>
            {/* <h3>{item.precip} {<WeatherIcon description={"Umbrella"}/>}</h3> */}
        </div>
      )}
    </div>
  )
};

export default WeatherHourly;