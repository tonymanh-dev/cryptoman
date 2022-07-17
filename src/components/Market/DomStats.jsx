import React from 'react';
import { useGetMarketStatsQuery } from '../../services/cryptoApi';
import { numberWithCommas } from '../../pages/Market';

import { Grid, Typography } from '@mui/material';
import {
    CardStyled,
    CardContentStyled,
    Subtitle,
    NumberText,
} from '../MuiCustom';
import Loader from '../Loader';

const DomStats = () => {
    const { data } = useGetMarketStatsQuery();

    if (!data) return <Loader />;

    const btcDominance = data.data.market_cap_percentage.btc;
    const totalCoins = data.data.active_cryptocurrencies;

    return (
        <>
            <Grid
                item
                xs={12}
                sm={6}
                md={3}
                display={{ xs: 'none', sm: 'block' }}
            >
                <CardStyled>
                    <CardContentStyled>
                        <Subtitle component="div">Bitcoin Dominance</Subtitle>
                        <NumberText>
                            {btcDominance.toFixed(2)}
                            <Typography variant="body2">%</Typography>
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
                        <Subtitle component="div"># Coin active</Subtitle>
                        <NumberText>
                            {numberWithCommas(totalCoins)}
                            <Typography variant="body2">%</Typography>
                        </NumberText>
                    </CardContentStyled>
                </CardStyled>
            </Grid>
        </>
    );
};

export default DomStats;
