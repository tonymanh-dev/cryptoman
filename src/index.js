import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { CryptoApiProvider } from '../src/services/CryptoApiContext'
import App from './App'
import store from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <CryptoApiProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </CryptoApiProvider>
    </React.StrictMode>,
)
