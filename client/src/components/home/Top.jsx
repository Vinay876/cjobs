import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { LoginContext } from '../../context/Context'
import { useMediaQuery } from '@mui/material'

function Content({ isResponsive }) {
    const { EmployerData, SeekerData } = React.useContext(LoginContext)
    return (
        <>
            {
                EmployerData.Employer ?
                    <Box sx={{ display: isResponsive ? 'block' : 'flex', textAlign: isResponsive ? 'center' : 'unset', m: '0px auto', my: 14, justifyContent: 'space-evenly', alignItems: 'center', }}>
                        <Box sx={{ width: isResponsive ? '90%' : '50%', textAlign: isResponsive ? 'center' : 'unset', m: '0px auto', }}>
                            <Typography sx={{ color: "rgb(156, 39, 176)", fontWeight: '800', fontFamily: 'Fredoka', fontSize: isResponsive ? '35px' : '60px' }}>
                                Give Your Organization Best Employee
                            </Typography>
                            {
                                isResponsive ?
                                    <img src={require('../../assets/home/top.webp')} style={{ width: '90%' }} alt="" /> : null
                            }
                            <Typography sx={{ color: "black", fontWeight: '800', fontFamily: 'Fredoka', fontSize: '18px' }}>
                                Post a Requirement in our website and get best employee for the job.
                            </Typography>
                            <Box sx={{ textAlign: 'center' }}>
                                <Link href='chosen=post-a-job' sx={{ textDecoration: 'none' }}>
                                    <Button variant='contained' color='secondary' sx={{
                                        boxShadow: 0,
                                        textTransform: 'none',
                                        mt: 7,
                                        '&:hover': {
                                            background: 'white',
                                            color: 'rgb(156, 39, 176)'
                                        }
                                    }}>Post Requirement</Button>
                                </Link>
                            </Box>
                        </Box>
                        {
                            isResponsive ? null :
                                <img src={require('../../assets/home/top.webp')} alt="" />
                        }
                    </Box>
                    :
                    null
            }

            {
                SeekerData.Seeker ?
                    <Box sx={{ display: isResponsive ? 'block' : 'flex', textAlign: isResponsive ? 'center' : 'unset', m: '0px auto', my: 14, justifyContent: 'space-evenly', alignItems: 'center', }}>
                        <Box sx={{ width: isResponsive ? '90%' : '50%', textAlign: isResponsive ? 'center' : 'unset', m: '0px auto', }}>
                            <Typography sx={{ color: "rgb(156, 39, 176)", fontWeight: '800', fontFamily: 'Fredoka', fontSize: isResponsive ? '35px' : '60px' }}>
                                Give Your Dream Job in an instant
                            </Typography>
                            {
                                isResponsive ?
                                    <img src={require('../../assets/home/home1.webp')} style={{ width: '90%' }} alt="" /> : null
                            }
                            <Typography sx={{ color: "black", fontWeight: '800', fontFamily: 'Fredoka', fontSize: '18px' }}>
                                Now no running from place to place and giving interviews<br /> Here in CJOBS you can apply for your dream job in your dream company
                            </Typography>
                            <Box sx={{ textAlign: 'center' }}>
                                <Link href='/type=jobs&filter=&city=null&category=null' sx={{ textDecoration: 'none' }}>
                                <Button variant='contained' color='secondary' sx={{
                                        boxShadow: 0,
                                        textTransform: 'none',
                                        mt: 7,
                                        '&:hover': {
                                            background: 'white',
                                            color: 'rgb(156, 39, 176)'
                                        }
                                    }}>Apply Now</Button>
                                </Link>

                            </Box>
                        </Box>
                        {
                            isResponsive ? null :
                                <img src={require('../../assets/home/home1.webp')} alt="" />
                        }
                    </Box>
                    :
                    null
            }
            {
                (EmployerData.Employer || SeekerData.Seeker) ?
                    null
                    :
                    <Box sx={{ display: isResponsive ? 'block' : 'flex', textAlign: isResponsive ? 'center' : 'unset', m: '0px auto', my: 14, justifyContent: 'space-evenly', alignItems: 'center', }}>
                        <Box sx={{ width: isResponsive ? '90%' : '50%', textAlign: isResponsive ? 'center' : 'unset', m: '0px auto', }}>
                            <Typography sx={{ color: "rgb(156, 39, 176)", fontWeight: '800', fontFamily: 'Fredoka', fontSize: isResponsive ? '35px' : '60px' }}>
                                Give Your Dream Job in an instant
                            </Typography>
                            {
                                isResponsive ?
                                    <img src={require('../../assets/home/home1.webp')} style={{ width: '90%' }} alt="" /> : null
                            }
                            <Typography sx={{ color: "black", fontWeight: '800', fontFamily: 'Fredoka', fontSize: '18px' }}>
                                Now no running from place to place and giving interviews<br /> Here in CJOBS you can apply for your dream job in your dream company
                            </Typography>
                            <Box sx={{ textAlign: 'center' }}>
                                <Link href='/type=jobs&filter=&city=null&category=null' sx={{ textDecoration: 'none' }}>
                                <Button variant='contained' color='secondary' sx={{
                                        boxShadow: 0,
                                        textTransform: 'none',
                                        mt: 7,
                                        '&:hover': {
                                            background: 'white',
                                            color: 'rgb(156, 39, 176)'
                                        }
                                    }}>Apply Now</Button>
                                </Link>

                            </Box>
                        </Box>
                        {
                            isResponsive ? null :
                                <img src={require('../../assets/home/home1.webp')} alt="" />
                        }
                    </Box>
            }
        </>
    )
}


export default function Top() {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1300px)');
    const sm = useMediaQuery('(max-width:1300px)');
    return (

        <>
            {xlMax && xlMin && (
                <Content isResponsive={false} />
            )}
            {!(xlMax && xlMin) && sm && (
                <Content isResponsive={true} />
            )}
        </>
    )
}