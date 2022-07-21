import React, { useState } from 'react';

import SelectBtn from './SelectBtn';
import { porfolioChart } from '../../utils/data';
import { balanceData } from '../../utils/dummy';
import { CardStyled, Heading } from './styled';
import { Box, Grid, CardContent, Stack } from '@mui/material';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    plugins,
} from 'chart.js';
import { Doughnut, Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    plugins,
);

const Statistics = ({ portfolio, getStats }) => {
    const [chart, setChart] = useState(365);
    const balance = getStats().balance;

    const getPercentage = (total, value) => {
        return (value / total) * 100;
    };
    const topPerform = portfolio
        .map((coin) => coin.profit)
        .sort((acc, cur) => cur - acc);

    const topPerformName = portfolio
        .map((coin) => coin)
        .sort((acc, cur) => cur.profit - acc.profit)
        .map((coin) => coin.name);

    return (
        <Stack
            sx={{
                mt: '24px',
                color: 'text.primary',
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <CardStyled>
                            <CardContent
                                sx={{
                                    minHeight: {
                                        xs: 'auto',
                                        md: '430px',
                                        lg: '470px',
                                    },
                                    // maxHeight: '430px',
                                }}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent=" space-between"
                                >
                                    <Heading>Balance Chartview</Heading>
                                    <Box>
                                        {porfolioChart.map((view) => (
                                            <SelectBtn
                                                key={view.label}
                                                onClick={() =>
                                                    setChart(view.value)
                                                }
                                                selected={view.value === chart}
                                            >
                                                {view.label}
                                            </SelectBtn>
                                        ))}
                                    </Box>
                                </Stack>
                                <Box>
                                    <Line
                                        data={{
                                            labels: balanceData.map(
                                                (data) => data.date,
                                            ),
                                            datasets: [
                                                {
                                                    fill: true,
                                                    label: 'Balance Chart',
                                                    data: balanceData
                                                        .map((data) =>
                                                            data.date === 'Dec'
                                                                ? {
                                                                      ...data,
                                                                      value: balance,
                                                                  }
                                                                : data,
                                                        )
                                                        .map(
                                                            (data) =>
                                                                data.value,
                                                        ),
                                                    borderColor:
                                                        'rgb(121, 139, 255)',
                                                    backgroundColor:
                                                        'rgba(121, 139, 255, 0.123)',
                                                    // backgroundColor: 'linear-gradient(to bottom, #9be15d, #39b385',
                                                },
                                            ],
                                        }}
                                        options={{
                                            elements: {
                                                point: {
                                                    radius: 0.5,
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                            </CardContent>
                        </CardStyled>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardStyled>
                            <CardContent
                                sx={{
                                    minHeight: {
                                        xs: 'auto',
                                        md: '430px',
                                        lg: '470px',
                                    },
                                }}
                            >
                                <Stack mb="16px">
                                    <Heading>Dominance</Heading>
                                </Stack>
                                <Doughnut
                                    data={{
                                        labels: portfolio.map(
                                            (coin) => coin.name,
                                        ),
                                        datasets: [
                                            {
                                                label: 'Doughnut',
                                                data: portfolio.map((data) =>
                                                    getPercentage(
                                                        balance,
                                                        data.totalValue,
                                                    ).toFixed(2),
                                                ),
                                                backgroundColor: [
                                                    '#FF6384',
                                                    '#36A2EB',
                                                    '#FFCE56',
                                                    '#798BFF',
                                                    '#0ecb81',
                                                    '#4bc0c0',
                                                    '#ff9f40',
                                                ],
                                                borderColor: [
                                                    '#FF6384',
                                                    '#36A2EB',
                                                    '#FFCE56',
                                                    '#798BFF',
                                                    '#0ecb81',
                                                    '#4bc0c0',
                                                    '#ff9f40',
                                                ],
                                                borderWidth: 1,
                                                hoverBorderColor: '#fff',
                                            },
                                        ],
                                    }}
                                    options={{
                                        responsive: true,

                                        plugins: {
                                            legend: {
                                                // display: false,
                                                textDirection: 'none',
                                                align: 'center',
                                                position: 'bottom',
                                                labels: {
                                                    font: 14,
                                                    padding: 10,
                                                },
                                            },
                                        },
                                    }}
                                    plugins={{
                                        datalabels: {
                                            formatter: (value) => {
                                                return value + '%';
                                            },
                                        },
                                    }}
                                />
                            </CardContent>
                        </CardStyled>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardStyled>
                            <CardContent>
                                <Heading>Profit/Value</Heading>
                                <Bar
                                    data={{
                                        labels: portfolio.map(
                                            (coin) => coin.name,
                                        ),
                                        datasets: [
                                            {
                                                label: 'Total Value',
                                                data: portfolio.map(
                                                    (coin) => coin.totalValue,
                                                ),

                                                backgroundColor: '#798BFF',
                                            },
                                            {
                                                label: 'Profit/Loss',
                                                data: portfolio.map(
                                                    (coin) => coin.profit,
                                                ),
                                                backgroundColor: '#0ecb81',
                                            },
                                        ],
                                    }}
                                    options={{
                                        layout: {
                                            padding: 20,
                                        },
                                    }}
                                />
                            </CardContent>
                        </CardStyled>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardStyled>
                            <CardContent>
                                <Heading>Top performance</Heading>
                                <Bar
                                    data={{
                                        labels: topPerformName,
                                        datasets: [
                                            {
                                                label: 'Top perfomance',
                                                data: topPerform,

                                                backgroundColor: '#798BFF',
                                            },
                                        ],
                                    }}
                                    options={{
                                        layout: {
                                            padding: 20,
                                        },
                                    }}
                                />
                            </CardContent>
                        </CardStyled>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
};

export default Statistics;
