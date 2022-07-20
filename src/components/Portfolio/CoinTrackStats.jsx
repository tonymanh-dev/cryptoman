import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetSingleCoinQuery } from '../../services/cryptoApi';
import { numberWithCommas } from '../../utils/convertNumber';

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

    const currentPrice = data.market_data.current_price.usd;
    const price24h = data.market_data.price_change_percentage_24h;

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
                        ${numberWithCommas(currentPrice.toFixed(2))}
                    </Heading>
                    <Heading
                        variant="h6"
                        sx={{
                            ml: '10px',
                            fontSize: '16px',
                            color: price24h > 0 ? 'greenCl' : 'redCl',
                        }}
                    >
                        {price24h > 0 ? '+' : ''}
                        {price24h.toFixed(1)}%
                    </Heading>
                </Stack>
            </Box>

            <Grid container spacing={{ xs: 1, sm: 2 }}>
                <Grid item xs={12} sm={4} md={2.2}>
                    <Card2>
                        <CardContentStyled>
                            <SubtitleCl component="div">Total Value</SubtitleCl>
                            <NumberText>
                                ${numberWithCommas(coinData[0].totalValue)}{' '}
                            </NumberText>
                        </CardContentStyled>
                    </Card2>
                </Grid>
                <Grid item xs={12} sm={4} md={2.2}>
                    <Card2>
                        <CardContentStyled>
                            <SubtitleCl component="div">Holdings</SubtitleCl>
                            <NumberText>
                                {numberWithCommas(coinData[0].quantity)}{' '}
                            </NumberText>
                        </CardContentStyled>
                    </Card2>
                </Grid>

                <Grid item xs={12} sm={4} md={2.2}>
                    <Card2>
                        <CardContentStyled>
                            <SubtitleCl component="div">Total Cost</SubtitleCl>
                            <NumberText>
                                ${numberWithCommas(coinData[0].totalCost)}{' '}
                            </NumberText>
                        </CardContentStyled>
                    </Card2>
                </Grid>

                <Grid item xs={12} sm={6} md={2.2}>
                    <Card2>
                        <CardContentStyled>
                            <SubtitleCl component="div">
                                Average Price
                            </SubtitleCl>
                            <NumberText>
                                ${numberWithCommas(coinData[0].averagePrice)}{' '}
                            </NumberText>
                        </CardContentStyled>
                    </Card2>
                </Grid>

                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Card2>
                        <CardContentStyled>
                            <SubtitleCl component="div">Profit/Loss</SubtitleCl>
                            <NumberText>
                                ${numberWithCommas(coinData[0].profit)}{' '}
                                <Subtitle
                                    sx={{
                                        fontSize: '12px',
                                        ml: '4px',
                                        color:
                                            coinData[0].profitPercentage > 0
                                                ? 'greenCl'
                                                : 'redCl',
                                    }}
                                >
                                    {coinData[0].profitPercentage > 0
                                        ? '+'
                                        : ''}
                                    {coinData[0].profitPercentage}%
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
