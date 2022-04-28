import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography, Link, } from '@mui/material'
import { getSingleApplications, internshipSingleFetching, jobSingleFetching } from '../api/postFetch'
import { seekerFind } from '../api/seeker'
// import ServiceCard2 from '../components/services/Card2'
// import ServiceCard from '../components/services/Card'
import Header from '../components/head/Header'
import { LoginContext } from '../context/Context'

export default function Forms() {
    const { post, user, type } = useParams()
    const { EmployerData, toTitle } = React.useContext(LoginContext)
    const [data, setData] = React.useState([])  // contains user data
    const [data2, setData2] = React.useState([]) // contains post data
    const [data3, setData3] = React.useState([]) // contains application data

    React.useEffect(() => {
        GetSeekerData()
        GetPostData()
        GetApplicationData(type)
    }, [])


    async function GetApplicationData(type) {
        const response = await getSingleApplications({
            Employer_id: EmployerData.User_id,
            Post_id: post,
            User_id: user,
            Type: toTitle(type)
        })
        if (response) {
            setData3(response)
        }
    }

    async function GetSeekerData() {
        const response = await seekerFind({ User_id: user })
        if (response) {
            setData(response)
        }
    }
    async function GetPostData() {
        if (type === 'job') {
            const response = await jobSingleFetching({
                id: post,
            })
            if (response) {
                setData2(response)
            }
            return
        }
        if (type === 'internship') {
            const response = await internshipSingleFetching({
                id: post,

            })
            if (response) {
                setData2(response)
            }
            return
        }
    }
    console.log(data2);
    return (
        <>
            <Header />
            <div style={{ marginTop: '5rem' }}></div>
            {
                type === 'job' ?
                    <>
                        {
                            data && data2 && data3 ?

                                <Box sx={{ textAlign: 'start', width: "100%" }}>
                                    <Link sx={{ textDecoration: 'none' }} href={`/other=seeker=${data.User_id}`}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                            <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', }}>{data.User_Name}</Typography>
                                            <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: '700', fontFamily: 'Fredoka', mx: 2 }}> - </Typography>
                                            <Link sx={{ textDecoration: 'none' }} href={`mailto:${data.User_Email}`}>
                                                <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', }}>{data.User_Email}</Typography>
                                            </Link>
                                        </Box>
                                    </Link>
                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', my: 2, textAlign: 'center' }}>His Application</Typography>

                                    {
                                        data3.map((datas, index) => {
                                            return (
                                                <Box key={index}>
                                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center',mt:5 }}>Question 1 :</Typography>
                                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center', }}>From which date you can start? Are sure you match the requirements that are listed for this {type}?
                                                        How long you can work? When you are avaliable? Where do you live?</Typography>
                                                    <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1, textAlign: 'center' }}>{datas.Answer1} </Typography>
                                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center',mt:5 }}>Question 2 :</Typography>
                                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center', }}> Please Share the projects that you have worked in this field?</Typography>
                                                    <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1, textAlign: 'center' }}>{datas.Answer2} </Typography>

                                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                                        <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', }}>Application Posted On</Typography>
                                                        <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1 }}>{datas.Application_Post_Date.slice(0, 10)} </Typography>
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }

                                    {/* I wnat to add card here but it always causing an error so i jsut using the link to description  */}
                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center', mt:5}}>Your Post :</Typography>
                                    {/* <ServiceCard data={data2} applied={true} /> */}
                                    <Link sx={{ textDecoration: 'none' }} href={`/description-job=${post}&applied=true`}>
                                        <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka',textAlign: 'center',  }}>Click here to see your post</Typography>
                                    </Link>
                                </Box>

                                : null
                        }
                    </>
                    :
                    null
            }

            {
                type === 'internship' ?
                    <>
                        {
                            data && data2 && data3 ?
                                <Box sx={{ textAlign: 'start', width: "100%" }}>
                                    <Link sx={{ textDecoration: 'none' }} href={`/other=seeker=${data.User_id}`}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                            <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', }}>{data.User_Name}</Typography>
                                            <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: '700', fontFamily: 'Fredoka', mx: 2 }}> - </Typography>
                                            <Link sx={{ textDecoration: 'none' }} href={`mailto:${data.User_Email}`}>
                                                <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', }}>{data.User_Email}</Typography>
                                            </Link>
                                        </Box>
                                    </Link>
                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', my: 2, textAlign: 'center' }}>His Application</Typography>



                                    {
                                        data3.map((datas, index) => {
                                            return (
                                                <Box key={index}>

                                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center' }}>Question 1 :</Typography>
                                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center', }}>From which date you can start? Are sure you match the requirements that are listed for this {type}?
                                                        How long you can work? When you are avaliable? Where do you live?</Typography>
                                                    <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1, textAlign: 'center' }}>{datas.Answer1} </Typography>
                                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center' }}>Question 2 :</Typography>
                                                    <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center', }}> Please Share the projects that you have worked in this field?</Typography>
                                                    <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1, textAlign: 'center' }}>{datas.Answer2} </Typography>

                                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                                        <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', }}>Application Posted On</Typography>
                                                        <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', mx: 1 }}>{datas.Application_Post_Date.slice(0, 10)} </Typography>
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }


                                     {/* I wnat to add card here but it always causing an error so i jsut using the link to description  */}
                                     <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: '700', fontFamily: 'Fredoka', textAlign: 'center', mt:5}}>Your Post :</Typography>
                                    {/* <ServiceCard2 data={data2} applied={true} /> */}
                                    <Link sx={{ textDecoration: 'none' }} href={`/description-internship=${post}&applied=true`}>
                                        <Typography sx={{ color: 'rgb(156, 39, 176)', fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka',textAlign: 'center',  }}>Click here to see your post</Typography>
                                    </Link>
                                </Box>

                                : null
                        }
                    </>
                    :
                    null
            }
        </>
    )
}
