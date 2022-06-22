import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.coingecko.com/api/v3/';

const createRequest = (url) => ({ url });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () =>
                createRequest(
                    '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
                ),
        }),
        getMarketStats: builder.query({
            query: () => createRequest('global'),
        }),
        getSingleCoin: builder.query({
            query: (id) => createRequest(`coins/${id}`),
        }),
        getMarketChart: builder.query({
            query: (id, days = 365) =>
                createRequest(
                    `coins/${id}/market_chart?vs_currency=usd&days=${days}`,
                ),
        }),
    }),
});

export const {
    useGetCryptosQuery,
    useGetMarketStatsQuery,
    useGetSingleCoinQuery,
    useGetMarketChartQuery,
} = cryptoApi;

// https://api.coingecko.com/api/v3coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

// Market chart
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1
