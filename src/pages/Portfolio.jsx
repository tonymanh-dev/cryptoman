import React from 'react';

import { Box } from '@mui/material';
import Stats from '../components/Portfolio/Stats';
import Coins from '../components/Portfolio/Coins';

const Portfolio = () => {
    return (
        <Box mt="60px" position="relative" flex={1}>
            <Stats />

            <Coins />
        </Box>
    );
};

export default Portfolio;
