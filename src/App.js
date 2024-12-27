import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const analysis = [
    { symbol: "LTCUSDT", inactive: true },
    { symbol: "LTCUSDT", inactive: false },
    { symbol: "LTCUSDT", inactive: true },
    { symbol: "BTCUSDT", inactive: false },
    { symbol: "LTCUSDT", inactive: true },
    { symbol: "ETHUSDT", inactive: false },
  ];

  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const fetchKlines = async (symbol) => {
    const API_URL = `https://api.binance.com/api/v3/klines`;

    try {
      const response = await axios.get(API_URL, {
        params: {
          symbol: symbol,
          interval: '1m',
          limit: 10,
        },
      });

      // Update state with fetched data grouped by symbol
      setData((prevData) => ({
        ...prevData,
        [symbol]: response.data,
      }));
    } catch (err) {
      setError(`Muammo: ${err.message}`);
    }
  };

  useEffect(() => {
    // Filter analysis to get only active (inactive: false) symbols
    const activeSymbols = analysis.filter((item) => !item.inactive).map((item) => item.symbol);

    // Fetch data for each active symbol
    activeSymbols.forEach((symbol) => fetchKlines(symbol));
  }, []);


  return (
    <div>
      <h1>Binance Data</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* DataDisplay komponentiga barcha ma'lumotlarni uzatish */}
    </div>
  );
};

export default App;
