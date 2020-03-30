const axios = require('axios');
const cheerio = require('cheerio');

// Method for scraping html

(async () => {
  process.stdout.write("Getting Hourly Weather Table \n")
  try {
    const res = await axios.get(`https://weather.com/weather/tenday/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f`);
    if (res.status === 200) {
      const $ = cheerio.load(res.data)
      const hourlyWeatherData = {
        headers: [],
        data: []
      }
      const hourlyWeatherTable = []
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
    }
  } catch (error) {
    console.error(error);
  }
})();