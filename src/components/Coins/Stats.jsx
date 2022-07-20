import React from 'react';

import { numberWithCommas } from '../../utils/convertNumber';

import { Box, Grid, Paper, styled, Tooltip, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Item = styled(Paper)(({ theme }) => ({
    padding: '12px 0',
    color: theme.palette.text.secondary,
    borderRadius: '0',
    boxShadow: 'none',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.divider,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
}));

const Heading = styled(Typography)(() => ({
    fontSize: '14px',
    fontWeight: '500',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.text.primary,
}));

const InfoIcon = styled(HelpOutlineIcon)(() => ({
    fontSize: '14px',
    marginLeft: '4px',
}));

const marketCapToolTip =
    "Market Cap = Current Price x Circulating Supply Refers to the total market value of a cryptocurrency's circulating supply.)";

const Stats = ({ data }) => {
    const coinStats = [
        {
            title: 'Market Cap',
            value: numberWithCommas(data.market_data.market_cap.usd),
        },
        {
            title: 'Fully Diluted Market Cap',
            value: numberWithCommas(
                data.market_data.fully_diluted_valuation.usd,
            ),
        },
        {
            title: '24 Hour Trading Vol',
            value: numberWithCommas(data.market_data.total_volume.usd),
        },
        {
            title: 'Circulating Supply',
            value: numberWithCommas(data.market_data.circulating_supply),
        },
        {
            title: 'Total Supply',
            value: numberWithCommas(data.market_data.total_supply),
        },
        {
            title: 'Max Supply',
            value: numberWithCommas(data.market_data.max_supply),
        },
    ];

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
                    {coinStats.map((coin) => (
                        <Item key={coin.title}>
                            <Heading>
                                {coin.title}
                                <Tooltip title={marketCapToolTip}>
                                    <InfoIcon />
                                </Tooltip>
                            </Heading>
                            <Subtitle>
                                {coin.value === '--' ? '∞' : '$' + coin.value}
                            </Subtitle>
                        </Item>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default Stats;
