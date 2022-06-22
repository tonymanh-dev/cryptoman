import React, { useState } from 'react';
import parse from 'html-react-parser';
import { Box, Button, Typography, styled } from '@mui/material';

const More = ({ coin }) => {
    const [readMore, setReadMore] = useState(false);
    const coinInfo = coin.description.en;

    const handleReadMore = () => {
        setReadMore(!readMore);
    };

    const ReadMoreBtn = styled(Button)(({ theme }) => ({
        justifyContent: 'left',
        padding: '4px 0',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }));

    const Content = styled(Typography)(({ theme }) => ({
        height: '100%',
        textOverflow: 'ellipsis',
        overflowWrap: 'break-word',
        overflow: 'hidden',
        a: { textDecoration: 'none', color: theme.palette.primary.main },
    }));

    const ShadowContent = styled(Box)(() => ({
        content: '""',
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        width: '100%',
        height: '8em',
        background:
            'linear-gradient(180deg, rgba(255,255,255,0.123) 30%, rgba(243,243,243,0.9) 60%)',
    }));

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                    m: '50px 0',
                }}
            >
                <Box>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: '500', m: '16px 0' }}
                    >
                        What is {coin.name}
                    </Typography>
                    <Content variant="body1">
                        {readMore
                            ? parse(coinInfo)
                            : parse(coinInfo.substring(0, 300)) + '...'}
                        {!readMore && <ShadowContent />}
                    </Content>
                </Box>
                <ReadMoreBtn variant="text" onClick={handleReadMore}>
                    {readMore ? 'Read less' : 'Read more'}
                </ReadMoreBtn>
            </Box>

            {/* More infomation here */}
        </Box>
    );
};

export default More;
