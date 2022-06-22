import React from 'react';
import millify from 'millify';
import { useGetMarketCapQuery } from '../../services/marketCapApi';
import { useGetMarketStatsQuery } from '../../services/cryptoApi';

import DomStats from './DomStats';
import Loader from '../Loader';
import { numberWithCommas } from '../../pages/Market';

import { Box, Grid, Typography, Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f3f4f6',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '10px',
    boxShadow: 'none',
}));

const CryptoStats = () => {
    const { data, isFetching } = useGetMarketCapQuery(10);

    if (!data) return <Loader />;

    const globalStats = data.data.stats;
    console.log(data);

    return (
        <Box sx={{ mt: '24px', flexGrow: 1 }}>
            {!data && <Loader />}

            <Box sx={{ mb: '16px' }}>
                <Typography variant="h6">
                    Cryptocurrency Prices by Market Cap
                </Typography>
                <Typography variant="body2">
                    The global cryptocurrency market cap today is $1 Trillion, a
                    -12.5% change in the last 24 hours.
                </Typography>
            </Box>
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                <Grid item xs={12} sm={4} md={3}>
                    <Item>
                        <Typography
                            variant="subtitle1"
                            alignItems="center"
                            fontSize="16px"
                            fontWeight="400"
                        >
                            Total Market Cap
                        </Typography>
                        <Typography
                            variant="body1"
                            alignItems="center"
                            fontSize="20px"
                            fontWeight="500"
                            mt="10px"
                        >
                            $ {numberWithCommas(globalStats.totalMarketCap)}
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
                            24h Trading Volume
                        </Typography>
                        <Typography
                            variant="body1"
                            alignItems="center"
                            fontSize="20px"
                            fontWeight="500"
                            mt="10px"
                        >
                            $ {numberWithCommas(globalStats.total24hVolume)}
                        </Typography>
                    </Item>
                </Grid>
                <DomStats />
            </Grid>
        </Box>
    );
};

export default CryptoStats;
