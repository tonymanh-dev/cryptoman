import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetSingleCoinQuery } from '../services/cryptoApi';
import CoinInfo from '../components/Coins/CoinInfo';
import Statistics from '../components/Coins/Statistics';
import Loader from '../components/Loader';

import { Box, Grid } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Chart from '../components/Coins/Chart';
import More from '../components/Coins/More';

const CoinPage = () => {
    const { id } = useParams();
    const { data } = useGetSingleCoinQuery(id);

    if (!data) return <Loader />;

    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            href="/market"
            color="primary"
            variant="subtitle1"
            fontWeight="500"
        >
            Coins
        </Link>,

        <Typography
            key="2"
            color="text.primary"
            variant="body1"
            fontWeight="500"
        >
            {data.name}
        </Typography>,
    ];

    return (
        <Box sx={{ pl: { xs: '0', lg: '24px' }, width: '100%' }}>
            <Box sx={{ m: '24px 0' }}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    arial-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>
            <CoinInfo data={data} id={id} />
            <Grid container>
                <Chart coin={data} id={id} />
                <Statistics data={data} />
            </Grid>
            <More coin={data} />
        </Box>
    );
};

export default CoinPage;
