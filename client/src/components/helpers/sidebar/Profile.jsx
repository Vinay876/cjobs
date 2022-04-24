import React from 'react'
import { LoginContext } from '../../../context/Context'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { ProfileHelperMenuData } from '../../../constants/data'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AboutHelper, ContactHelper, InternshipHelper, JobHelper, TrainingHelper } from './Helper'


const AccordianStyle = {
    boxShadow: 0,
}

export function ProfileEmployer() {
    const { EmployerData, decrypt, logout } = React.useContext(LoginContext)
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion
                expanded={expanded === `panel1`}
                onChange={handleChange(`panel1`)}
                disableGutters
                sx={AccordianStyle}>
                <AccordionSummary
                    sx={{
                        color: 'rgb(156, 39, 176)',
                        flexDirection: 'row-reverse',
                        p: 1,
                        my: 0,
                    }}
                    expandIcon={<ExpandMoreIcon sx={{ color: 'rgb(156, 39, 176)', }} />}
                >
                    <Typography sx={{ p: 1, cursor: 'pointer', color: 'rgb(156, 39, 176)', display: 'flex', alignItems: 'center', }} >
                        <AccountCircleIcon sx={{ fontSize: '2.5rem', ml: -1, mr: 0.6 }} />
                        <Box>
                            <Typography> {decrypt(EmployerData.User_Name)}</Typography>
                            <Typography>{`${decrypt(EmployerData.Organization_Name)}'s ${decrypt(EmployerData.User_Designation)}`}</Typography>
                        </Box>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box sx={{ mt: -2, }}>
                        {
                            ProfileHelperMenuData['Employer'].map((datas, i) => {
                                return (
                                    <Link key={i} href={datas.url} sx={{ textDecoration: 'none' }}>
                                        <Typography
                                            onClick={datas.name === 'Logout' ? logout : null}
                                            sx={{
                                                color: "black", fontSize: '16px', my: 1, ml: 3,
                                                '&:hover': {
                                                    transform: 'scale(1.01)'
                                                }
                                            }}>
                                            {datas.name}
                                        </Typography>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    )
}


export function ProfileSeeker() {
    const { EmployerData, decrypt, logout } = React.useContext(LoginContext)
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion
                expanded={expanded === `panel1`}
                onChange={handleChange(`panel1`)}
                disableGutters
                sx={AccordianStyle}>
                <AccordionSummary
                    sx={{
                        color: 'rgb(156, 39, 176)',
                        flexDirection: 'row-reverse',
                        p: 1,
                        my: 0,
                    }}
                    expandIcon={<ExpandMoreIcon sx={{ color: 'rgb(156, 39, 176)', }} />}
                >
                    <Typography sx={{ p: 1, cursor: 'pointer', color: 'rgb(156, 39, 176)', display: 'flex', alignItems: 'center', }} >
                        <AccountCircleIcon sx={{ mr: 0.6, ml: -1 }} />
                        {decrypt(EmployerData.User_Name)}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ mt: -2, }}>
                        {
                            ProfileHelperMenuData['Seeker'].map((datas, i) => {
                                return (
                                    <Link key={i} href={datas.url} sx={{ textDecoration: 'none' }}>
                                        <Typography
                                            onClick={datas.name === 'Logout' ? logout : null}
                                            sx={{
                                                color: "black", fontSize: '16px', my: 1, ml: 3,
                                                '&:hover': {
                                                    transform: 'scale(1.01)'
                                                }
                                            }}>
                                            {datas.name}
                                        </Typography>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                </AccordionDetails>
            </Accordion>
            <JobHelper />
            <InternshipHelper />
            <TrainingHelper />
            <ContactHelper />
            <AboutHelper />
        </>
    )
}



