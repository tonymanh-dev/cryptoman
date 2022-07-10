import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { AppProvider } from '../src/services/AppContext';
import App from './App';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppProvider>
                <App />
            </AppProvider>
        </Provider>
    </React.StrictMode>,
);
