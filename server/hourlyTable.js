const axios = require('axios')
const cheerio = require('cheerio')

// Method for scraping html from loinc.org
// gets html for each loinc code and returns the value for part description 
// example:
// Given a loinc code: 2132-9
// This specific loinc code is for a lab test for a 'part' named Cobalamins'
// This function should scrape a description of that part
// part_desc: 'Cobalamins, or reduced levels of vitamin B12 may indicate the presence...'
(async () => {
  process.stdout.write("Getting Hourly Weather Table")
  try {
    const res = await axios.get(`https://weather.com/weather/hourbyhour/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f`);
    if (res.status === 200) {
      const $ = cheerio.load(res.data)
      const hourlyWeatherTable = $('.twc-table').text()
      console.log(hourlyWeatherTable)
    }
  } catch (error) {
    console.error(error);
  }
})();