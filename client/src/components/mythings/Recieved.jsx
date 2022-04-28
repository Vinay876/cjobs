import React from 'react'
import { Box, Typography, Link, useMediaQuery } from '@mui/material'
import { LoginContext } from '../../context/Context'
import { getApplications } from '../../api/postFetch'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs'
import PropTypes from 'prop-types'
import { seekerFind } from '../../api/seeker'
import { internshipSingleFetching, jobSingleFetching } from '../../api/postFetch'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}
export default function Recieved() {
    const { EmployerData} = React.useContext(LoginContext)
    const [data, setData] = React.useState([])
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    React.useState(() => {
        GetData('Job')
    }, [])

    async function GetData(type) {
        const response = await getApplications({
            Employer_id: EmployerData.User_id,
            Type: type
        })
        if (response) {
            setData(response)
        }
    }
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }} >
                <Tabs value={value} onChange={handleChange}>
                    <Tab sx={{ textTransform: 'none' }} label="Jobs" onClick={() => GetData('Job')} {...a11yProps(0)} />
                    <Tab sx={{ textTransform: 'none' }} label="Internships" onClick={() => GetData('Internship')} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {
                    data.length === 0 ?
                        <>
                            <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: '700', color: "black", fontFamily: 'Fredoka' }}>
                                No one applied yet.
                            </Typography>
                        </>
                        :
                        data.map((datas, index) => {
                            return (
                                <>
                                    <GetAll key={index} Post_id={datas.Post_id} Seeker_id={datas.User_id} Type={datas.Type} />
                                </>
                            )
                        })
                }
            </TabPanel>

            <TabPanel value={value} index={1}>
                {
                    data.length === 0 ?
                        <>
                            <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: '700', color: "black", fontFamily: 'Fredoka' }}>
                                No one applied yet.
                            </Typography>
                        </>
                        :
                        data.map((datas, index) => {
                            return (
                                <>
                                    <GetAll key={index} Post_id={datas.Post_id} Seeker_id={datas.User_id} Type={datas.Type} />
                                </>
                            )
                        })
                }
            </TabPanel>
        </>
    )
}


function GetAll({ Post_id, Seeker_id, Type }) {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1000px)');
    const mdMax = useMediaQuery('(max-width:1000px)');
    const mdMin = useMediaQuery('(min-width:550px)');
    const sm = useMediaQuery('(max-width:550px)');



    return (
        <>
            {xlMax && xlMin && (
                <Content width={'50%'} display={'flex'} Post_id={Post_id} Seeker_id={Seeker_id} Type={Type} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content width={'80%'} display={'flex'} Post_id={Post_id} Seeker_id={Seeker_id} Type={Type} />
            )}
            {sm && (<Content width={'90%'} display={'block'} Post_id={Post_id} Seeker_id={Seeker_id} Type={Type} />
            )}
        </>
    )
}

function Content({ width, Post_id, Seeker_id, Type }) {
    const [data, setData] = React.useState([])  // contains user data
    const [data2, setData2] = React.useState([]) // contains post data

    React.useEffect(() => {
        GetSeekerData()
        GetPostData()
    }, [])

    async function GetSeekerData() {
        const response = await seekerFind({ User_id: Seeker_id })
        if (response) {
            setData(response)
        }
    }
    async function GetPostData() {
        if (Type === 'Job') {
            const response = await jobSingleFetching({
                id: Post_id,
            })
            if (response) {
                setData2(response)
            }
        }
        else if (Type === 'Internship') {
            const response = await internshipSingleFetching({
                id: Post_id,
            })
            if (response) {
                setData2(response)
            }
        }

    }
    return (
        <>
            {
                Type === 'Job' ?
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
                            {
                                data ?

                                    <CardContent sx={{ textAlign: 'start', width: "100%" }}>
                                        <Link sx={{ textDecoration: 'none' }} href={`/other=seeker=${data.User_id}`}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                                <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', }}>{data.User_Name}</Typography>
                                                <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: '700', fontFamily: 'Fredoka', mx: 2 }}> - </Typography>
                                                <Link sx={{ textDecoration: 'none' }} href={`mailto:${data.User_Email}`}>
                                                    <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', }}>{data.User_Email}</Typography>
                                                </Link>
                                            </Box>
                                        </Link>

                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                            <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', }}>He Applied on Your Post of</Typography>
                                            <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1 }}>{data2.Job_Type} </Typography>
                                            <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', }}>in</Typography>
                                            <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1 }}>{data2.Job_Location}</Typography>
                                        </Box>
                                        {
                                            data2.Job_Post_Date ?
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', }}>Posted On</Typography>
                                                    <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1 }}>{data2.Job_Post_Date.slice(0, 10)} </Typography>
                                                </Box>
                                                :
                                                null
                                        }

                                        <Link sx={{ textDecoration: 'none', }} href={`/post=${Post_id}/user=${Seeker_id}/type=${Type.toLowerCase()}`}>
                                            <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center' }}>See Details</Typography>
                                        </Link>

                                    </CardContent>

                                    : null
                            }
                        </Card>
                    </>
                    :
                    null
            }

            {
                Type === 'Internship' ?
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
                            {
                                data ?

                                    <CardContent sx={{ textAlign: 'start', width: "100%" }}>
                                        <Link sx={{ textDecoration: 'none' }} href={`/other=seeker=${data.User_id}`}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                                <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', }}>{data.User_Name}</Typography>
                                                <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: '700', fontFamily: 'Fredoka', mx: 2 }}> - </Typography>
                                                <Link sx={{ textDecoration: 'none' }} href={`mailto:${data.User_Email}`}>
                                                    <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', }}>{data.User_Email}</Typography>
                                                </Link>
                                            </Box>
                                        </Link>

                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                            <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', }}>He Applied on Your Post of</Typography>
                                            <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1 }}>{data2.Internship_Type} </Typography>
                                            <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', }}>in</Typography>
                                            <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1 }}>{data2.Internship_Location}</Typography>
                                        </Box>
                                        {
                                            data2.Job_Post_Date ?
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', }}>Posted On</Typography>
                                                    <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1 }}>{data2.Job_Post_Date.slice(0, 10)} </Typography>
                                                </Box>
                                                : null
                                        }

                                        <Link sx={{ textDecoration: 'none', }} href={`/post=${Post_id}/user=${Seeker_id}/type=${Type.toLowerCase()}`}>
                                            <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center' }}>See Details</Typography>
                                        </Link>

                                    </CardContent>

                                    : null
                            }
                        </Card>
                    </>
                    :
                    null
            }
        </>
    )

}

