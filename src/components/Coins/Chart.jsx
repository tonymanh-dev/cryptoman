import React, { useState, useEffect } from 'react';
import { useGetMarketChartQuery } from '../../services/cryptoApi';
import axios from 'axios';
import { marketChart } from '../../data/cryptoApi';
import { chartTimes, modeChart } from '../../data/data';
import { Box, ButtonGroup, Grid, styled, Typography } from '@mui/material';

import Loader from '../Loader';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import TimeButton from './TimeButton';
ChartJS.register(...registerables);

const Chart = ({ coin, id }) => {
    const [chartData, setChartData] = useState();
    const [charts, setCharts] = useState(1);
    const [days, setDays] = useState(1);
    // const { data } = useGetMarketChartQuery(id, days);

    const BoxChart = styled(Box)(({ theme }) => ({
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'inherit',
    }));
    // if (data) console.log(data.prices);

    const fetchMarketChart = async () => {
        const { data } = await axios.get(marketChart(id, days));
        setChartData(data.prices);
    };

    useEffect(() => {
        fetchMarketChart();
    }, [days]);

    return (
        <Grid item xs={12} lg={8}>
            <Typography
                variant="h3"
                sx={{ fontSize: '24px', fontWeight: '500', m: '10px 0' }}
            >
                {coin.name} Chart ({coin.symbol.toUpperCase()}
                /USD)
            </Typography>
            <Typography variant="body2">
                Last updated {coin.market_data.last_updated}. Currency in USD.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    gap: '16px',
                    m: '18px 0',
                }}
            >
                <ButtonGroup>
                    {modeChart.map((chart) => (
                        <TimeButton
                            key={chart.label}
                            onClick={() => {
                                setCharts(chart.value);
                            }}
                            selected={chart.value === charts}
                        >
                            {chart.label}
                        </TimeButton>
                    ))}
                </ButtonGroup>
                <ButtonGroup>
                    {chartTimes.map((day) => (
                        <TimeButton
                            key={day.value}
                            onClick={() => {
                                setDays(day.value);
                            }}
                            selected={day.value === days}
                        >
                            {day.label}
                        </TimeButton>
                    ))}
                </ButtonGroup>
            </Box>
            <BoxChart>
                {!chartData ? (
                    <Loader />
                ) : (
                    <Line
                        data={{
                            labels: chartData.map((coin) => {
                                let date = new Date(coin[0]);
                                let time =
                                    date.getHours() > 12
                                        ? `${date.getHours() -
                                              12}:${date.getMinutes()} PM`
                                        : `${date.getHours()}:${date.getMinutes()} AM`;
                                return days === 1
                                    ? time
                                    : date.toLocaleDateString();
                            }),

                            datasets: [
                                {
                                    data: chartData.map((coin) => coin[1]),
                                    label: `Price ( Past ${days} Days) in USD`,
                                    borderColor: '#82b8ed',
                                },
                            ],
                        }}
                        options={{
                            elements: {
                                point: {
                                    radius: 1,
                                },
                            },
                        }}
                    />
                )}
            </BoxChart>
        </Grid>
    );
};

export default Chart;
