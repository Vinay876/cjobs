import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MoneyIcon from '@mui/icons-material/Money';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Chip from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';

function Content({ width, display, moneyType,duration }) {
    return (
        <>
            <Card sx={{
                width: width,
                m: width === '50%' ? '50px auto' : '20px auto',
                textAlign: 'center',
                padding: 2,
                transition: '.2s all',
                cursor: 'pointer',
                display: "flex",
                color: 'rgb(156, 39, 176)',
                alignItems: "center",
                borderRadius: 2,
                border: '1px solid rgb(156, 39, 176)',
                '&:hover': {
                    transform: width === '50%' ? 'scale(1.1)' : 'unset',
                    boxShadow: '2.1px 2.1px 15px 1px rgb(156, 39, 176)!important',
                    fontWeight: '500',
                    color: 'rgb(156, 39, 176)',
                }
            }}>
                <CardContent sx={{ textAlign: 'start', width: "100%" }}>
                    <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '25px', fontWeight: '700', fontFamily: 'Fredoka' }}>Job Type</Typography>
                    <Typography sx={{ color: 'black', opacity: "0.8", fontSize: '18px', mt: 1 }}>Company Name</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mt: 1 }}>
                        <LocationOnIcon sx={{ fontSize: '20px', }} />
                        <Typography sx={{ color: 'black', opacity: "0.7", fontSize: '18px', ml: 1 }}>city</Typography>
                    </Box>
                    <Divider light={false} sx={{ mt: 1 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: display === 'block' ? 'center' : 'space-between', flexWrap: 'wrap', mt: 1, }}>
                        <Box>
                            <Typography sx={{ display: 'flex', alignItems: 'center', }}>
                                <PlayCircleFilledIcon sx={{ fontSize: '1.2rem' }} />
                                <span style={{ marginLeft: '6px' }}>Start Date</span>
                            </Typography>
                            <Typography sx={{ color: 'black', textAlign: 'center' }}>details</Typography>
                        </Box>
                        {
                            duration ?
                                <Box>
                                    <Typography sx={{ display: 'flex', alignItems: 'center', }}>
                                        <CalendarTodayIcon sx={{ fontSize: '1.2rem' }} />
                                        <span style={{ marginLeft: '6px' }}>Duration</span>
                                    </Typography>
                                    <Typography sx={{ color: 'black', textAlign: 'center', ml: display === 'block' ? 'unset' : 1 }}>details</Typography>
                                </Box>
                                :
                                null
                        }

                        <Box>
                            <Typography sx={{ display: 'flex', alignItems: 'center', }}>
                                <MoneyIcon sx={{ fontSize: '1.2rem' }} />
                                <span style={{ marginLeft: '6px' }}>{moneyType}</span>
                            </Typography>
                            <Typography sx={{ color: 'black', textAlign: 'center', ml: display === 'block' ? 'unset' : 2 }}>details</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ display: 'flex', alignItems: 'center', }}>
                                <QueryBuilderIcon sx={{ fontSize: '1.2rem' }} />
                                <span style={{ marginLeft: '6px' }}>Apply by</span>
                            </Typography>
                            <Typography sx={{ color: 'black', textAlign: 'center', ml: display === 'block' ? 'unset' : 1 }}>details</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'erap', px: width === '90%' ? 0 : 2, mt: 4 }}>
                        <InfoIcon sx={{ fontSize: '1.2rem', marginTop: '2px' }} />
                        <Typography sx={{ fontSize: '16px', color: 'black', ml: 1 }}>Here comes some useful information</Typography>
                    </Box>

                    <Box sx={{ display: display, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: 3, px: 1, textAlign: 'center' }}>
                        <Box sx={{ display: display, alignItems: 'center' }}>
                            <Chip sx={{ ml: 1, fontSize: '14px', color: 'black', marginTop: display === 'block' ? '10px' : 0 }} label="Chip Filled" />
                            <Chip sx={{ ml: 1, fontSize: '14px', color: 'black', marginTop: display === 'block' ? '10px' : 0 }} label="Chip Filled" />
                        </Box>
                        <Box sx={{ marginTop: display === 'block' ? '20px' : 0 }}>
                            <Link href="" sx={{ textDecoration: 'none', color: 'rgb(156, 39, 176)', fontSize: '16px', fontFamily: "Fredoka", }}>View details</Link>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}



export default function ServiceCard({ moneyType,duration }) {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1000px)');
    const mdMax = useMediaQuery('(max-width:1000px)');
    const mdMin = useMediaQuery('(min-width:550px)');
    const sm = useMediaQuery('(max-width:550px)');



    return (
        <>
            {xlMax && xlMin && (
                <Content width={'50%'} display={'flex'} moneyType={moneyType} duration={duration} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content width={'80%'} display={'flex'} moneyType={moneyType} duration={duration} />
            )}
            {sm && (<Content width={'90%'} display={'block'} moneyType={moneyType} duration={duration} />
            )}
        </>
    )
}