import React, { useState } from 'react';

import { numberWithCommas } from '../../utils/convertNumber';

import { Box, Grid, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { GiReceiveMoney } from 'react-icons/gi';
import { CardStyled, CardContentStyled, Subtitle, BodyText } from './styled';
import SelectBtn from './SelectBtn';

const PortfolioStats = ({ getStats }) => {
    const [currency, setCurrency] = useState('USD');

    const totalProfit = getStats().totalProfit;
    const balance = getStats().balance;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2 }}>
                <Grid item xs={12} md={4}>
                    <CardStyled>
                        <CardContentStyled>
                            <Box>
                                <AccountBalanceWalletIcon />
                                <Subtitle component="div">
                                    Total Balance
                                </Subtitle>
                                <BodyText>
                                    {balance}{' '}
                                    <Typography variant="body2">USD</Typography>
                                </BodyText>
                            </Box>
                            <Box>
                                {['BTC', 'USD'].map((view) => (
                                    <SelectBtn
                                        key={view}
                                        onClick={() => setCurrency(view)}
                                        selected={view === currency}
                                    >
                                        {view}
                                    </SelectBtn>
                                ))}
                            </Box>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardStyled>
                        <CardContentStyled>
                            <Box>
                                <GiReceiveMoney
                                    style={{ width: '24px', height: '24px' }}
                                />
                                <Subtitle component="div">
                                    Total Profit
                                </Subtitle>
                                <BodyText>
                                    {totalProfit}{' '}
                                    <Typography variant="body2">USD</Typography>
                                </BodyText>
                            </Box>

                            <Box
                                color={totalProfit > 0 ? 'greenCl' : 'redCl'}
                                sx={{
                                    display: 'flex',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}
                            >
                                <Typography variant="subtitle2">
                                    {totalProfit > 0 ? '+' : '-'}
                                    8,6 %
                                </Typography>
                            </Box>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    display={{
                        xs: 'none',
                        sm: 'block',
                    }}
                >
                    <CardStyled>
                        <CardContentStyled>
                            <Box>
                                <CurrencyExchangeIcon />
                                <Subtitle component="div">24H Change</Subtitle>
                                <BodyText>
                                    {totalProfit}{' '}
                                    <Typography variant="body2">USD</Typography>
                                </BodyText>
                            </Box>
                            <Box
                                color={totalProfit > 0 ? 'greenCl' : 'redCl'}
                                sx={{
                                    display: 'flex',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}
                            >
                                <Typography variant="subtitle2">
                                    {totalProfit > 0 ? '+' : '-'}
                                    1,2 %
                                </Typography>
                            </Box>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PortfolioStats;
/*
<Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2 }}>
                <Grid item xs={12} md={4}>
                    <CardStyled>
                        <CardContentStyled>
                            <Box>
                                <AccountBalanceWalletIcon />
                                <Subtitle component="div">
                                    Total Balance
                                </Subtitle>
                                <BodyText>
                                    {numberWithCommas(balance.toFixed(2))}{' '}
                                    <Typography variant="body2">USD</Typography>
                                </BodyText>
                            </Box>
                            <Box>
                                {['BTC', 'USD'].map((view) => (
                                    <SelectBtn
                                        key={view}
                                        onClick={() => setCurrency(view)}
                                        selected={view === currency}
                                    >
                                        {view}
                                    </SelectBtn>
                                ))}
                            </Box>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <CardStyled>
                        <CardContentStyled>
                            <Box>
                                <GiReceiveMoney
                                    style={{ width: '24px', height: '24px' }}
                                />
                                <Subtitle component="div">
                                    Total Profit
                                </Subtitle>
                                <BodyText>
                                    {numberWithCommas(totalProfit.toFixed(2))}{' '}
                                    <Typography variant="body2">USD</Typography>
                                </BodyText>
                            </Box>

                            <Box
                                color={totalProfit > 0 ? 'greenCl' : '#ea3943'}
                                sx={{
                                    display: 'flex',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}
                            >
                                <Typography variant="subtitle2">
                                    {totalProfit > 0 ? '+' : '-'}
                                    8,6 %
                                </Typography>
                            </Box>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    display={{
                        xs: 'none',
                        sm: 'block',
                    }}
                >
                    <CardStyled>
                        <CardContentStyled>
                            <Box>
                                <CurrencyExchangeIcon />
                                <Subtitle component="div">24H Change</Subtitle>
                                <BodyText>
                                    {numberWithCommas(totalProfit.toFixed(2))}{' '}
                                    <Typography variant="body2">USD</Typography>
                                </BodyText>
                            </Box>
                            <Box
                                color={totalProfit > 0 ? 'greenCl' : '#ea3943'}
                                sx={{
                                    display: 'flex',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}
                            >
                                <Typography variant="subtitle2">
                                    {totalProfit > 0 ? '+' : '-'}
                                    8,6 %
                                </Typography>
                            </Box>
                        </CardContentStyled>
                    </CardStyled>
                </Grid>
            </Grid>
        </Box>
        */
