import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Button, Typography, Paper } from '@mui/material';
import TimePicker from './TimePicker';

import { AppContext } from '../../services/AppContext';
import { useState } from 'react';

const transfers = [
    {
        value: 'OUT',
        label: 'Transfer out',
    },
    {
        value: 'IN',
        label: 'Transfer in',
    },
];

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
};
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
};

const titleForm = {
    fontWeight: '500',
    fontSize: '14px',
};

const Transfer = ({ handleCloseModal, handleToast }) => {
    const [pricePerCoin, setPricePerCoin] = useState();
    const [value, setValue] = useState(new Date());

    const [formData, setFormData] = useState({
        coinInput: '',
        transfer: 'OUT',
        quantity: '',
        totalValue: '',
        time: value,
    });

    const { portfolio } = useContext(AppContext);

    const handleChangeForm = (e) => {
        setFormData((prevForm) => {
            const { name, value } = e.target;
            return {
                ...prevForm,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleToast('Transaction successfully!');
        handleCloseModal();
    };

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
                    select
                    sx={formStyle}
                    onChange={handleChangeForm}
                    value={formData.coinInput}
                    name="coinInput"
                >
                    {portfolio.map((option) => (
                        <MenuItem key={option.symbol} value={option}>
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
            <Box>
                <Typography variant="h5" sx={titleForm}>
                    Transfer
                </Typography>
                <TextField
                    id="filled-select-currency-native"
                    select
                    SelectProps={{
                        native: true,
                    }}
                    variant="filled"
                    sx={styleFormFilled}
                    value={formData.transfer}
                    onChange={handleChangeForm}
                    name="transfer"
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
                    onChange={handleChangeForm}
                    value={formData.quantity}
                    name="quantity"
                />
            </Box>
            <Box>
                <TimePicker
                    formStyle={formStyle}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    name="time"
                />
            </Box>
            {/* <Box>
                <Typography variant="h5" sx={titleForm}>
                    Total Value
                </Typography>
                <Paper
                    sx={{
                        height: '54px',
                        display: 'flex',
                        alignItems: 'center',
                        mb: '24px',
                        boxShadow: 'none',
                        borderRadius: '10px',
                        mt: '6px',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ fontSize: '20px', p: '0 14px' }}
                    >
                        ${formData.totalValue}
                    </Typography>
                </Paper>
            </Box> */}

            <Button
                disabled={
                    formData.coinInput && formData.quantity ? false : true
                }
                variant="contained"
                sx={{
                    height: '46px',
                    width: '100%',
                    fontSize: '16px',
                    color: 'primary.white',
                    borderRadius: '10px',
                }}
                onClick={handleSubmit}
            >
                Add Transaction
            </Button>
        </Box>
    );
};

export default Transfer;
