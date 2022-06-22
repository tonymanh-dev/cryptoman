import { configureStore } from '@reduxjs/toolkit';
import { marketCapApi } from '../services/marketCapApi';
import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
    reducer: {
        [marketCapApi.reducerPath]: marketCapApi.reducer,
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
});
