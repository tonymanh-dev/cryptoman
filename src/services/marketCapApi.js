import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const marketCapApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: marketCapApiHeaders });

export const marketCapApi = createApi({
    reducerPath: 'marketCapApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getMarketCap: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCoinInfo: builder.query({
            query: (id) => createRequest(`/coin/${id}`),
        }),
    }),
});

export const { useGetMarketCapQuery, useGetCoinInfoQuery } = marketCapApi;
