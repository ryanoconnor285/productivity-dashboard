const puppeteer = require('puppeteer');
const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  // try {
  //   const browser = await puppeteer.launch({ headless: true });
  //   const page = await browser.newPage();
  //   page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36');

  //   await page.goto('https://weather.com/weather/hourbyhour/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f');
  //   await page.waitForSelector('.twc-table');

  //   const html = await page.content('.twc-table');
  //   const $ = cheerio.load(html)
  //   console.log(currentTemp);
  //   await browser.close();

  // } catch (error) {
  //   console.log(error);
  // }
  try {
    const res = await axios.get(`https://weather.com/weather/hourbyhour/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f`);
    if (res.status === 200) {
      const $ = cheerio.load(res.data)
      const trs = $('.twc-table').find('tr')
      for ( tr of trs ) {
        console.log(tr)
      }
    }
  } catch (error) {
    console.error(error);
  }
})()