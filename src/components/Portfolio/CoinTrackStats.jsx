import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetSingleCoinQuery } from '../../services/cryptoApi';
import { numberWithCommas } from '../../pages/Market';
import {
    Avatar,
    Box,
    Breadcrumbs,
    Grid,
    Stack,
    Typography,
} from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
    Card2,
    CardContentStyled,
    Subtitle,
    Heading,
    SubtitleCl,
    NumberText,
    TextLink,
    TextLink2,
} from '../MuiCustom';
import Loader from '../Loader';

const CoinTrackStats = ({ coinData, coinId }) => {
    const { data } = useGetSingleCoinQuery(coinId);
    const navigate = useNavigate();

    if (!data) return <Loader />;

    // Get portfolio coin track stats value
    const balance = coinData
        .map((coin) => coin.totalValue)
        .reduce((acc, cur) => acc + cur, 0);

    const totalProfit = coinData
        .map((coin) => coin.profit)
        .reduce((acc, cur) => acc + cur, 0);

    const totalCost = coinData
        .map((coin) => coin.totalCost)
        .reduce((acc, cur) => acc + cur, 0);

    const holdings = coinData
        .map((coin) => coin.quantity)
        .reduce((acc, cur) => acc + cur, 0);

    const averagePrice = coinData
        .map((coin) => coin.averagePrice)
        .reduce((acc, cur) => acc + cur, 0);

    const profitPercentage = coinData
        .map((coin) => coin.profitPercentage)
        .reduce((acc, cur) => acc + cur, 0);

    return (
        <Box sx={{ flexGrow: 1, m: '24px 0' }}>
            <Breadcrumbs
                sx={{ mb: '14px' }}
                separator={<NavigateNextIcon fontSize="small" />}
            >
                <TextLink
                    underline="hover"
                    onClick={() => navigate('/dashboard')}
                >
                    Home
                </TextLink>
                <TextLink
                    underline="hover"
                    onClick={() => navigate('/portfolio')}
                >
                    Portfolio
                </TextLink>

                <TextLink2>Transaction Overview</TextLink2>
            </Breadcrumbs>

            <Box key={data.name} sx={{ mb: '16px' }}>
                <Stack direction="row" sx={{ alignItems: 'center' }}>
                    <Avatar
                        src={data.image.small}
                        sx={{ width: 24, height: 24, mr: '6px' }}
                    />
                    <Heading variant="h6">{data.name}</Heading>
                </Stack>
                <Stack direction="row" sx={{ mt: '4px', alignItems: 'center' }}>
                    <Heading variant="h6" sx={{ fontWeight: '600' }}>
                        $
                        {numberWithCommas(
                            data.market_data.current_price.usd.toFixed(2),
                        )}
                    </Heading>
                    <Heading
                        variant="h6"
                        sx={{
                            ml: '10px',
                            fontSize: '16px',
                            color:
                                data.market_data.price_change_percentage_24h > 0
                                    ? 'greenCl'
                                    : 'redCl',
                        }}
                    >
                        {data.market_data.price_change_percentage_24h > 0
                            ? '+'
                            : ''}
                        {data.market_data.price_change_percentage_24h.toFixed(
                            1,
                        )}
                        %
                    </Heading>
                </Stack>
            </Box>

            <Grid container spacing={{ xs: 1, sm: 2 }}>
                <Grid item xs={12} sm={4} md={2}>
                    <Card2>
                        <CardContentStyled>
                            <SubtitleCl component="div">Total Value</SubtitleCl>
                            <NumberText>
                                ${numberWithCommas(balance.toFixed(2))}{' '}
                                <Typography variant="body2">USD</Typography>
                            </NumberText>
                        </CardContentStyled>
                    </Card2>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>
                    <Card2>
                        <CardContentStyled>
                            <SubtitleCl component="div">Holdings</SubtitleCl>
                            <NumberText>
                                {numberWithCommas(holdings.toFixed(2))}{' '}
                            </NumberText>
                        </CardContentStyled>
                    </Card2>
                </Grid>

                <Grid item xs={12} sm={4} md={2}>
                    <Card2>
                        <CardContentStyled>
                            <SubtitleCl component="div">Total Cost</SubtitleCl>
                            <NumberText>
                                ${numberWithCommas(totalCost.toFixed(2))}{' '}
                            </NumberText>
                        </CardContentStyled>
                    </Card2>
                </Grid>

                <Grid item xs={12} sm={4} md={2}>
                    <Card2>
                        <CardContentStyled>
                            <SubtitleCl component="div">
                                Average Price
                            </SubtitleCl>
                            <NumberText>
                                ${numberWithCommas(averagePrice.toFixed(2))}{' '}
                                <Typography variant="body2">USD</Typography>
                            </NumberText>
                        </CardContentStyled>
                    </Card2>
                </Grid>

                <Grid item xs={12} sm={4} md={3}>
                    <Card2>
                        <CardContentStyled>
                            <SubtitleCl component="div">Profit/Loss</SubtitleCl>
                            <NumberText>
                                ${numberWithCommas(totalProfit.toFixed(2))}{' '}
                                <Typography variant="body2">USD</Typography>
                                <Subtitle
                                    sx={{
                                        fontSize: '12px',
                                        ml: '4px',
                                        color:
                                            profitPercentage > 0
                                                ? 'greenCl'
                                                : 'redCl',
                                    }}
                                >
                                    {profitPercentage > 0 ? '+' : ''}
                                    {profitPercentage.toFixed(2)}%
                                </Subtitle>
                            </NumberText>
                        </CardContentStyled>
                    </Card2>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CoinTrackStats;
