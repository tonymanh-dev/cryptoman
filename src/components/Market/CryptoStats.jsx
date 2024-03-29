import React from 'react';
import { useGetMarketCapQuery } from '../../services/marketCapApi';
import millify from 'millify';

import DomStats from './DomStats';
import Loader from '../Loader';
import { numberWithCommas } from '../../utils/convertNumber';

import { Box, Grid, Typography } from '@mui/material';
import {
    CardStyled,
    CardContentStyled,
    Subtitle,
    NumberText,
} from '../MuiCustom';

const CryptoStats = () => {
    const { data } = useGetMarketCapQuery(10);

    if (!data) return <Loader />;

    const globalStats = data.data.stats;

    return (
        <Box sx={{ flexGrow: 1 }}>
            {!data && <Loader />}

            <Box sx={{ mb: '16px' }}>
                <Typography variant="h6">
                    Cryptocurrency Prices by Market Cap
                </Typography>
                <Typography variant="body2">
                    The global cryptocurrency market cap today is
                    <Subtitle sx={{ color: 'primary.main' }}>
                        {' '}
                        {millify(globalStats.totalMarketCap)} USD
                    </Subtitle>
                    , trading volume is{' '}
                    <Subtitle sx={{ color: 'primary.main' }}>
                        {millify(globalStats.total24hVolume)} USD{' '}
                    </Subtitle>
                    in the last 24 hours.
                </Typography>
            </Box>
            <Grid container spacing={{ xs: 2, md: 2 }}>
                <Grid item xs={12} sm={6} md={3} sx={{ minWidth: '214px' }}>
                    <CardStyled>
                        <CardContentStyled>
                            <Subtitle component="div">
                                Total Market Cap
                            </Subtitle>
                            <NumberText>
                                {numberWithCommas(globalStats.totalMarketCap)}{' '}
                                <Typography variant="body2">USD</Typography>
                            </NumberText>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ minWidth: '214px' }}>
                    <CardStyled>
                        <CardContentStyled>
                            <Subtitle component="div">
                                24h Trading Volume
                            </Subtitle>
                            <NumberText>
                                {numberWithCommas(globalStats.total24hVolume)}{' '}
                                <Typography variant="body2">USD</Typography>
                            </NumberText>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
                <DomStats />
            </Grid>
        </Box>
    );
};

export default CryptoStats;
