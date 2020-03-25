import React from 'react';
import './homepage.styles.scss';

import Clock from '../../components/clock/clock.component';
import Stocks from '../../components/stocks/stocks.component';
import Weather from '../../components/weather/weather.component';

const HomePage = () => {
  return (
    <div className="homepage">
      <Clock />
      <Stocks />
      <Weather />
    </div>
  )
};

export default HomePage;