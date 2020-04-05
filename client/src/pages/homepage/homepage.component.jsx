import React from 'react';
import './homepage.styles.scss';

import City from '../../assets/background/city-sunshards.jpg';
import Milkyway from '../../assets/background/milkyway-night.jpg';

import Clock from '../../components/clock/clock.component';
import Stocks from '../../components/stocks/stocks.component';
import WeatherBrief from '../../components/weather-brief/weather-brief.component';
import CalendarMonthly from '../../components/calendar-monthly/calendar-monthly.component';

const HomePage = () => {
  return (
    <div>
      <img src={Milkyway} id="background-image"/>
      <section className="basic-grid">
        <div className="card"><Clock /></div>
        <div className="card"><WeatherBrief /></div>
        <div className="card"><Stocks /></div>
        <div className="card"><CalendarMonthly /></div>
      </section>
    </div>
  )
};

export default HomePage;