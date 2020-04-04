import React, { useState, useEffect } from 'react';
import cheerio from 'cheerio';
import axios from 'axios';

import './stocks.styles.scss';

const Stocks = () => {
  const [portfolio, setPortfolio] = useState([
    {
      "01. symbol": "",
      "02. open": "",
      "03. high": "",
      "04. low": "",
      "05. price": "",
      "06. volume": "",
      "07. latest trading day": "",
      "08. previous close": "",
      "09. change": "",
      "10. change percent": "",
    }])

  const myPortfolio = [
    {
      "symbol": "MSFT"
    },
    {
      "symbol": "AAPL",
    },
    {
      "symbol": "TSLA",
    },
    {
      "symbol": "AMD",
    },
    {
      "symbol": "SPCE",
    },
    // {
    //   "symbol": "UAA",
    // }
  ]

  const getPortfolioData = async (security) => {
    try {
      const res = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=` + security.symbol + `&apikey=` + process.env.REACT_APP_TRADING_DATA_TOKEN);
      if (res.status === 200 && res.data["Global Quote"] !== undefined) {
        const quote = res.data["Global Quote"]
        return quote;
      }
    } catch (error) {
      console.log(error);
    }
    return security;
  };

  const getFullPortfolio = async (myPortfolio) => {
    const fullPortfolio = portfolio.map(security => {
      return getPortfolioData(security);
    });
    const promise = await Promise.all(fullPortfolio);
    console.table(promise);
    return setPortfolio(promise);
  };

  useEffect(() => {
    getFullPortfolio(myPortfolio);
    const interval = setInterval(() => {
      getFullPortfolio(myPortfolio);
    }, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stocks">
      {/* <button onClick={() => getFullPortfolio(myPortfolio)}>Get Stocks</button> */}
      <table>
        <thead>
          <tr>
            <th>SYMBOL</th>
            <th>PRICE</th>
            <th>CHANGE</th>
            <th>OPEN</th>
            <th>HIGH</th>
            <th>LOW</th>
            {/* {Object.keys(portfolio[0]).map(item =>
              <th key={item}>{item.slice(4).toUpperCase()}</th>
            )} */}
          </tr>
        </thead>
        <tbody>
          {
            portfolio.map(security => (
              security["01. symbol"]
                ?
                <tr key={security["01. symbol"]}>
                  <td>{security["01. symbol"]}</td>
                  <td>{parseFloat(security["05. price"]).toFixed(2)}</td>
                  <td>{parseFloat(security["10. change percent"]).toFixed(2)} %</td>
                  <td>{parseFloat(security["02. open"]).toFixed(2)}</td>
                  <td>{parseFloat(security["03. high"]).toFixed(2)}</td>
                  <td>{parseFloat(security["04. low"]).toFixed(2)}</td>
                  {/* {Object.values(security).map(item => (
                  item ? <td key={security.symbol + item}>{item}</td> : null
                ))} */}
                </tr>
                :
                null
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

export default Stocks;