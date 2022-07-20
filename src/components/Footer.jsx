import React from 'react';
import { Link } from 'react-router-dom';

import { Stack, Box, Typography, Divider } from '@mui/material';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { links } from '../utils/data';

const Footer = () => {
    return (
        <Box>
            <Divider />
            <Box
                sx={{
                    m: '24px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={1}
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                    {links.map((item) => (
                        <Link
                            to={item.link}
                            key={item.title}
                            style={{
                                cursor: 'pointer',
                                textDecoration: 'none',
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: 'primary.main',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Link>
                    ))}
                </Stack>
                <Stack
                    direction="row"
                    sx={{
                        p: '24px 0',
                        '.socialIcon': {
                            width: '30px',
                            height: '30px',
                            cursor: 'pointer',
                            marginRight: '10px',
                            '&.socialIcon:hover': {
                                color: 'primary.main',
                            },
                        },
                    }}
                >
                    <FaTwitter className="socialIcon" />
                    <FaFacebook className="socialIcon" />
                    <FaInstagram className="socialIcon" />
                </Stack>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: '24px',
                    }}
                >
                    <Typography variant="subtitle" fontSize="14px">
                        Disclaimer • Terms of Service • Privacy Policy
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ fontSize: '12px', color: 'text.secondary' }}
                    >
                        © 2022 CryptoMan. All Rights Reserved.
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default Footer;
