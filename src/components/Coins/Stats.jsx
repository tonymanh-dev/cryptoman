import React from 'react';

import { numberWithCommas } from '../../pages/Market';
import { Box, Grid, Paper, styled, Tooltip, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Stats = ({
    totalSupply,
    marketCap,
    circulatingSupply,
    fullyDilutedValuation,
    totalVolume,
    maxSupply,
}) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f3f3f3',
        ...theme.typography.body2,
        padding: '12px 0',
        color: theme.palette.text.secondary,
        borderRadius: '0',
        boxShadow: 'none',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }));

    const Heading = styled(Typography)(({ theme }) => ({
        fontSize: '14px',
        fontWeight: '400',
    }));

    const Subtitle = styled(Typography)(({ theme }) => ({
        fontSize: '14px',
        fontWeight: '500',
        color: theme.palette.text.primary,
    }));

    const InfoCustom = styled(HelpOutlineIcon)(({ theme }) => ({
        fontSize: '14px',
        marginLeft: '4px',
    }));

    const marketCapToolTip =
        "Market Cap = Current Price x Circulating Supply Refers to the total market value of a cryptocurrency's circulating supply. It is similar to the stock market’s measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)";

    return (
        <Grid container sx={{ m: '24px 0' }}>
            <Grid item xs={12}>
                <Box
                    gap={{ xs: '10px 60px', lg: ' 10px 30px' }}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            sm: '1fr 1fr',
                            lg: '1fr 1fr 1fr',
                        },
                    }}
                >
                    <Item>
                        <Heading>
                            Market Cap
                            <Tooltip title={marketCapToolTip}>
                                <InfoCustom />
                            </Tooltip>
                        </Heading>
                        <Subtitle>${numberWithCommas(marketCap)}</Subtitle>
                    </Item>
                    <Item>
                        <Heading>
                            Fully Diluted Market Cap
                            <Tooltip title={marketCapToolTip}>
                                <InfoCustom />
                            </Tooltip>
                        </Heading>
                        <Subtitle>
                            {fullyDilutedValuation && '$'}{' '}
                            {numberWithCommas(fullyDilutedValuation)}
                        </Subtitle>
                    </Item>
                    <Item>
                        <Heading>
                            24 Hour Trading Vol
                            <Tooltip title={marketCapToolTip}>
                                <InfoCustom />
                            </Tooltip>
                        </Heading>
                        <Subtitle>${numberWithCommas(totalVolume)}</Subtitle>
                    </Item>
                    <Item>
                        <Heading>
                            Circulating Supply
                            <Tooltip title={marketCapToolTip}>
                                <InfoCustom />
                            </Tooltip>
                        </Heading>
                        <Subtitle>
                            {circulatingSupply && '$'}
                            {numberWithCommas(circulatingSupply)}
                        </Subtitle>
                    </Item>
                    <Item>
                        <Heading>
                            Total Supply
                            <Tooltip title={marketCapToolTip}>
                                <InfoCustom />
                            </Tooltip>
                        </Heading>
                        <Subtitle>
                            {totalSupply && '$'}
                            {numberWithCommas(totalSupply)}
                        </Subtitle>
                    </Item>
                    <Item>
                        <Heading>
                            Max Supply
                            <Tooltip title={marketCapToolTip}>
                                <InfoCustom />
                            </Tooltip>
                        </Heading>
                        <Subtitle>
                            {maxSupply && '$'}
                            {numberWithCommas(maxSupply)}
                        </Subtitle>
                    </Item>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Stats;
