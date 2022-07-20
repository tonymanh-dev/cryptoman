import React from 'react';
import { numberWithCommas } from '../../utils/convertNumber';

import { Box, Grid, Typography } from '@mui/material';
import {
    CardStyled,
    CardContentStyled,
    Subtitle,
    NumberText,
} from '../MuiCustom';

const Stats = ({ portfolio }) => {
    // Get portfolio stats value
    const totalProfit = portfolio
        .map((coin) => coin.profit)
        .reduce((acc, cur) => acc + cur, 0);

    const balance = portfolio
        .map((coin) => coin.totalValue)
        .reduce((acc, cur) => acc + cur, 0);

    const totalCost = portfolio
        .map((coin) => coin.totalCost)
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
                            <Subtitle component="div">Total Cost</Subtitle>
                            <NumberText>
                                {numberWithCommas(totalCost.toFixed(2))}{' '}
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
                                2,300{' '}
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
