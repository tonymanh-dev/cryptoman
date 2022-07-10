import React, { useContext } from 'react';
import { AppContext } from '../../services/AppContext';
import { numberWithCommas } from '../../pages/Market';

import { Box, Paper, Grid, Typography } from '@mui/material';
import {
    CardStyled,
    CardContentStyled,
    Subtitle,
    NumberText,
} from '../CardStyled';
import Loader from '../Loader';

const Stats = () => {
    const { portfolio } = useContext(AppContext);
    if (!portfolio) return <Loader />;

    // Get portfolio stats value
    const totalProfit = portfolio
        .map((coin) => coin.profit)
        .reduce((prevProfit, currentProfit) => prevProfit + currentProfit, 0);

    const balance = portfolio
        .map((coin) => coin.totalValue)
        .reduce((prevCoin, currentCoin) => prevCoin + currentCoin, 0);

    const stableCoin = portfolio
        .filter((coin) => {
            return coin.symbol === 'usdc' || coin.symbol === 'usdt';
        })
        .map((coin) => coin.totalValue)
        .reduce((acc, cur) => acc + cur, 0);

    return (
        <Box sx={{ flexGrow: 1, mb: '24px' }}>
            <Grid container spacing={{ xs: 2, sm: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <CardStyled>
                        <CardContentStyled>
                            <Subtitle component="div">Total Balance</Subtitle>
                            <NumberText>
                                {numberWithCommas(balance.toFixed(2))}{' '}
                                <Typography variant="body2">USD</Typography>
                            </NumberText>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardStyled>
                        <CardContentStyled>
                            <Subtitle component="div">Profit/Loss</Subtitle>
                            <NumberText>
                                {numberWithCommas(totalProfit.toFixed(2))}{' '}
                                <Typography variant="body2">USD</Typography>
                            </NumberText>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    display={{ xs: 'none', sm: 'block' }}
                >
                    <CardStyled>
                        <CardContentStyled>
                            <Subtitle component="div">24H Change</Subtitle>
                            <NumberText>
                                {numberWithCommas(totalProfit.toFixed(2))}{' '}
                                <Typography variant="body2">USD</Typography>
                            </NumberText>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    display={{ xs: 'none', sm: 'block' }}
                >
                    <CardStyled>
                        <CardContentStyled>
                            <Subtitle component="div">Stable Coin</Subtitle>
                            <NumberText>
                                {numberWithCommas(stableCoin.toFixed(2))}{' '}
                                <Typography variant="body2">USD</Typography>
                            </NumberText>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Stats;
