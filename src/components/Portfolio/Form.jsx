import React, { useContext, useState } from 'react';

import { CoinsContext } from '../../services/CryptoApiContext';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Button, Typography } from '@mui/material';
import TimePicker from './TimePicker';

import { useEffect } from 'react';

// Custom style MUI
const formStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '10px',
        width: '100%',
        maxHeight: '44px',
    },
    '& .MuiOutlinedInput-root:hover': {
        '& > fieldset': {
            borderColor: '',
        },
    },
};
const styleFormFilled = {
    '& .MuiFilledInput-root': {
        borderRadius: '10px',
        width: '100%',
    },
    '& .MuiFilledInput-input': {
        padding: '14px',
        fontSize: '20px',
        fontWeight: 500,
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
};

const titleForm = {
    fontWeight: '500',
    fontSize: '14px',
};

// Main function Modal's Form
const Form = ({ currentPrice, currentCoin }) => {
    const [coin, setCoin] = useState('Bitcoin');
    const [pricePerCoin, setPricePerCoin] = useState(0);
    const { coins } = useContext(CoinsContext);

    // Update state price and coin
    useEffect(() => {
        setPricePerCoin(currentPrice);
        setCoin(currentCoin);
    }, []);

    // Handle change when choose another coin
    const handleChange = (e) => {
        const currentCoin = e.target.value;
        setCoin(currentCoin);

        // Find and take current price
        const { current_price } = coins.find((obj) => {
            if (obj.name === currentCoin) return obj.current_price;
        });

        setPricePerCoin(current_price);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    width: '100%',
                    margin: '4px 0 14px',
                    bgcolor: 'primary.paper',
                },
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
                        <MenuItem key={option.id} value={option.name}>
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

                                {option.name}
                            </Box>
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Box>
                    <Typography variant="h5" sx={titleForm}>
                        Price Per Coin
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        type="number"
                        sx={formStyle}
                        value={pricePerCoin}
                    />
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
            </Box>
            <Box>
                <TimePicker formStyle={formStyle} />
            </Box>
            <Box>
                <Typography variant="h5" sx={titleForm}>
                    Total Spent
                </Typography>
                <TextField
                    id="outlined-basic"
                    variant="filled"
                    type="text"
                    defaultValue="$ 0"
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={styleFormFilled}
                />
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
    );
};

export default Form;
