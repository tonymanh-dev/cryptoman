import React from 'react'
import { Box, Typography, Grid, Stack } from '@mui/material'
import { Item } from './index'

const Market = () => {
    return (
        <Stack m="24px" height="200px">
            <Typography variant="h6" fontSize="16px">
                Maket
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>Top gainer</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Top gainer</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Top gainer</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Top gainer</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Top gainer</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Top gainer</Item>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    )
}

export default Market
