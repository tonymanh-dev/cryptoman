import React, { useContext, useEffect } from 'react';
import { AppContext } from '../services/AppContext';

import { Box, Typography, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Statistics from '../components/Dashboard/Statistics';
import PortfolioStats from '../components/Dashboard/PortfolioStats';
import Market from '../components/Dashboard/Market';
import Loader from '../components/Loader';
import { getBreadcrumbs } from '../components/CardStyled';

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
        <Box flex={1} sx={{ mt: '10px' }}>
            <Typography variant="h6" sx={{ mb: '14px' }}>
                Dashboard
            </Typography>
            <PortfolioStats portfolio={portfolio} getStats={getStats} />
            <Statistics portfolio={portfolio} getStats={getStats} />
            <Market />
        </Box>
    );
};

export default Dashboard;
