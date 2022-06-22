import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CoinsContext = createContext();

const CryptoApiProvider = ({ children }) => {
    const [coins, setCoins] = useState([]);

    const [allcoins, setAllcoins] = useState('10');

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${allcoins}&page=1&sparkline=false`,
            );

            const data = await response.data;
            // console.log(data)
            setCoins(data);
        };
        getData();
    }, [allcoins]);

    const cost = 10000;
    // console.log(coins)

    if (coins[0]) {
        const profit = coins[0].current_price - cost;
    }
    // console.log(coins)
    return (
        <CoinsContext.Provider value={coins}>{children}</CoinsContext.Provider>
    );
};

export { CoinsContext, CryptoApiProvider };
