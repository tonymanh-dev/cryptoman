import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { numberWithCommas } from '../../pages/Market';
import { useGetSingleCoinQuery } from '../../services/cryptoApi';
import Loader from '../Loader';
import {
    Avatar,
    Box,
    Chip,
    IconButton,
    Stack,
    Paper,
    Card,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Grid,
} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarOutline from '@mui/icons-material/StarOutline';

const Statistics = ({ data }) => {
    // Info
    const rank = data.market_cap_rank;
    const currentPrice = data.market_data.current_price.usd;
    const totalSupply = data.market_data.total_supply;
    const marketCap = data.market_data.market_cap.usd;
    const maxSupply = data.market_data.max_supply;
    const circulatingSupply = data.market_data.circulating_supply;

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
    const statistics = [
        {
            label: 'Market Cap Rank',
            value: rank,
        },
        {
            label: 'Current Price',
            value: numberWithCommas(currentPrice),
        },
        {
            label: '24h High',
            value: numberWithCommas(high24h),
        },
        {
            label: '24h Low',
            value: numberWithCommas(low24h),
        },
        {
            label: 'Trading Volume',
            value: numberWithCommas(totalVolume),
        },

        {
            label: 'All-Time High',
            value: numberWithCommas(athPrice),
        },
        {
            label: 'All-Time Low',
            value: numberWithCommas(atlPrice),
        },
    ];

    return (
        <Grid item xs={12} lg={4}>
            <Box
                direction={{ sm: 'row' }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        p: '14px',
                    }}
                >
                    <Typography variant="h6">
                        {data.symbol.toUpperCase()} Statistics
                    </Typography>
                    <TableContainer>
                        <Table arial-label="statistics table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ p: '16px 0' }}>
                                        {data.name} Price Today
                                    </TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {statistics.map((row) => (
                                    <TableRow
                                        key={row.label}
                                        sx={{
                                            '&:last-child td, &:last-child th': {
                                                border: 0,
                                            },
                                        }}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{ padding: '16px 0' }}
                                        >
                                            {row.label}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            sx={{
                                                padding: '16px 0',
                                                fontWeight: '500',
                                            }}
                                        >
                                            {row.label === 'Market Cap Rank'
                                                ? '#'
                                                : '$'}
                                            {row.value}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </Grid>
    );
};

export default Statistics;
