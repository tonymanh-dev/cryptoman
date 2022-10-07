import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCryptoNewsQuery } from '../services/newsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

import { Box, Breadcrumbs, TextField } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { TextLink, TextLink2 } from '../components/MuiCustom';
import CardNews from '../components/News/CardNews';
import Loader from '../components/Loader';

const News = () => {
    const { data } = useGetCryptosQuery(100);
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory,
        count: 12,
    });
    const navigate = useNavigate();

    if (!cryptoNews?.value) return <Loader />;

    return (
        <Box sx={{ mt: '10px', position: 'relative' }}>
            <Breadcrumbs
                sx={{ mb: '14px' }}
                separator={<NavigateNextIcon fontSize="small" />}
            >
                <TextLink
                    underline="hover"
                    onClick={() => navigate('/dashboard')}
                >
                    Home
                </TextLink>
                <TextLink2>News</TextLink2>
            </Breadcrumbs>
            <Box sx={{ maxWidth: '200px', m: '30px 0' }}>
                <TextField
                    label="Search by crypto"
                    variant="standard"
                    onChange={(e) => setNewsCategory(e.target.value)}
                />
            </Box>
            <CardNews data={data} cryptoNews={cryptoNews?.value} />
        </Box>
    );
};

export default News;
