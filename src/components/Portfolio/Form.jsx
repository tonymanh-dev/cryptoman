import React, { useContext, useState } from 'react';
import { AppContext } from '../../services/AppContext';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Button, Typography, Stack, Paper } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { FourGMobiledataOutlined } from '@mui/icons-material';

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
// const styleFormFilled = {
//     '& .MuiFilledInput-root': {
//         borderRadius: '10px',
//         width: '100%',
//     },
//     '& .MuiFilledInput-input': {
//         padding: '14px',
//         fontSize: '20px',
//         fontWeight: 500,
//         height: '30px',
//     },
//     '& .MuiFilledInput-root:before': {
//         borderBottom: 'none',
//     },
//     '& .MuiFilledInput-root:after': {
//         borderBottom: 'none',
//     },
//     '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
//         borderBottom: 'none',
//     },
//     '& .MuiFilledInput-root:hover:not(.Mui-disabled):after': {
//         borderBottom: 'none',
//     },
// };

const titleForm = {
    fontWeight: '500',
    fontSize: '14px',
};

// Main function Modal's Form
const Form = ({ data, handleCloseModal, handleToast }) => {
    const [value, setValue] = useState(new Date());
    const [pricePerCoin, setPricePerCoin] = useState();

    const [formData, setFormData] = useState({
        coinInput: '',
        priceInput: '',
        quantity: '',
        spent: '',
        time: value,
    });

    // console.log(formData);

    const { portfolio, coinForm, setCoinForm } = useContext(AppContext);

    const handleChange = (e) => {
        setPricePerCoin(e.target.value.current_price);

        setFormData((prevForm) => {
            return {
                ...prevForm,
                [e.target.name]: e.target.value,

                spent: formData.priceInput * formData.quantity,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // portfolio.map((coinData) => {
        //     coinData.symbol === formData.coinInput.symbol;
        // });

        const coin = formData.coinInput;

        const spentArr = [];
        spentArr.push(formData.spent);

        const quantityArr = [];
        quantityArr.push(Number(formData.quantity));

        // Handle add new coin
        setCoinForm((prevCoin) => {
            return [
                ...prevCoin,

                // New object
                {
                    id: coin.symbol,
                    name: coin.name,
                    symbol: coin.symbol,
                    image: coin.image,
                    currentPrice: coin.current_price,

                    quantity: quantityArr,
                    spents: spentArr,
                    time: formData.time,
                },
            ];
        });

        handleCloseModal();
        handleToast('Transaction successfully!');
    };

    console.log(portfolio);
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {
                        width: '100%',
                        margin: '4px 0 14px',
                        bgcolor: 'primary.paper',
                    },
                }}
                noValidate={false}
            >
                <Box>
                    <Typography variant="h5" sx={titleForm}>
                        Coins
                    </Typography>
                    <TextField
                        select
                        onChange={handleChange}
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
                            variant="outlined"
                            type="number"
                            inputProps={{
                                inputMode: 'numeric',
                                pattern: '[0-9]*',
                            }}
                            onChange={handleChange}
                            sx={formStyle}
                            value={pricePerCoin}
                            name="priceInput"
                        />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={titleForm}>
                            Quantity
                        </Typography>
                        <TextField
                            variant="outlined"
                            type="number"
                            sx={formStyle}
                            onChange={handleChange}
                            value={formData.quantity}
                            name="quantity"
                        />
                    </Box>
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
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            name="time"
                        />
                    </Stack>
                </LocalizationProvider>
                <Box>
                    <Typography variant="h5" sx={titleForm}>
                        Total Spent
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
                            ${formData.spent}
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
