import React from 'react';

import { Box } from '@mui/material';
import Overview from '../components/Portfolio/Overview';
import Coins from '../components/Portfolio/Coins';
import Coins1 from '../components/Portfolio/Coins1';

const Portfolio = () => {
    return (
        <Box mt="60px" position="relative" flex={1}>
            <Overview />

            <Coins />
        </Box>
    );
};

export default Portfolio;
