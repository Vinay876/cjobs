import React from 'react'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { InternshipHelperData, JobHelperData, TrainingHelperData, UserHelperData } from '../../../constants/data'
import { Divider, Link } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


const AccordianStyle = {
    boxShadow: 0,
}
export function JobHelper() {
    const [expanded, setExpanded] = React.useState(false);
    const [insideExpanded, setInsideExpanded] = React.useState(false);

    const handleInsideChange = (panel) => (event, isExpanded) => {
        setInsideExpanded(isExpanded ? panel : false);
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    return (
        <>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
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
                    <Typography sx={{ color: 'rgb(156, 39, 176)', }}>
                        Jobs
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        Object.keys(JobHelperData).map((text, index) => {
                            return (
                                <Accordion
                                    key={index}
                                    expanded={insideExpanded === `panel${index}`}
                                    onChange={handleInsideChange(`panel${index}`)}
                                    disableGutters
                                    sx={AccordianStyle}>
                                    <AccordionSummary
                                        sx={{
                                            color: 'rgb(156, 39, 176)',
                                            flexDirection: 'row-reverse',
                                            p: 1,
                                        }}
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'rgb(156, 39, 176)' }} />}
                                    >
                                        <Typography >
                                            {text}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {
                                            JobHelperData[text].map((datas, i) => {
                                                return (
                                                    <Typography key={i} sx={{
                                                        color: "black", fontSize: '16px', my: 1,
                                                        '&:hover': {
                                                            transform: 'scale(1.01)'
                                                        }
                                                    }}>
                                                        {datas.name}
                                                    </Typography>
                                                )
                                            })
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }
                </AccordionDetails>
            </Accordion>




        </>
    )
}

export function InternshipHelper() {
    const [expanded, setExpanded] = React.useState(false);
    const [insideExpanded, setInsideExpanded] = React.useState(false);

    const handleInsideChange = (panel) => (event, isExpanded) => {
        setInsideExpanded(isExpanded ? panel : false);
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    return (
        <>

            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
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
                    <Typography sx={{ color: 'rgb(156, 39, 176)', }}>
                        Internships
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        Object.keys(InternshipHelperData).map((text, index) => {
                            return (
                                <Accordion
                                    key={index}
                                    expanded={insideExpanded === `panel${index}`}
                                    onChange={handleInsideChange(`panel${index}`)}
                                    disableGutters
                                    sx={AccordianStyle}>
                                    <AccordionSummary
                                        sx={{
                                            color: 'rgb(156, 39, 176)',
                                            flexDirection: 'row-reverse',
                                            p: 1,
                                        }}
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'rgb(156, 39, 176)' }} />}
                                    >
                                        <Typography >
                                            {text}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {
                                            InternshipHelperData[text].map((datas, i) => {
                                                return (
                                                    <Typography key={i} sx={{
                                                        color: "black", fontSize: '16px', my: 1,
                                                        '&:hover': {
                                                            transform: 'scale(1.01)'
                                                        }
                                                    }}>
                                                        {datas.name}
                                                    </Typography>
                                                )
                                            })
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }
                </AccordionDetails>
            </Accordion>
        </>

    )
}


export function TrainingHelper() {
    const [expanded, setExpanded] = React.useState(false);
    const [insideExpanded, setInsideExpanded] = React.useState(false);

    const handleInsideChange = (panel) => (event, isExpanded) => {
        setInsideExpanded(isExpanded ? panel : false);
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    return (
        <>

            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
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
                    <Typography sx={{ color: 'rgb(156, 39, 176)', }}>
                        Trainings
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        Object.keys(TrainingHelperData).map((text, index) => {
                            return (
                                <Accordion
                                    key={index}
                                    expanded={insideExpanded === `panel${index}`}
                                    onChange={handleInsideChange(`panel${index}`)}
                                    disableGutters
                                    sx={AccordianStyle}>
                                    <AccordionSummary
                                        sx={{
                                            color: 'rgb(156, 39, 176)',
                                            flexDirection: 'row-reverse',
                                            p: 1,
                                            my: 0,
                                        }}
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'rgb(156, 39, 176)' }} />}
                                    >
                                        <Typography >
                                            {text}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {
                                            TrainingHelperData[text].map((datas, i) => {
                                                return (
                                                    <Typography key={i} sx={{
                                                        color: "black", fontSize: '16px', my: 1,
                                                        '&:hover': {
                                                            transform: 'scale(1.01)'
                                                        }
                                                    }}>
                                                        {datas.name}
                                                    </Typography>
                                                )
                                            })
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }
                </AccordionDetails>
            </Accordion>



        </>
    )
}



export function ContactHelper() {
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
                    <Typography sx={{ color: 'rgb(156, 39, 176)', }}>
                        Contact
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        UserHelperData['Contact'].map((datas, i) => {
                            return (
                                <Link key={i} href={datas.url} sx={{ textDecoration: 'none' }}>
                                    <Typography
                                        sx={{
                                            color: "black", fontSize: '16px', my: 1,
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
                </AccordionDetails>
            </Accordion>
        </>
    )
}
export function RegisterHelper() {
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
                    <Typography sx={{ color: 'rgb(156, 39, 176)', }}>
                        Register
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        UserHelperData['Register'].map((datas, i) => {
                            return (
                                <Link key={i} href={datas.url} sx={{ textDecoration: 'none' }}>
                                    <Typography
                                        sx={{
                                            color: "black", fontSize: '16px', my: 1,
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
                </AccordionDetails>
            </Accordion>
        </>
    )
}




export function LoginHelper() {
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
                    <Typography sx={{ color: 'rgb(156, 39, 176)', }}>
                        Login
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        UserHelperData['Login'].map((datas, i) => {
                            return (
                                <Link key={i} href={datas.url} sx={{ textDecoration: 'none' }}>
                                    <Typography
                                        sx={{
                                            color: "black", fontSize: '16px', my: 1,
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
                </AccordionDetails>
            </Accordion>
        </>
    )
}


export function AboutHelper() {
    return (
        <>
<Divider />
            <Typography sx={{ color: 'rgb(156, 39, 176)',ml:4,mt:2 }}>
                About
            </Typography>
        </>
    )
}

