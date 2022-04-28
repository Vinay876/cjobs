import React from 'react'
import { Box, Typography, Link, Button, Tooltip } from '@mui/material'
import { internshipSingleFetching } from '../../../api/postFetch'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import MoneyIcon from '@mui/icons-material/Money';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { useMediaQuery } from '@mui/material'
import Chip from '@mui/material/Chip';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { LoginContext } from '../../../context/Context';

function Content({ id, width, applied }) {
    const [data, setData] = React.useState([])
    const { SeekerData } = React.useContext(LoginContext)
    React.useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const response = await internshipSingleFetching({ id: id })
        if (response) {
            setData(response)
        }
    }
    return (
        <>
            {
                data ?
                    <Box>
                        <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '700', fontFamily: 'Fredoka', color: "rgb(156, 39, 176)" }}>{data.Internship_Type}</Typography>
                        <Typography sx={{ textAlign: 'center', fontSize: '23px', fontWeight: '800', fontFamily: 'Fredoka' }}>{data.Organization_Name}</Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '16px', justifyContent: 'center' }}>
                            <LocationOnIcon sx={{ fontSize: '1.2rem' }} />
                            <span style={{ marginLeft: '6px', fontSize: '16px' }}>{data.Internship_Location}</span>
                        </Typography>
                        <Box sx={{ width: width, m: '30px auto', display: 'block' }}>
                            <Typography variant="h6" sx={{ fontFamily: 'Fredoka', color: "rgb(156, 39, 176)" }}> About {data.Organization_Name}</Typography>
                            <Typography variant="h7" sx={{ fontFamily: 'Fredoka', color: "rgb(156, 39, 176)" }}>{data.Organization_Details}</Typography>
                        </Box>
                        <Box sx={{ fontFamily: 'Fredoka', textDecoration: "none", mt: 3, color: 'blue', width: width, m: '20px auto' }}>
                            <Link sx={{ textDecoration: 'none' }} href={data.Organization_Website}>
                                <Typography variant="h7" sx={{ fontFamily: 'Fredoka' }}>Website</Typography>
                            </Link>
                            <Typography sx={{ color: 'black', fontSize: "16px", mt: 3 }}>Their headquarter is in -  <span style={{ color: 'black', fontSize: "16px", color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka' }}>{data.Organization_Address}</span></Typography>

                        </Box>
                        <Box sx={{ display: width === '60%' ? "flex" : 'block', justifyContent: 'flex-start', alignItems: 'center', width: width, m: '0px auto' }}>
                            <Typography sx={{ fontSize: "16px", my: width === '60%' ? 2 : 0 }}>Email Id - </Typography>
                            <Link href={`mailto:${data.Organization_Email}`} sx={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: "16px", my: width === '60%' ? 2 : 0, ml: width === '60%' ? 1 : 0, color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka' }}>{data.Organization_Email}</Typography>
                            </Link>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: '16px', width: width, m: '30px auto' }}>
                            <Box>
                                <Typography sx={{ display: 'flex', alignItems: 'center', color: 'rgb(156, 39, 176)', fontSize: '16px' }}>
                                    <PlayCircleFilledIcon sx={{ fontSize: '1.2rem' }} />
                                    <span style={{ marginLeft: 'px', fontSize: '16px' }}>Start Date</span>
                                </Typography>
                                <Typography sx={{ color: 'black', textAlign: 'center', fontSize: '16px' }}>{data.Start_Date}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '16px', color: "rgb(156, 39, 176)" }}>
                                    <CalendarTodayIcon sx={{ fontSize: '1.2rem' }} />
                                    <span style={{ marginLeft: '3px' }}>Duration</span>
                                </Typography>
                                <Typography sx={{ color: 'black', textAlign: 'center', fontSize: '16px' }}>{data.Internship_Duration}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ display: 'flex', alignItems: 'center', color: 'rgb(156, 39, 176)', fontSize: '16px' }}>
                                    <MoneyIcon sx={{ fontSize: '1.2rem' }} />
                                    <span style={{ marginLeft: '3px', fontSize: '16px' }}>Stipend</span>
                                </Typography>
                                <Typography sx={{ color: 'black', textAlign: 'center', fontSize: '16px' }}>&#8377; {data.Stipend}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ display: 'flex', alignItems: 'center', color: 'rgb(156, 39, 176)', fontSize: '16px' }}>
                                    <QueryBuilderIcon sx={{ fontSize: '1.2rem' }} />
                                    <span style={{ marginLeft: '3px', fontSize: '16px' }}>Apply by</span>
                                </Typography>
                                <Typography sx={{ color: 'black', textAlign: 'center', fontSize: '16px' }}>{data.Apply_By}</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ width: width, m: '30px auto', display: 'block' }}>
                            <Typography variant="h6" sx={{ fontFamily: 'Fredoka', color: "rgb(156, 39, 176)" }}>Detailed Description :</Typography>
                            <Typography variant="h7" sx={{ fontFamily: 'Fredoka', }}>{data.Detailed_Description}</Typography>
                        </Box>

                        <Box sx={{ width: width, m: '30px auto', display: 'block' }}>
                            <Typography variant="h6" sx={{ fontFamily: 'Fredoka', color: "rgb(156, 39, 176)" }}>Skill(s) Required :</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap', fontSize: '16px', mt: 3, }}>
                                {
                                    data.Skills_Required ?
                                        data.Skills_Required.map((data, index) => {
                                            return (
                                                <>
                                                    <Chip key={index} sx={{ ml: 1, fontSize: '14px', color: 'black', }} label={data} />
                                                </>
                                            )
                                        })
                                        : null
                                }
                            </Box>
                        </Box>

                        <Box sx={{ width: width, m: '30px auto', display: 'block' }}>
                            <Typography variant="h6" sx={{ fontFamily: 'Fredoka', color: "rgb(156, 39, 176)" }}>Who Can Apply :</Typography>
                            <Typography variant="h7" sx={{ fontFamily: 'Fredoka', }}>{data.Who_can_apply}</Typography>
                        </Box>

                        {
                            data.Internship_Post_Date ?
                                <Box sx={{ width: width, m: '30px auto', display: 'block' }}>
                                    <Typography variant="h6" sx={{ fontFamily: 'Fredoka', color: "rgb(156, 39, 176)" }}>Posted on:</Typography>
                                    <Typography variant="h7" sx={{ fontFamily: 'Fredoka', }}>{data.Internship_Post_Date.slice(0, 10)}</Typography>
                                </Box>
                                : null
                        }
                        <Box sx={{ width: width, m: '30px auto', display: 'block' }}>
                            <Typography sx={{ color: 'black', fontSize: "16px", mt: 3 }}>This vacancy is posted by :</Typography>
                            <Typography sx={{ color: 'black', fontSize: "16px", fontFamily: 'Fredoka' }}>{data.User_Name} who is {data.Organization_Name}'s {data.User_Designation}</Typography>

                            <Box sx={{ display: width === '60%' ? "flex" : 'block', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Typography sx={{ fontSize: "16px", my: 2 }}>You can contact him at -</Typography>
                                <Link href={`mailto:${data.User_Email}`} sx={{ textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: "16px", my: 2, ml: 1, color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka' }}>{data.User_Email}</Typography>
                                </Link>
                            </Box>
                        </Box>


                        {
                            data.Perks_Provided ?
                                <Box sx={{ width: width, m: '30px auto', display: 'block' }}>
                                    <Typography variant="h6" sx={{ fontFamily: 'Fredoka', color: "rgb(156, 39, 176)" }}>Perks Provided :</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap', fontSize: '16px', mt: 3, }}>
                                        {data.Perks_Provided.map((data, index) => {
                                            return (
                                                <>
                                                    <Chip key={index} sx={{ ml: 1, fontSize: '14px', color: 'black', }} label={data} />
                                                </>
                                            )
                                        })}
                                    </Box>
                                </Box>
                                : null
                        }

                        <Box sx={{ width: width, m: '30px auto', display: 'block' }}>
                            <Typography variant="h6" sx={{ fontFamily: 'Fredoka', color: "rgb(156, 39, 176)" }}>Number Of Openings :</Typography>
                            <Typography variant="h7" sx={{ fontFamily: 'Fredoka', }}>{data.Number_of_openings}</Typography>
                        </Box>
                        {
                             applied === 'true' ? null :
                                <>
                                    {
                                        SeekerData.Seeker ?
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Link href={`type=internship/apply=${data.Internship_id}&employer=${data.User_id}`} sx={{ textDecoration: 'none' }}>
                                                    <Button color="secondary" variant='contained' sx={{ boxShadow: 0, textTransform: 'none', cursor: 'pointer' }}>Apply Now </Button>
                                                </Link>
                                            </Box>
                                            :
                                            <Tooltip title="Please Login before appliying" key={data.name} placement="top" arrow>
                                                <Box sx={{ textAlign: 'center' }}>
                                                    <Button color="secondary" variant='contained' sx={{ boxShadow: 0, textTransform: 'none', cursor: 'no-drop', pointerEvents: 'none' }}>Apply Now </Button>
                                                </Box>
                                            </Tooltip>
                                    }
                                </>

                        }
                    </Box>
                    : <Typography sx={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '30px', fontWeight: '700' }}>Something Went Wrong Try again Later.</Typography>
            }
        </>
    )
}


export default function Internship({ id, applied }) {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1100px)');
    const mdMax = useMediaQuery('(max-width:1100px)');
    const mdMin = useMediaQuery('(min-width:650px)');
    const sm = useMediaQuery('(max-width:650px)');



    return (
        <>
            {xlMax && xlMin && (
                <Content id={id} width={'60%'} applied={applied} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content id={id} width={'80%'} applied={applied} />
            )}
            {sm && (<Content id={id} width={'95%'} applied={applied} />
            )}
        </>
    )
}