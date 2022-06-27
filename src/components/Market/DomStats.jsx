import React from 'react';
import millify from 'millify';
import { useGetMarketStatsQuery } from '../../services/cryptoApi';

import Loader from '../Loader';
import { numberWithCommas } from '../../pages/Market';

import { Box, Grid } from '@mui/material';
import { Item, Heading, StatsBody } from './CryptoStats';

const DomStats = () => {
    const { data } = useGetMarketStatsQuery();

    if (!data) return <Loader />;

    const btcDominance = data.data.market_cap_percentage.btc;
    const totalCoins = data.data.active_cryptocurrencies;

    return (
        <>
            <Grid item xs={12} sm={4} md={3}>
                <Item>
                    <Heading>Bitcoin Dominance</Heading>
                    <StatsBody>
                        {btcDominance && btcDominance.toFixed(2)}%
                    </StatsBody>
                </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Item>
                    <Heading># Coin active</Heading>
                    <StatsBody>
                        {totalCoins && numberWithCommas(totalCoins)}
                    </StatsBody>
                </Item>
            </Grid>
        </>
    );
};

export default DomStats;
