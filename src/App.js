import React, { useContext, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CoinsContext } from './services/CryptoApiContext';

import './App.css';
import customPalette from './palette';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Market from './pages/Market';
import CoinPage from './pages/CoinPage';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/SideBar/Sidebar';
import {
    Box,
    Container,
    ThemeProvider,
    createTheme,
    CssBaseline,
} from '@mui/material';

export const App = () => {
    const { mode } = useContext(CoinsContext);

    const theme = useMemo(() => createTheme(customPalette(mode)), [mode]);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box bgcolor="background.default">
                    <Navbar />

                    <Container
                        maxWidth="xl"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            mt: '64px',
                            backgroundColor: 'background.default',
                        }}
                    >
                        {<Sidebar />}

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
