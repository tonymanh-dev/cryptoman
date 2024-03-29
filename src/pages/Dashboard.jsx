import React, { useContext } from 'react';
import { AppContext } from '../services/AppContext';

import { Box, Typography } from '@mui/material';

import Statistics from '../components/Dashboard/Statistics';
import PortfolioStats from '../components/Dashboard/PortfolioStats';
import Market from '../components/Dashboard/Market';
import Loader from '../components/Loader';

const Dashboard = () => {
    const { portfolio } = useContext(AppContext);
    if (!portfolio) return <Loader />;

    const getStats = (value = portfolio) => {
        const totalProfit = value
            .map((coin) => coin.profit)
            .reduce((acc, current) => acc + current, 0)
            .toFixed(2);

        const balance = value
            .map((coin) => coin.totalValue)
            .reduce((acc, current) => acc + current, 0)
            .toFixed(2);

        return {
            totalProfit,
            balance,
        };
    };

    return (
        <Box flex={1} sx={{ mt: '10px', mb: '100px' }}>
            <Typography variant="h6" sx={{ mb: '14px' }}>
                Dashboard
            </Typography>
            <PortfolioStats portfolio={portfolio} getStats={getStats} />
            <Statistics portfolio={portfolio} getStats={getStats} />
        </Box>
    );
};

export default Dashboard;
