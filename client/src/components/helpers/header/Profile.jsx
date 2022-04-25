import React from 'react'
import { LoginContext } from '../../../context/Context'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { AboutHelper, ContactHelper, InternshipHelper, JobsHelper, TrainingsHelper } from './Helper'
import { ProfileHelperMenuData } from '../../../constants/data'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export function ProfileEmployer() {
    const { EmployerData, decrypt, logout } = React.useContext(LoginContext)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [data, setData] = React.useState('Profile')
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuChange = (event) => {
        setData(event.currentTarget.textContent)
    }

    const handleClose = () => {
        setAnchorEl(null);
        setData('Profile')
    };
    return (
        <>
            <Typography sx={{ p: 1, cursor: 'pointer', paddingLeft: "14px", paddingRight: '4px', mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
                <AccountCircleIcon sx={{ mr: 0.6 }} />
                {`${decrypt(EmployerData.User_Name)} - ${decrypt(EmployerData.Organization_Name)}'s ${decrypt(EmployerData.User_Designation)}`}
                {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Typography>
            <Menu
                anchorEl={anchorEl}
                open={open}
                sx={{ mt: 1 }}
                onClose={handleClose}
            >
                <Box sx={{ display: "flex", width: "auto", height: 'auto' }} onMouseLeave={() => handleClose()}>
                    <Box sx={{ overflowY: 'scroll' }}>
                        {
                            ProfileHelperMenuData['Employer'].map((text, index) => {
                                return (
                                    <Link key={index} href={text.name === 'Profile' ? `${text.url}=${EmployerData.User_id}` : text.url} sx={{ textDecoration: 'none', color: "#000000" }} onClick={text.name === 'Logout' ? logout : null}>
                                        <MenuItem
                                            sx={data === text.name ?
                                                {
                                                    background: 'rgb(156, 39, 176)',
                                                    py: 1,
                                                    userSelect: 'none',
                                                    cursor: 'pointer',
                                                    color: "white",
                                                    '&:hover': {
                                                        background: 'rgb(156, 39, 176)',
                                                        py: 1,
                                                        userSelect: 'none',
                                                        cursor: 'pointer',
                                                        wordWrap: 'break-word',
                                                        color: "white",
                                                    }
                                                }
                                                :
                                                {
                                                    cursor: 'pointer',
                                                    userSelect: 'none',
                                                    py: 1
                                                }
                                            }
                                            onMouseEnter={handleMenuChange}>
                                            {text.name}
                                        </MenuItem>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Menu>
        </>
    )
}


export function ProfileSeeker() {
    const { SeekerData, decrypt, logout } = React.useContext(LoginContext)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [data, setData] = React.useState('Profile')
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuChange = (event) => {
        setData(event.currentTarget.textContent)
    }

    const handleClose = () => {
        setAnchorEl(null);
        setData('Profile')
    };
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <JobsHelper />
                <InternshipHelper />
                <TrainingsHelper />
                <ContactHelper />
                <AboutHelper />
                <Typography sx={{ p: 1, cursor: 'pointer', paddingLeft: "14px", paddingRight: '4px', mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
                    <AccountCircleIcon sx={{ mr: 0.6 }} />
                    {decrypt(SeekerData.User_Name)}
                    {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </Typography>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                sx={{ mt: 1 }}
                onClose={handleClose}
            >
                <Box sx={{ display: "flex", width: "auto", height: 'auto' }} onMouseLeave={() => handleClose()}>
                    <Box sx={{ overflowY: 'scroll' }}>
                        {
                            ProfileHelperMenuData['Seeker'].map((text, index) => {
                                return (
                                    <Link key={index} href={text.name==='Profile'?`${text.url}=${SeekerData.User_id}`:text.url} sx={{ textDecoration: 'none', color: "#000000" }} onClick={text.name === 'Logout' ? logout : null}>
                                        <MenuItem
                                            sx={data === text.name ?
                                                {
                                                    background: 'rgb(156, 39, 176)',
                                                    py: 1,
                                                    userSelect: 'none',
                                                    cursor: 'pointer',
                                                    color: "white",
                                                    '&:hover': {
                                                        background: 'rgb(156, 39, 176)',
                                                        py: 1,
                                                        userSelect: 'none',
                                                        cursor: 'pointer',
                                                        wordWrap: 'break-word',
                                                        color: "white",
                                                    }
                                                }
                                                :
                                                {
                                                    cursor: 'pointer',
                                                    userSelect: 'none',
                                                    py: 1
                                                }
                                            }
                                            onMouseEnter={handleMenuChange}>
                                            {text.name}
                                        </MenuItem>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Menu>
        </>
    )
}
