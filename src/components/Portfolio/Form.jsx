import React, { useContext, useState } from 'react';
import { AppContext } from '../../services/AppContext';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Button, Typography, Stack, Paper } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

// Custom style MUI
const formStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '10px',
        width: '100%',
        maxHeight: '40px',
        borderColor: 'transparent',
        backgroundColor: 'background.default',
    },
    '& .MuiOutlinedInput-root:hover': {
        '& > fieldset': {
            borderColor: '',
        },
    },
};

const titleForm = {
    fontWeight: '500',
    fontSize: '14px',
};

// Main function Modal's Form
const Form = ({ data, handleCloseModal, handleToast, action }) => {
    const [dateValue, setDateValue] = useState(new Date().toUTCString());
    const [pricePerCoin, setPricePerCoin] = useState();
    const [formData, setFormData] = useState({
        coinInput: '',
        priceInput: '',
        quantity: '',
        totalValue: '',
        time: dateValue,
    });

    const { coinForm, setCoinForm, portfolio, setCoinTrack } =
        useContext(AppContext);

    // Variable to use below
    const COIN = formData.coinInput;
    const ACTION = action === 'BUY';
    const balance = portfolio.find(
        (coin) => coin.symbol === formData.coinInput.symbol,
    );
    const coinSymbol = formData.coinInput.symbol;

    // Calculate spent
    formData.totalValue = formData.priceInput * formData.quantity;

    // Take input value to formData state
    const handleChangeForm = (e) => {
        setPricePerCoin(e.target.value.current_price);

        setFormData((prevForm) => {
            const { name, value } = e.target;
            return {
                ...prevForm,
                [name]: value,
            };
        });
    };
    console.log(COIN.id);

    //Handle add new coin
    const handleAddNewCoin = () => {
        setCoinForm((prevCoin) => {
            return [
                ...prevCoin,

                // Update new object
                {
                    id: COIN.id,
                    name: COIN.name,
                    symbol: COIN.symbol,
                    image: COIN.image,
                    currentPrice: COIN.current_price,
                    time: [formData.time],
                    action: [action],

                    quantity: [Number(formData.quantity)],
                    cost: [Number(formData.totalValue)],

                    price: [Number(formData.priceInput)], //Price per coin
                    proceeds: [0], //Update in Sell action
                    profit: [],
                },
            ];
        });
    };

    // Handle update coin
    const handleUpdateCoin = () => {
        setCoinForm(
            coinForm.map((data) =>
                // Check condition
                data.symbol === COIN.symbol
                    ? {
                          ...data,
                          action: [...data.action, ACTION ? 'BUY' : 'SELL'],
                          time: [...data.time, formData.time],
                          quantity: [
                              ...data.quantity,
                              Number(
                                  ACTION
                                      ? formData.quantity
                                      : -formData.quantity,
                              ),
                          ],
                          cost: [
                              ...data.cost,
                              Number(ACTION ? formData.totalValue : ''),
                          ], //Total totalValue

                          price: [...data.price, Number(formData.priceInput)], //Price per coin

                          proceeds: [
                              ...data.proceeds,
                              Number(ACTION ? '' : formData.totalValue),
                          ], //Update in Sell action

                          profit: [],
                      }
                    : { ...data },
            ),
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check action to update portfolio data
        const isUpdate = coinForm.find((data) => data.id === COIN.id);
        isUpdate ? handleUpdateCoin() : handleAddNewCoin();

        // Data for only render detail portfolio coin
        setCoinTrack((prev) => {
            return [
                ...prev,

                {
                    id: COIN.id,
                    symbol: COIN.symbol,
                    name: COIN.name,
                    currentPrice: COIN.current_price,
                    date: formData.time.toString(),
                    action: action,

                    quantity: Number(
                        ACTION ? formData.quantity : -formData.quantity,
                    ),
                    cost: Number(ACTION ? formData.totalValue : ''),
                    price: Number(formData.priceInput),
                    proceeds: Number(ACTION ? '' : formData.totalValue),
                    profit: '',
                },
            ];
        });

        // Handle action modal and toast
        handleCloseModal();
        handleToast('Transaction successfully!');
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {
                        width: '100%',
                        margin: '4px 0 14px',
                    },
                }}
                noValidate={false}
            >
                <Box>
                    <Typography variant="h5" sx={titleForm}>
                        Coin
                    </Typography>
                    <TextField
                        select
                        onChange={handleChangeForm}
                        sx={formStyle}
                        value={formData.coinInput}
                        name="coinInput"
                    >
                        {data.map((option) => (
                            <MenuItem key={option.id} value={option}>
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
                    <Stack
                        direction="row"
                        sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h5" sx={titleForm}>
                            Price Per Coin
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{ fontSize: '14px', fontWeight: '400' }}
                        >
                            {/* Current Price: ${pricePerCoin} */}
                        </Typography>
                    </Stack>

                    {/* Fix update current price form */}
                    <TextField
                        variant="outlined"
                        type="number"
                        inputProps={{
                            inputMode: 'numeric',
                            pattern: '[0-9]*',
                        }}
                        onChange={handleChangeForm}
                        sx={formStyle}
                        value={pricePerCoin}
                        name="priceInput"
                    />
                </Box>
                <Box>
                    <Stack
                        direction="row"
                        sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h5" sx={titleForm}>
                            Quantity
                        </Typography>
                        {!ACTION && balance && (
                            <Typography
                                variant="h5"
                                sx={{ fontSize: '14px', fontWeight: '400' }}
                            >
                                Balance: {balance.quantity}{' '}
                                {coinSymbol && coinSymbol.toUpperCase()}
                            </Typography>
                        )}
                    </Stack>
                    <TextField
                        variant="outlined"
                        type="number"
                        sx={formStyle}
                        onChange={handleChangeForm}
                        value={formData.quantity}
                        name="quantity"
                    />
                </Box>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <Typography
                            variant="h6"
                            fontSize="14px"
                            fontWeight="500"
                        >
                            Date & Time
                        </Typography>
                        <MobileDateTimePicker
                            renderInput={(params) => (
                                <TextField sx={formStyle} {...params} />
                            )}
                            value={dateValue}
                            onChange={(newValue) => {
                                setDateValue(newValue);
                            }}
                            name="time"
                        />
                    </Stack>
                </LocalizationProvider>
                <Box>
                    <Typography variant="h5" sx={titleForm}>
                        {ACTION ? 'Total Spent' : 'Total Received'}
                    </Typography>
                    <Paper
                        sx={{
                            height: '54px',
                            display: 'flex',
                            alignItems: 'center',
                            m: '6px 0 20px 0',
                            boxShadow: 'none',
                            borderRadius: '10px',
                            backgroundColor: 'background.default',
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ fontSize: '20px', p: '0 14px' }}
                        >
                            ${formData.totalValue}
                        </Typography>
                    </Paper>
                </Box>
                <Button
                    disabled={formData.coinInput ? false : true}
                    onClick={handleSubmit}
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
        </>
    );
};

export default Form;
