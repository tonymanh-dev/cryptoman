import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetSingleCoinQuery } from '../services/cryptoApi';
import CoinInfo from '../components/Coins/CoinInfo';
import Statistics from '../components/Coins/Statistics';
import Loader from '../components/Loader';

import { Avatar, Box, Chip, Grid, IconButton, Stack } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarOutline from '@mui/icons-material/StarOutline';
import Chart from '../components/Coins/Chart';
import More from '../components/Coins/More';

const CoinPage = () => {
    const { id } = useParams();
    const { data } = useGetSingleCoinQuery(id);
    console.log(data);

    if (!data) return <Loader />;
    // Original data
    const name = data.name;
    const image = data.image.small;
    const symbol = data.symbol;

    // Info
    const rank = data.market_cap_rank;
    const currentPrice = data.market_data.current_price.usd;
    const marketCap = data.market_data.market_cap.usd;
    const totalSupply = data.market_data.total_supply;
    const maxSupply = data.market_data.max_supply;
    const circulatingSupply = data.market_data.circulating_supply;
    const fullyDilutedValuation = data.market_data.fully_diluted_valuation.usd;
    const categories = data.categories;
    const hashingAlgorithm = data.hashing_algorithm;

    // Statistics
    const totalVolume = data.market_data.total_volume.usd;
    const priceChange24h = data.market_data.price_change_24h;
    const priceChangePer24h = data.market_data.price_change_percentage_24h;
    const marketCapChange24h = data.market_data.market_cap_change_24h;
    const marketCapChangePer24h =
        data.market_data.market_cap_change_percentage_24h;

    const athPrice = data.market_data.ath.usd;
    const atlPrice = data.market_data.atl.usd;
    const athChangePercentage = data.market_data.ath_change_percentage.usd;
    const atlChangePercentage = data.market_data.atl_change_percentage.usd;
    const athDate = data.market_data.ath_date.usd;
    const atlDate = data.market_data.atl_date.usd;
    const high24h = data.market_data.high_24h.usd;
    const low24h = data.market_data.low_24h.usd;

    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            href="/market"
            color="inherit"
            variant="subtitle1"
        >
            Coins
        </Link>,
        <Typography key="2" color="primary.gray" variant="body1">
            {data.name}
        </Typography>,
    ];

    return (
        <Box sx={{ p: ' 10px', width: '100%' }}>
            <Box>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    arial-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>
            <CoinInfo
                id={id}
                name={name}
                symbol={symbol}
                image={image}
                rank={rank}
                currentPrice={currentPrice}
                totalSupply={totalSupply}
                marketCap={marketCap}
                totalVolume={totalVolume}
                maxSupply={maxSupply}
                circulatingSupply={circulatingSupply}
                priceChangePer24h={priceChangePer24h}
                fullyDilutedValuation={fullyDilutedValuation}
                low24h={low24h}
                high24h={high24h}
                categories={categories}
                hashingAlgorithm={hashingAlgorithm}
            />
            <Grid container>
                <Chart coin={data} id={id} />
                <Statistics data={data} />
            </Grid>
            <More coin={data} />
        </Box>
    );
};

export default CoinPage;
