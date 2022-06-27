import React from 'react';
import { useGetMarketCapQuery } from '../../services/marketCapApi';

import DomStats from './DomStats';
import Loader from '../Loader';
import { numberWithCommas } from '../../pages/Market';

import { Box, Grid, Typography, Paper, styled } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderRadius: '10px',
    boxShadow: 'none',
    borderLeft: '10px solid',
    borderLeftColor: theme.palette.primary.main,
}));

export const Heading = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1,
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.text.secondary,
}));

export const StatsBody = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: '500',
    marginTop: '10px',
    color: theme.palette.text.primary,
}));

const CryptoStats = () => {
    const { data } = useGetMarketCapQuery(10);

    if (!data) return <Loader />;

    const globalStats = data.data.stats;

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
                        <Heading>Total Market Cap</Heading>
                        <StatsBody>
                            $ {numberWithCommas(globalStats.totalMarketCap)}
                        </StatsBody>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Item>
                        <Heading>24h Trading Volume</Heading>
                        <StatsBody>
                            $ {numberWithCommas(globalStats.total24hVolume)}
                        </StatsBody>
                    </Item>
                </Grid>
                <DomStats />
            </Grid>
        </Box>
    );
};

export default CryptoStats;
