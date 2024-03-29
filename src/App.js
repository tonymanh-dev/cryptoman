import React, { useContext, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './services/AppContext';

import './App.css';
import customTheme from './theme';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Market from './pages/Market';
import CoinPage from './pages/CoinPage';
import News from './pages/News';
import Defi from './pages/Defi';
import Alalytics from './pages/Alalytics';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/SideBar/Sidebar';
import {
    Box,
    Container,
    ThemeProvider,
    createTheme,
    CssBaseline,
} from '@mui/material';
import CoinTrack from './components/Portfolio/CoinTrack';
import Footer from './components/Footer';

export const App = () => {
    const { mode } = useContext(AppContext);

    const theme = useMemo(() => createTheme(customTheme(mode)), [mode]);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    maxWidth="xl"
                    sx={{
                        display: 'flex',
                        backgroundColor: 'background.default',
                    }}
                >
                    <Sidebar />

                    <Container
                        sx={{
                            backgroundColor: 'background.paper',
                        }}
                    >
                        <Navbar />

                        <Routes>
                            <Route path="" element={<Dashboard />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route
                                path="/portfolio/:name"
                                element={<CoinTrack />}
                            />
                            <Route path="/market" element={<Market />} />
                            <Route path="/coin/:id" element={<CoinPage />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/defi" element={<Defi />} />
                            <Route path="/alalytics" element={<Alalytics />} />
                        </Routes>
                        <Footer />
                    </Container>
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
};
export default App;
