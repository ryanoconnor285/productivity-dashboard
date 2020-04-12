import React from 'react';
import './homepage.styles.scss';

// import BlueBeach from '../../assets/background/blue-beach.jpg';
import BeachVideo from '../../assets/background/video/beach-video.mp4';

import Clock from '../../components/clock/clock.component';
import Stocks from '../../components/stocks/stocks.component';
import WeatherBrief from '../../components/weather-brief/weather-brief.component';
import CalendarMonthly from '../../components/calendar-monthly/calendar-monthly.component';

const HomePage = () => {
  return (
    <div>
      <div className="fullscreen-image-wrapper">
        {/* <img src={BlueBeach} alt="background" id="background-image"/> */}
      </div>
      <div className="fullscreen-video-wrapper">
        <video src={BeachVideo} autoPlay={true} loop={true} id="background-video"></video>
      </div>
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