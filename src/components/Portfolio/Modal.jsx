import React, { useState } from 'react';

import { styled, Box, Button, Typography, Modal, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CloseIcon from '@mui/icons-material/Close';

import Form from './Form';
import Transfer from './Transfer';

// Custom style MUI

const BoxStyled = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: '600px',
    padding: '16px 24px',
    boxShadow: theme.shadows[4],
    borderRadius: '10px',
    backgroundColor: theme.palette.background.paper,
}));

const TabStyled = styled(Tab)(() => ({
    fontWeight: '500',
    fontSize: '14px',
}));

const TabPanelStyled = styled(TabPanel)(() => ({
    margin: '20px',
    padding: '0',
}));

// Main function Modal
const ModalForm = ({ data, openModal, handleCloseModal, handleToast }) => {
    const [value, setValue] = useState('BUY');

    // Handle tab action Buy, Sell, Transfer
    const handleChangeAction = (_e, newAction) => {
        setValue(newAction);
    };

    return (
        <div>
            <Modal open={openModal} onClose={handleCloseModal}>
                <BoxStyled>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            m: '0 24px',
                        }}
                    >
                        <Typography variant="h5" fontWeight="500">
                            Add Transaction
                        </Typography>
                        <Button
                            sx={{
                                borderRadius: 10,
                                p: '0',
                                minWidth: '32px',
                                justifyContent: 'center',
                            }}
                            onClick={handleCloseModal}
                        >
                            <CloseIcon />
                        </Button>
                    </Box>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box
                                sx={{
                                    borderBottom: 1,
                                    borderColor: 'divider',
                                    m: '0 24px',
                                }}
                            >
                                <TabList
                                    onChange={handleChangeAction}
                                    aria-label="tab actions"
                                    sx={{
                                        '& .MuiTabs-flexContainer': {
                                            justifyContent: 'space-between',
                                        },
                                    }}
                                >
                                    <TabStyled label="BUY" value="BUY" />
                                    <TabStyled label="SELL" value="SELL" />
                                    <TabStyled
                                        label="TRANSFER"
                                        value="TRANSFER"
                                    />
                                </TabList>
                            </Box>
                            {['BUY', 'SELL', 'TRANSFER'].map((action) => (
                                <TabPanelStyled value={action} key={action}>
                                    {action === 'TRANSFER' ? (
                                        <Transfer
                                            action={action}
                                            handleToast={handleToast}
                                            handleCloseModal={handleCloseModal}
                                        />
                                    ) : (
                                        <Form
                                            action={action}
                                            data={data}
                                            handleCloseModal={handleCloseModal}
                                            handleToast={handleToast}
                                        />
                                    )}
                                </TabPanelStyled>
                            ))}
                        </TabContext>
                    </Box>
                </BoxStyled>
            </Modal>
        </div>
    );
};

export default ModalForm;
