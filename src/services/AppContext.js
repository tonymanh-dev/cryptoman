import React, { createContext, useState, useEffect } from 'react';

import { portfolioCoins } from '../utils/cryptoApiLinks';
import { coinTrackInitial } from '../utils/dummy';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [drawer, setDrawer] = useState(false);
    const [mode, setMode] = useState('dark');
    const [sidebar, setSidebar] = useState(false);
    const [screenSize, setScreenSize] = useState(undefined);
    const [modalTransaction, setModalTransaction] = useState(false);
    const [coinTrack, setCoinTrack] = useState(coinTrackInitial);

    const [coinForm, setCoinForm] = useState([]);
    const [portfolio, setPortfolio] = useState([]);

    //Handle data to Portfolio
    useEffect(() => {
        const portfolioData = coinForm.map((coin) => {
            // Calculate value
            const quantity = coin.quantity.reduce((acc, cur) => acc + cur, 0);
            const totalCost = coin.cost.reduce((acc, cur) => acc + cur, 0);
            const totalProceeds = coin.proceeds.reduce(
                (acc, cur) => acc + cur,
                0,
            );
            const totalValue = quantity * coin.currentPrice;
            const totalProfit =
                quantity * coin.currentPrice + totalProceeds - totalCost;
            const profitPercentage = (totalProfit / totalCost) * 100;

            const averagePrice = (totalCost - totalProceeds) / quantity;

            // Return value and set into portfolio data
            return {
                ...coin,
                quantity: quantity,
                totalCost: totalCost,
                averagePrice:
                    averagePrice === -Infinity
                        ? 0
                        : Number(averagePrice.toFixed(2)),
                profit: Number(totalProfit.toFixed(2)),
                totalValue: Number(totalValue.toFixed(2)),
                profitPercentage: Number(profitPercentage.toFixed(2)),
            };
        });

        setPortfolio(portfolioData);
    }, [coinForm]);

    // Create dummy portfolio data from API
    const fetchMarketChart = async () => {
        const { data } = await axios.get(portfolioCoins(20));

        // Create initial dummy data
        const dummyPortfolio = data
            .filter((coin) => {
                const name = coin.symbol;
                return name === 'btc' || name === 'eth' || name === 'dot';
            })
            .map((coin) => {
                // Array form
                // Add new coin value to portfolio
                return {
                    id: coin.id,
                    name: coin.name,
                    symbol: coin.symbol,
                    image: coin.image,
                    currentPrice: coin.current_price,
                    //
                    quantity: [],
                    cost: [],
                    action: [],
                    price: [],
                    proceeds: [],
                    profit: [],
                    time: [],
                };
            })
            .map((coin) => {
                // Update dummy value in portfolio
                if (coin.symbol === 'btc') {
                    coin.quantity.push(1.63, 2);
                    coin.cost.push(32600, 30000);
                    coin.action.push('BUY', 'BUY');
                    coin.price.push(20000, 15000);
                    coin.proceeds.push(0, 0);
                    coin.profit.push();
                    coin.time.push(
                        'Fri Jul 15 2022 23:47:00',
                        'Mon Jul 18 2022 20:00',
                    );
                    return {
                        ...coin,
                    };
                }
                if (coin.symbol === 'eth') {
                    coin.quantity.push(7);
                    coin.cost.push(7000);
                    coin.action.push('BUY');
                    coin.price.push(1000);
                    coin.proceeds.push(0);
                    coin.profit.push();
                    coin.time.push('Sun Jul 17 2022 20:00');

                    return {
                        ...coin,
                    };
                }
                if (coin.symbol === 'dot') {
                    coin.quantity.push(2000);
                    coin.cost.push(12000);
                    coin.action.push('BUY', 'BUY');
                    coin.price.push(6);
                    coin.proceeds.push(0);
                    coin.profit.push();
                    coin.time.push('Tus Jul 12 2022 09:00');
                    return {
                        ...coin,
                    };
                }

                return coin;
            });
        setCoinForm(dummyPortfolio);
    };
    useEffect(() => {
        fetchMarketChart();
    }, []);

    return (
        <AppContext.Provider
            value={{
                drawer,
                setDrawer,
                mode,
                setMode,
                coinForm,
                setCoinForm,
                portfolio,
                setPortfolio,
                coinTrack,
                setCoinTrack,
                modalTransaction,
                setModalTransaction,
                screenSize,
                setScreenSize,
                sidebar,
                setSidebar,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
