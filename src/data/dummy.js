import React from 'react'
import { useContext } from 'react'
import { CoinsContext } from '../services/CryptoApiContext'

export const account1 = [
    {
        id: 1,
        userName: 'tony',
        passWord: '1111',
        name: 'Tony',

        portfolio: [
            {
                id: 1,
                coin: 'Bitcoin',
                symbol: 'BTC',
                image:
                    'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
                current_price: 30.089,
                balance: 0.56,
                value: 15.6,
                avarage_price: 8.2,
            },
            {
                id: 2,
                coin: 'Ethereum',
                symbol: 'ETH',
                image:
                    'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
                current_price: 2.398,
                balance: 0.56,
                value: 15.6,
                avarage_price: 8.2,
            },
            {
                id: 3,
                coin: 'Polkadot',
                symbol: 'DOT',
                image:
                    'https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png?1639712644',
                current_price: 98,
                balance: 0.56,
                value: 15.6,
                avarage_price: 8.2,
            },
        ],
        movements: [
            {
                moveId: '001',
                symbol: 'BTC',
                type: 'Buy',
                quantity: 0.5,
                price: 29.0,
                spent: 14.5,
                time: '2022/June/16',
            },
            {
                moveId: '002',
                symbol: 'ETH',
                type: 'Buy',
                quantity: 0.5,
                price: 29.0,
                spent: 14.5,
                time: '2022/June/18',
            },
            {
                moveId: '003',
                symbol: 'DOT',
                type: 'Buy',
                quantity: 0.5,
                price: 29.0,
                spent: 14.5,
                time: '2022/June/20',
            },
        ],
    },
]
