import React, { useState, useEffect } from 'react';
import './weather-icon.styles.scss';
import Clear from '../../assets/weather/clear.svg';
import Sunny from '../../assets/weather/sunny.svg';
import Rainbow from '../../assets/weather/rainbow.svg';
import PartlyCloudy from '../../assets/weather/partly-cloudy.svg';
import Cloudy from '../../assets/weather/cloudy.svg';
import Storm from '../../assets/weather/storm.svg';
import IsolatedThunderStorm from '../../assets/weather/isolated-thunderstorm.svg';
import Rain from '../../assets/weather/rain.svg';
import Sunrise from '../../assets/weather/sunrise.svg';
import Sunset from '../../assets/weather/sunset.svg';
import Umbrella from '../../assets/weather/umbrella.svg';

const WeatherIcon = ({ description }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    switch (description) {
      case 'Clear':
        return setIcon(Clear);
      case 'Mostly Clear':
        return setIcon(Clear);
      case 'Sunny':
        return setIcon(Sunny);
      case 'Mostly Sunny':
        return setIcon(PartlyCloudy);
      case 'Mostly Cloudy':
        return setIcon(Cloudy);
      case 'Partly Cloudy':
        return setIcon(Cloudy);
      case 'Cloudy':
        return setIcon(Cloudy);
      case 'Fair':
        return setIcon(Cloudy);
      case 'Showers':
        return setIcon(Rain);
      case 'PM Showers':
        return setIcon(Rain);
      case 'AM Showers':
        return setIcon(Rain);
      case 'Umbrella':
        return setIcon(Umbrella);
      case 'Few Showers':
        return setIcon(Rain);
      case 'Scattered Thunderstorms':
        return setIcon(Storm);
      case 'PM Thunderstorms':
        return setIcon(Storm);
      case 'Isolated Thunderstorms':
        return setIcon(IsolatedThunderStorm);
      case 'Sunrise':
        return setIcon(Sunrise);
      case 'Sunset':
        return setIcon(Sunset);
        
      default:
        console.log("No SVG for this description: ", description)
        break;
    }
  }, []);

  return (
    <img src={icon} alt={description} className="weather-icon" />
  )
}

export default WeatherIcon;