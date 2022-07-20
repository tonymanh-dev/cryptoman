import React from 'react';
import { numberWithCommas } from '../../utils/convertNumber';

import {
    Box,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Grid,
    Typography,
} from '@mui/material';

const Statistics = ({ data }) => {
    const statistics = [
        {
            label: 'Market Cap Rank',
            value: data.market_cap_rank,
        },
        {
            label: 'Current Price',
            value: numberWithCommas(data.market_data.current_price.usd),
        },
        {
            label: '24h High',
            value: numberWithCommas(data.market_data.high_24h.usd),
        },
        {
            label: '24h Low',
            value: numberWithCommas(data.market_data.low_24h.usd),
        },
        {
            label: 'Trading Volume',
            value: numberWithCommas(data.market_data.total_volume.usd),
        },

        {
            label: 'All-Time High',
            value: numberWithCommas(data.market_data.ath.usd),
        },
        {
            label: 'All-Time Low',
            value: numberWithCommas(data.market_data.atl.usd),
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
                        <Table
                            arial-label="statistics table"
                            sx={{
                                '.MuiTableCell-root': {
                                    borderBottom: '1px solid',
                                    borderBottomColor: 'divider',
                                },
                            }}
                        >
                            <TableHead>
                                <TableRow hover>
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
                                            '&:last-child td, &:last-child th':
                                                {
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
