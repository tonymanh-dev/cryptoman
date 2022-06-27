import React from 'react';
import { Box, Typography, Grid, Stack, styled } from '@mui/material';
import { Item } from './index';

const Market = () => {
    const ItemMarket = styled(Item)(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '200px',
        borderRadius: '10px',
        boxShadow: 'none',
    }));
    return (
        <Stack m="24px">
            <Typography variant="h6" fontSize="16px">
                Maket
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <ItemMarket>Top gainer</ItemMarket>
                    </Grid>
                    <Grid item xs={4}>
                        <ItemMarket>Top gainer</ItemMarket>
                    </Grid>
                    <Grid item xs={4}>
                        <ItemMarket>Top gainer</ItemMarket>
                    </Grid>
                    <Grid item xs={4}>
                        <ItemMarket>Top gainer</ItemMarket>
                    </Grid>
                    <Grid item xs={4}>
                        <ItemMarket>Top gainer</ItemMarket>
                    </Grid>
                    <Grid item xs={4}>
                        <ItemMarket>Top gainer</ItemMarket>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
};

export default Market;
