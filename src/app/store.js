import { configureStore } from '@reduxjs/toolkit';
import { marketCapApi } from '../services/marketCapApi';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/newsApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [marketCapApi.reducerPath]: marketCapApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
});
