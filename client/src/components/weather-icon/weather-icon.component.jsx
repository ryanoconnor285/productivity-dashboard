import React from 'react';
import './weather-icon.styles.scss';
import Clear from '../../assets/weather/clear.svg';

const WeatherIcon = ({ description }) => {

  switch (description) {
    case 'clear':
      return Clear;
    default:
      break;
  }
  return (
    <img src={Clear} alt={description} className="weather-icon" />
  )
}

export default WeatherIcon;