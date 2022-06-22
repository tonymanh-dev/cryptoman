import React from 'react';
import millify from 'millify';
import { useGetMarketStatsQuery } from '../../services/cryptoApi';

import Loader from '../Loader';
import { numberWithCommas } from '../../pages/Market';

import { Box, Grid, Typography, Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f3f4f6',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '10px',
    boxShadow: 'none',
}));

const DomStats = () => {
    const { data } = useGetMarketStatsQuery();

    if (!data) return <Loader />;

    const btcDominance = data.data.market_cap_percentage.btc;
    const totalCoins = data.data.active_cryptocurrencies;

    return (
        <>
            <Grid item xs={12} sm={4} md={3}>
                <Item>
                    <Typography
                        variant="subtitle1"
                        alignItems="center"
                        fontSize="16px"
                        fontWeight="400"
                    >
                        Bitcoin Dominance
                    </Typography>
                    <Typography
                        variant="body1"
                        alignItems="center"
                        fontSize="20px"
                        fontWeight="500"
                        mt="10px"
                    >
                        {btcDominance && btcDominance.toFixed(2)}%
                    </Typography>
                </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Item>
                    <Typography
                        variant="subtitle1"
                        alignItems="center"
                        fontSize="16px"
                        fontWeight="400"
                    >
                        # Coin active
                    </Typography>
                    <Typography
                        variant="body1"
                        alignItems="center"
                        fontSize="20px"
                        fontWeight="500"
                        mt="10px"
                    >
                        {totalCoins && numberWithCommas(totalCoins)}
                    </Typography>
                </Item>
            </Grid>
        </>
    );
};

export default DomStats;
