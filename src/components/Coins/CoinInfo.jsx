import React, { useState, useEffect } from 'react';
import { numberWithCommas } from '../../pages/Market';
import { Avatar, Box, Chip, Grid, Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import {
    FaStar,
    FaRegBell,
    FaShare,
    FaCaretDown,
    FaCaretUp,
} from 'react-icons/fa';

import Stats from './Stats';
import { LinearProgress, linearProgressClasses, styled } from '@mui/material';

const CoinInfo = ({ data, id }) => {
    const BtnOutline = styled(Button)(({ theme }) => ({
        fontSize: '18px',
        marginRight: '4px',
        padding: '6px 12px',
        borderColor: theme.palette.divider,
        borderRadius: '6px',
        color: theme.palette.text.secondary,
        '&:hover': {
            borderColor: theme.palette.primary,
        },
    }));

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: '8px',
        width: '70%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        borderRadius: 5,
        alignItems: 'center',
        margin: '10px 0',
        '.MuiLinearProgress-barColorPrimary': {
            backgroundColor: '',
            backgroundImage: 'linear-gradient(to right, #7e84ff, #9be15d)',
            // backgroundColor: theme.palette.primary.main,
            // backgroundImage: 'linear-gradient(to right, #afe15d, #39b385)',
        },
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor:
                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            backgroundColor:
                theme.palette.mode === 'light' ? 'primary' : 'secondary',
        },
    }));

    const ChipStyled = styled(Chip)(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        padding: '4px',
        height: '30px',
        fontWeight: '500',
    }));

    return (
        <div>
            <Grid
                container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: '34px',
                }}
            >
                <Grid item xs={12} md={6}>
                    <Chip
                        label={`Rank #${data.market_cap_rank}`}
                        variant="outlined"
                        sx={{
                            fontSize: '12px',
                            fontWeight: '600',
                            borderColor: 'divider',
                            bgcolor: 'background.default',
                            color: 'text.primary',
                            height: '30px',
                            m: '14px 0',
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <Avatar
                            src={data.image.small}
                            sx={{ height: '24px', width: '24px' }}
                            alt={data.name}
                        />
                        <Typography
                            variant="h6"
                            sx={{ fontSize: '26px', fontWeight: '600' }}
                        >
                            {data.name}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ fontSize: '16px', fontWeight: '500' }}
                        >
                            ({data.symbol.toUpperCase()})
                        </Typography>
                    </Box>
                    <Box sx={{ m: '10px 0' }}>
                        <BtnOutline variant="outlined">
                            <FaShare />
                        </BtnOutline>
                        <BtnOutline variant="outlined">
                            <FaRegBell />
                        </BtnOutline>
                        <BtnOutline variant="outlined">
                            <FaStar />
                        </BtnOutline>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        display={{ xs: 'none', md: 'flex' }}
                        justifyContent={{ xs: 'start', md: 'end' }}
                        sx={{
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ fontSize: '14px', fontWeight: '400' }}
                        >
                            {data.name} Price
                        </Typography>
                        <Typography variant="body2" component="span">
                            ({data.symbol.toUpperCase()})
                        </Typography>
                    </Box>

                    <Box
                        justifyContent={{ xs: 'start', md: 'end' }}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            mt: '10px',
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: '2.2rem',
                                fontWeight: '500',
                                letterSpacing: '1px',
                            }}
                        >
                            ${' '}
                            {numberWithCommas(
                                data.market_data.current_price.usd,
                            )}
                        </Typography>
                        <Box
                            sx={{
                                p: '6px 10px',
                                borderRadius: '6px',
                            }}
                            backgroundColor={
                                data.market_data.price_change_percentage_24h > 0
                                    ? 'greenCl'
                                    : 'redCl'
                            }
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#fff',
                                }}
                            >
                                {data.market_data.price_change_percentage_24h >
                                0 ? (
                                    <FaCaretUp />
                                ) : (
                                    <FaCaretDown />
                                )}
                                <Typography>
                                    {data.market_data.price_change_percentage_24h.toFixed(
                                        2,
                                    )}
                                    %
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <BorderLinearProgress
                            width={{ sm: '100%', md: '70%' }}
                            justifycontent={{ md: 'end' }}
                            variant="determinate"
                            value={60}
                        />
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    >
                        <Box
                            width={{ sm: '100%', md: '70%' }}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: '500', fontSize: '14px' }}
                            >
                                $
                                {numberWithCommas(data.market_data.low_24h.usd)}
                            </Typography>
                            <Typography variant="body2">24H Range</Typography>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: '500', fontSize: '14px' }}
                            >
                                $
                                {numberWithCommas(
                                    data.market_data.high_24h.usd,
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Chip Tag */}
                <Grid item xs={12} md={8}>
                    <Box
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Typography variant="body2" sx={{ m: '10px 0' }}>
                            Tags:
                        </Typography>
                        <Stack
                            direction="row"
                            sx={{ flexWrap: 'wrap', gap: '10px' }}
                        >
                            {data.hashing_algorithm && (
                                <ChipStyled
                                    size="small"
                                    label={data.hashing_algorithm}
                                ></ChipStyled>
                            )}
                            {data.categories &&
                                data.categories
                                    .filter((el) => el != null)
                                    .map((hash) => (
                                        <ChipStyled
                                            size="small"
                                            label={hash}
                                            key={hash}
                                        ></ChipStyled>
                                    ))}
                        </Stack>
                    </Box>
                </Grid>
            </Grid>

            <Stats data={data} />
        </div>
    );
};

export default CoinInfo;
