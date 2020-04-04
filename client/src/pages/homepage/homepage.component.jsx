import React from 'react';
import './homepage.styles.scss';

import Clock from '../../components/clock/clock.component';
import Stocks from '../../components/stocks/stocks.component';
import WeatherBrief from '../../components/weather-brief/weather-brief.component';

const HomePage = () => {
  return (
    <section className="basic-grid">
      <div className="card"><Clock /></div>
      <div className="card"><WeatherBrief/></div>
      <div className="card"><Stocks/></div>
    </section>
  )
};

export default HomePage;