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
import MoneyIcon from '@mui/icons-material/Money';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Chip from '@mui/material/Chip';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InfoIcon from '@mui/icons-material/Info';

function Content({ width, display, data, applied }) {
    return (
        <>
            <Card sx={{
                width: width,
                m: width === '50%' ? '50px auto' : '20px auto',
                textAlign: 'center',
                padding: 2,
                transition: '.2s all',
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
                    <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '22px', fontWeight: '700', fontFamily: 'Fredoka' }}>{data.Internship_Type}</Typography>
                    <Link sx={{ textDecoration: 'none', }} href={`/other=employer=${data.User_id}`}>
                        <Typography sx={{ color: 'black', fontSize: '16px', }}>{data.Organization_Name}</Typography>
                    </Link>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>
                        <LocationOnIcon sx={{ fontSize: '20px', }} />
                        <Typography sx={{ color: 'black', fontSize: '16px', ml: 1 }}>{data.Internship_Location}</Typography>
                    </Box>
                    <Typography sx={{ color: 'black', opacity: "0.8", fontSize: '16px', }}>Posted on - {data.Internship_Post_Date.slice(0, 10)}</Typography>
                    <Divider light={false} sx={{}} />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: 1, }}>
                        <Box>
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                <PlayCircleFilledIcon sx={{ fontSize: '1.2rem' }} />
                                <span style={{ marginLeft: '6px' }}>Start Date</span>
                            </Typography>
                            <Typography sx={{ color: 'black', textAlign: 'center', fontSize: '16px' }}>{data.Start_Date}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                <CalendarTodayIcon sx={{ fontSize: '1.2rem' }} />
                                <span style={{ marginLeft: '6px' }}>Duration</span>
                            </Typography>
                            <Typography sx={{ color: 'black', textAlign: 'center', fontSize: '16px' }}>{data.Internship_Duration}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                <MoneyIcon sx={{ fontSize: '1.2rem' }} />
                                <span style={{ marginLeft: '6px' }}>Stipend</span>
                            </Typography>
                            <Typography sx={{ color: 'black', textAlign: 'center', ml: display === 'block' ? 'unset' : 2, fontSize: '16px' }}>&#8377; {data.Stipend}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                <QueryBuilderIcon sx={{ fontSize: '1.2rem' }} />
                                <span style={{ marginLeft: '6px' }}>Apply by</span>
                            </Typography>
                            <Typography sx={{ color: 'black', textAlign: 'center', ml: display === 'block' ? 'unset' : 1, fontSize: '16px' }}>{data.Apply_By}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'erap', px: width === '90%' ? 0 : 2, my: 2 }}>
                        <InfoIcon sx={{ fontSize: '1.2rem', marginTop: '2px' }} />
                        <Typography sx={{ fontSize: '16px', color: 'black', ml: 1 }}>{data.Short_Description}</Typography>
                    </Box>

                    <Box sx={{ display: display, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: 3, px: 1, textAlign: 'center' }}>
                        <Box sx={{ display: display, alignItems: 'center' }}>
                            {
                                data.Internship_Tags.map((datas, index) => {
                                    return (
                                        <>
                                            <Chip sx={{ ml: 1, fontSize: '14px', color: 'black', marginTop: display === 'block' ? '10px' : 0 }} label={datas} />
                                        </>
                                    )
                                })
                            }
                        </Box>
                        <Box sx={{ marginTop: display === 'block' ? '20px' : 0 }}>
                            <Link href={`/description-internship=${data.Internship_id}&applied=${applied}`} sx={{ textDecoration: 'none', color: 'rgb(156, 39, 176)', fontSize: '16px', fontFamily: "Fredoka", }}>View details</Link>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}



export default function ServiceCard2({ data, applied }) {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1000px)');
    const mdMax = useMediaQuery('(max-width:1000px)');
    const mdMin = useMediaQuery('(min-width:550px)');
    const sm = useMediaQuery('(max-width:550px)');
    return (
        <>
            {xlMax && xlMin && (
                <Content width={'50%'} display={'flex'} data={data} applied={applied} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content width={'80%'} display={'flex'} data={data} applied={applied} />
            )}
            {sm && (<Content width={'90%'} display={'block'} data={data} applied={applied} />
            )}
        </>
    )
}