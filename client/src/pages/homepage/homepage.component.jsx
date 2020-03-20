import React from 'react';
import './homepage.styles.scss';

import Stocks from '../../components/stocks/stocks.component';
import Weather from '../../components/weather/weather.component';

const HomePage = () => {
  return (
    <div className="homepage">
      <h2>Home Page</h2>
      <Stocks />
      <Weather />
    </div>
  )
};

export default HomePage;