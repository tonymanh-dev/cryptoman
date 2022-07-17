import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { useGetSingleCoinQuery } from '../services/cryptoApi';
import CoinInfo from '../components/Coins/CoinInfo';
import Statistics from '../components/Coins/Statistics';
import Chart from '../components/Coins/Chart';
import More from '../components/Coins/More';
import Loader from '../components/Loader';

import { TextLink, TextLink2 } from '../components/MuiCustom';
import { Box, Grid, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CoinPage = () => {
    const { id } = useParams();
    const { data } = useGetSingleCoinQuery(id);
    const navigate = useNavigate();

    if (!data) return <Loader />;

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ mt: '10px' }}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                    <TextLink
                        underline="hover"
                        onClick={() => navigate('/dashboard')}
                    >
                        Home
                    </TextLink>
                    <TextLink
                        underline="hover"
                        onClick={() => navigate('/market')}
                    >
                        Coins
                    </TextLink>

                    <TextLink2>{data.name}</TextLink2>
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
