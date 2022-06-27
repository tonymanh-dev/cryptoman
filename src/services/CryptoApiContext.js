import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CoinsContext = createContext();

const CryptoApiProvider = ({ children }) => {
    const [coins, setCoins] = useState([]);
    const [allcoins, setAllcoins] = useState('10');
    const [drawer, setDrawer] = useState(false);
    const [mode, setMode] = useState('light');

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${allcoins}&page=1&sparkline=false`,
            );

            const data = await response.data;
            setCoins(data);
        };
        getData();
    }, [allcoins]);

    return (
        <CoinsContext.Provider
            value={{
                coins,
                drawer,
                setDrawer,
                mode,
                setMode,
            }}
        >
            {children}
        </CoinsContext.Provider>
    );
};

export { CoinsContext, CryptoApiProvider };
