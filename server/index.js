const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36');

    await page.goto('https://weather.com/weather/today/l/9daa87422b7576dfacc1662c3003e3d12500c4f33c57ab7fd9c53196db7c0b0f');
    await page.waitForSelector('.today_nowcard-main');

    const currentTemp = await page.$eval('.today_nowcard-temp', span => span.innerText);
    const currentPhrase = await page.$eval('.today_nowcard-phrase', div => div.innerText);
    const currentFeelsLike = await page.$eval('.today_nowcard-temp', span => span.innerText);
    const currentHighLow = await page.$eval('.deg-hilo-nowcard', span => span.innerText);
    const currentWeather = await page.$eval('.today_nowcard-sidecar', td => td.innerText);
    console.log(currentWeather)
    console.log(`Current Temp: ${currentTemp}`);
    console.log(`${currentPhrase}`);
    console.log(`Feels like: ${currentFeelsLike}`);
    console.log(`High-Low: ${currentHighLow}`);
    await browser.close();

  } catch (error) {
    console.log(error);
  }
})();