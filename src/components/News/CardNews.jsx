import React from 'react';
import moment from 'moment';
import {
    Box,
    Stack,
    Grid,
    Card,
    CardMedia,
    Typography,
    CardContent,
    Link,
    Avatar,
} from '@mui/material';

const defaultImage =
    'https://academy-public.coinmarketcap.com/optimized-uploads/a2a1689d9b3f4414ba1c890eededbb75.jpg';

const CardNews = ({ data, cryptoNews }) => {
    return (
        <Box sx={{ flexGrow: 1, mb: '100px' }}>
            <Grid container spacing={4}>
                {cryptoNews.map((item, i) => (
                    <Grid key={i} item xs={12} md={6} lg={4}>
                        <Card
                            sx={{
                                borderRadius: '10px',
                                height: '300px',
                                overflow: 'hidden',
                            }}
                        >
                            <Link
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                underline="none"
                            >
                                <Stack
                                    sx={{
                                        height: '100%',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        sx={{
                                            padding: '14px',
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            color="text.secondary"
                                            sx={{
                                                fontSize: '20px',
                                                fontWeight: '500',
                                                overflow: 'hidden',
                                                whiteSpace: 'normal',
                                                textOverflow: 'ellipsis',
                                                maxHeight: '100px',
                                            }}
                                        >
                                            {item.name.length > 100
                                                ? `${item.name.substring(
                                                      0,
                                                      100,
                                                  )}...`
                                                : item.name}
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            image={
                                                item?.image?.thumbnail
                                                    ?.contentUrl || defaultImage
                                            }
                                            alt="image"
                                            sx={{
                                                width: 120,
                                                height: 120,
                                                ml: '20px',
                                                borderRadius: '6px',
                                            }}
                                        />
                                    </Stack>
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {item.description.length > 150
                                                ? `${item.description.substring(
                                                      0,
                                                      150,
                                                  )}...`
                                                : item.description}
                                        </Typography>
                                        <Stack
                                            direction="row"
                                            sx={{
                                                mt: '10px',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Avatar
                                                src={
                                                    item.provider[0]?.image
                                                        ?.thumbnail
                                                        ?.contentUrl ||
                                                    defaultImage
                                                }
                                            />
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                            >
                                                {moment(item.datePublished)
                                                    .startOf('ss')
                                                    .fromNow()}
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Stack>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CardNews;
