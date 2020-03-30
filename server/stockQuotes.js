const axios = require('axios');
const cheerio = require('cheerio');

// Method for scraping html
(async () => {
  process.stdout.write("Getting Stock Quotes \n")
  try {
    const res = await axios.get(`https://www.marketwatch.com/investing/stock/MSFT`);
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
      console.log(hourlyWeatherData);
    }
  } catch (error) {
    console.error(error);
  }
})();