import React, { createContext, useState, useEffect } from 'react';
import { useGetCryptosQuery } from './cryptoApi';
// import { myPortfolio } from '../data/dummy';
import { portfolioCoins } from '../data/cryptoApi';
import axios from 'axios';
import Loader from '../components/Loader';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [drawer, setDrawer] = useState(false);
    const [mode, setMode] = useState('light');
    const [coinForm, setCoinForm] = useState([]);
    const [portfolio, setPortfolio] = useState();

    console.log(portfolio);
    // console.log(coinForm);

    const fetchMarketChart = async () => {
        const { data } = await axios.get(portfolioCoins(20));
        // console.log(data);

        // Create initial value, just dev environment
        const myPortfolio = data
            .filter((coin) => {
                const name = coin.symbol;
                return (
                    name === 'btc' ||
                    name === 'eth' ||
                    name === 'bnb' ||
                    name === 'dot' ||
                    name === 'usdc'
                );
            })
            .map((coin) => {
                // Array form
                // To add new coin value to portfolio
                return {
                    id: coin.id,
                    name: coin.name,
                    symbol: coin.symbol,
                    image: coin.image,
                    currentPrice: coin.current_price,
                    quantity: [],
                    spents: [],
                };
            })
            .map((coin) => {
                // Update value in portfolio
                if (coin.symbol === 'btc') {
                    coin.quantity.push(1.63);
                    coin.spents.push(20000, 20000);

                    return {
                        ...coin,
                    };
                }
                if (coin.symbol === 'eth') {
                    coin.quantity.push(7);
                    coin.spents.push(4700);

                    return {
                        ...coin,
                    };
                }
                if (coin.symbol === 'dot') {
                    coin.quantity.push(2000);
                    coin.spents.push(12000);
                    return {
                        ...coin,
                    };
                }
                if (coin.symbol === 'usdc') {
                    coin.quantity.push(3000, 200);
                    coin.spents.push(10200);
                    return {
                        ...coin,
                    };
                }
                if (coin.symbol === 'bnb') {
                    coin.quantity.push(30);
                    coin.spents.push(900);
                    return {
                        ...coin,
                    };
                }

                return coin;
            });

        console.log(myPortfolio);

        const portfolioData = myPortfolio.map((coin) => {
            // Calculate value
            const quantity = coin.quantity.reduce((acc, cur) => acc + cur, 0);
            const totalSpent = coin.spents.reduce((acc, cur) => acc + cur, 0);
            const totalValue = quantity * coin.currentPrice;

            const averagePrice = totalSpent / quantity;

            // Return final value to set to portfolio array
            return {
                ...coin,
                quantity: quantity,
                spents: totalSpent,
                averagePrice: averagePrice,
                profit: totalValue - totalSpent,
                totalValue: totalValue,
                time: '',
            };
        });
        setPortfolio(portfolioData);
    };

    useEffect(() => {
        fetchMarketChart();
        // const portfolioData = coinForm.map((coin) => {
        //     // Calculate value
        //     const quantity = coin.quantity.reduce((acc, cur) => acc + cur, 0);
        //     const totalSpent = coin.spents.reduce((acc, cur) => acc + cur, 0);
        //     const totalValue = quantity * coin.currentPrice;

        //     const averagePrice = totalSpent / quantity;

        //     // Return final value to set to portfolio array
        //     return {
        //         ...coin,
        //         quantity: quantity,
        //         spents: totalSpent,
        //         averagePrice: averagePrice,
        //         profit: totalValue - totalSpent,
        //         totalValue: totalValue,
        //         time: '',
        //     };
        // });
        // setPortfolio(portfolioData);
    }, []);

    return (
        <AppContext.Provider
            value={{
                portfolio,
                drawer,
                setDrawer,
                mode,
                setMode,
                coinForm,
                setCoinForm,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
