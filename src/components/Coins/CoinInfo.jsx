import React, { useState, useEffect } from 'react';
import { numberWithCommas } from '../../pages/Market';
import {
    Avatar,
    Box,
    Chip,
    IconButton,
    Grid,
    Button,
    Card,
    Stack,
} from '@mui/material';
import Typography from '@mui/material/Typography';

import {
    FaStar,
    FaRegStar,
    FaRegBell,
    FaShare,
    FaCaretDown,
    FaCaretUp,
} from 'react-icons/fa';

import Stats from './Stats';
import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import Chart from './Chart';

const CoinInfo = ({
    name,
    image,
    symbol,
    rank,
    hashingAlgorithm,
    categories,
    currentPrice,
    priceChangePer24h,
    totalSupply,
    marketCap,
    circulatingSupply,
    fullyDilutedValuation,
    totalVolume,
    maxSupply,
    low24h,
    high24h,
}) => {
    const BtnOutline = styled(Button)(({ theme }) => ({
        fontSize: '18px',
        marginRight: '4px',
        padding: '6px 12px',
        borderColor: theme.palette.secondary.main,
        borderRadius: '6px',
        color: theme.palette.text.grey,
        '&:hover': {
            borderColor: theme.palette.secondary.main,
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
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor:
                theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            backgroundColor:
                theme.palette.mode === 'light' ? 'primary' : '#308fe8',
        },
    }));

    return (
        <div>
            <Grid
                container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    m: '34px 0',
                }}
            >
                <Grid item xs={12} md={6}>
                    <Chip
                        label={`Rank #${rank}`}
                        variant="outlined"
                        size="small"
                        sx={{
                            fontSize: '12px',
                            fontWeight: '500',
                            borderColor: 'text.grey',
                            bgcolor: 'text.grey',
                            color: 'primary.white',
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            mt: '14px',
                        }}
                    >
                        <Avatar
                            src={image}
                            sx={{ height: '24px', width: '24px' }}
                            alt={name}
                        />
                        <Typography
                            variant="h6"
                            sx={{ fontSize: '1.6rem', fontWeight: '400' }}
                        >
                            {name}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ fontSize: '16px', fontWeight: '500' }}
                        >
                            ({symbol.toUpperCase()})
                        </Typography>
                    </Box>
                    <Box sx={{ m: '10px' }}>
                        <BtnOutline variant="outlined">
                            <FaShare />
                        </BtnOutline>
                        <BtnOutline variant="outlined">
                            <FaRegBell />
                        </BtnOutline>
                        <BtnOutline
                            variant="outlined"
                            sx={{
                                color: 'primary.yellow',
                            }}
                        >
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
                            {name} Price
                        </Typography>
                        <Typography variant="body2">
                            ({symbol.toUpperCase()})
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
                            $ {numberWithCommas(currentPrice)}
                        </Typography>
                        <Box
                            sx={{
                                p: '6px 10px',
                                borderRadius: '6px',
                            }}
                            backgroundColor={
                                priceChangePer24h > 0
                                    ? 'primary.main'
                                    : '#ea3943'
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
                                {priceChangePer24h > 0 ? (
                                    <FaCaretUp />
                                ) : (
                                    <FaCaretDown />
                                )}
                                <Typography>
                                    {priceChangePer24h.toFixed(2)}%
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <BorderLinearProgress
                            width={{ sm: '100%', md: '70%' }}
                            justifycontent={{ md: 'end' }}
                            variant="determinate"
                            value={30}
                            sx={{ m: '6px 0' }}
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
                                ${numberWithCommas(low24h)}
                            </Typography>
                            <Typography variant="body2">24H Range</Typography>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: '500', fontSize: '14px' }}
                            >
                                ${numberWithCommas(high24h)}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

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
                            {hashingAlgorithm && (
                                <Chip label={hashingAlgorithm} clickable></Chip>
                            )}
                            {categories &&
                                categories
                                    .filter((el) => el != null)
                                    .map((hash) => (
                                        <Chip
                                            label={hash}
                                            key={hash}
                                            clickable
                                        ></Chip>
                                    ))}
                        </Stack>
                    </Box>
                </Grid>
            </Grid>

            <Stats
                marketCap={marketCap}
                totalVolume={totalVolume}
                totalSupply={totalSupply}
                maxSupply={maxSupply}
                circulatingSupply={circulatingSupply}
                fullyDilutedValuation={fullyDilutedValuation}
            />
        </div>
    );
};

export default CoinInfo;
