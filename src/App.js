import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import theme from './theme';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Market from './pages/Market';
import CoinPage from './pages/CoinPage';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Box, Stack, Container, ThemeProvider } from '@mui/material';

export const App = () => {
    const [mode, setMode] = useState('light');

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Box>
                    <Navbar />

                    <Container
                        maxWidth="xl"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            mt: '64px',
                            background: '#fff',
                        }}
                    >
                        <Box
                            sx={{
                                minWidth: '174px',
                                backgroundColor: '#fff',
                                display: { xs: 'none', lg: 'block' },
                            }}
                        >
                            <Sidebar />
                        </Box>
                        <Routes>
                            <Route path="" element={<Market />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/market" element={<Market />} />
                            <Route path="/coins/:id" element={<CoinPage />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Routes>
                    </Container>
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
};
export default App;
