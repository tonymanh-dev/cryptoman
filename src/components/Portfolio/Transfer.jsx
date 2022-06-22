import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { Avatar, Button, Typography } from '@mui/material'
import TimePicker from './TimePicker'

import { account1 } from '../../data/dummy'
import { useState } from 'react'

const porfolio = account1.map((coin) => coin.portfolio)
const coins = porfolio[0].map((coin) => {
    return {
        value: coin.symbol,
        label: coin.coin,
        image: coin.image,
    }
})

const transfers = [
    {
        value: 'OUT',
        label: 'Transfer out',
    },
    {
        value: 'IN',
        label: 'Transfer in',
    },
]

const formStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '10px',
        width: '100%',
        maxHeight: '44px',
    },
    '& .MuiOutlinedInput-root:hover': {
        '& > fieldset': {
            borderColor: 'primary.main',
        },
    },
}
const styleFormFilled = {
    '& .MuiFilledInput-root': {
        borderRadius: '10px',
        width: '100%',
    },
    '& .MuiFilledInput-input': {
        padding: '14px',
        fontSize: '16px',
        fontWeight: 400,
        height: '30px',
    },
    '& .MuiFilledInput-root:before': {
        borderBottom: 'none',
    },
    '& .MuiFilledInput-root:after': {
        borderBottom: 'none',
    },
    '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
        borderBottom: 'none',
    },
    '& .MuiFilledInput-root:hover:not(.Mui-disabled):after': {
        borderBottom: 'none',
    },
}

const titleForm = {
    fontWeight: '500',
    fontSize: '14px',
}

export default function SelectTextFields({ currentCoin }) {
    const [coin, setCoin] = React.useState('BTC')
    const [transfer, setTransfer] = useState('IN')

    console.log(currentCoin)

    const handleChange = (e) => {
        setCoin(e.target.value)
    }

    const handleChangeTransfer = (e) => {
        setTransfer(e.target.value)
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '100%', margin: '4px 0 14px' },
            }}
            noValidate
            autoComplete="off"
        >
            <Box>
                <Typography variant="h5" sx={titleForm}>
                    Coins
                </Typography>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    value={coin}
                    onChange={handleChange}
                    sx={formStyle}
                >
                    {coins.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar
                                    src={option.image}
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        marginRight: '10px',
                                    }}
                                />

                                {option.label}
                            </Box>
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box>
                <Typography variant="h5" sx={titleForm}>
                    Transfer
                </Typography>
                <TextField
                    id="filled-select-currency-native"
                    select
                    value={transfer}
                    onChange={handleChangeTransfer}
                    SelectProps={{
                        native: true,
                    }}
                    variant="filled"
                    sx={styleFormFilled}
                >
                    {transfers.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </Box>
            <Box>
                <Typography variant="h5" sx={titleForm}>
                    Quantity
                </Typography>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="number"
                    sx={formStyle}
                />
            </Box>
            <Box>
                <TimePicker formStyle={formStyle} />
            </Box>

            <Button
                variant="contained"
                sx={{
                    height: '46px',
                    width: '100%',
                    fontSize: '16px',
                    color: 'primary.white',
                    borderRadius: '10px',
                }}
            >
                Add Transaction
            </Button>
        </Box>
    )
}
