import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CoinsContext } from '../../services/CryptoApiContext';

import { Box, Paper, Grid, Typography, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '10px',
    boxShadow: 'none',
}));

const Overview = () => {
    return (
        <Box sx={{ flexGrow: 1, margin: '24px' }}>
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                <Grid item xs={2} sm={4} md={3}>
                    <Item>
                        <Typography
                            variant="h2"
                            alignItems="center"
                            fontSize="16px"
                            fontWeight="400"
                        >
                            Balance
                        </Typography>
                        <Typography
                            variant="h1"
                            alignItems="center"
                            fontSize="20px"
                            fontWeight="500"
                            mt="10px"
                        >
                            $ 102.836.99
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={3}>
                    <Item>
                        <Typography
                            variant="h2"
                            alignItems="center"
                            fontSize="16px"
                            fontWeight="400"
                        >
                            Profit/Loss
                        </Typography>
                        <Typography
                            variant="h1"
                            alignItems="center"
                            fontSize="20px"
                            fontWeight="500"
                            mt="10px"
                        >
                            $ 102.836.99
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={3}>
                    <Item>
                        <Typography
                            variant="h2"
                            alignItems="center"
                            fontSize="16px"
                            fontWeight="400"
                        >
                            24h Change
                        </Typography>
                        <Typography
                            variant="h1"
                            alignItems="center"
                            fontSize="20px"
                            fontWeight="500"
                            mt="10px"
                        >
                            - $ 1.029,7
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={3}>
                    <Item>
                        <Typography
                            variant="h2"
                            alignItems="center"
                            fontSize="16px"
                            fontWeight="400"
                        >
                            Average Cost
                        </Typography>
                        <Typography
                            variant="h1"
                            alignItems="center"
                            fontSize="20px"
                            fontWeight="500"
                            mt="10px"
                        >
                            $ 42.869,33
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Overview;
