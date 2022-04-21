import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Divider from '@mui/material/Divider'
import '../../../css/helper.css'
import { InternshipHelperData, JobHelperData, TrainingHelperData } from '../../../constants/data'


const MenuItemStyles = {
  cursor: 'pointer',
  width: "150px",
  userSelect: 'none',
  py: 1
}
const MenuItemSelectedStyles = {
  background: 'rgb(156, 39, 176)',
  py: 1,
  width: "150px",
  userSelect: 'none',
  color: "white",
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',
  '&:hover': {
    background: 'rgb(156, 39, 176)',
    py: 1,
    userSelect: 'none',
    width: "150px",
    wordWrap: 'break-word',
    color: "white",
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px'
  }
}



export function JobsHelper() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [data, setData] = React.useState('Location')
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuChange = (event) => {
    setData(event.currentTarget.textContent)
  }

  const handleClose = () => {
    setAnchorEl(null);
    setData('Location')
  };
  return (
    <>
      <Box>
        <Typography sx={{ p: 1, px: 2, mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
          Jobs
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        sx={{ mt: 1 }}
        onClose={handleClose}
      >
        <Box sx={{ display: "flex", width: "500px", height: '300px' }} onMouseLeave={() => handleClose()}>
          <Box sx={{ width: "200px" }}>
            {
              Object.keys(JobHelperData).map((text, index) => {
                return (
                  <MenuItem sx={data === text ? MenuItemSelectedStyles : MenuItemStyles} onMouseEnter={handleMenuChange}>{text}</MenuItem>

                )
              })
            }
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ overflowY: 'scroll' }}>
            {JobHelperData[data].map((text, index) => {
              return (
                <Box key={index} sx={{ textAlign: 'start', ml: 3 }}>
                  <Typography sx={{ fontSize: '16px', my: 1.5, cursor: 'pointer' }}>
                    {text.name}
                  </Typography>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Menu>
    </>
  )
}



export function InternshipHelper() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [data, setData] = React.useState('Location')
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuChange = (event) => {
    setData(event.currentTarget.textContent)
  }

  const handleClose = () => {
    setAnchorEl(null);
    setData('Location')
  };
  return (
    <>
      <Box>
        <Typography sx={{ p: 1, px: 2, mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
          Internships
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        sx={{ mt: 1 }}
        onClose={handleClose}
      >
        <Box sx={{ display: "flex", width: "500px", height: '300px' }} onMouseLeave={() => handleClose()}>
          <Box sx={{ width: "200px" }}>
            {
              Object.keys(InternshipHelperData).map((text, index) => {
                return (
                  <MenuItem sx={data === text ? MenuItemSelectedStyles : MenuItemStyles} onMouseEnter={handleMenuChange}>{text}</MenuItem>

                )
              })
            }
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ overflowY: 'scroll' }}>
            {InternshipHelperData[data].map((text, index) => {
              return (
                <Box key={index} sx={{ textAlign: 'start', ml: 3 }}>
                  <Typography sx={{ fontSize: '16px', my: 1.5, cursor: 'pointer' }}>
                    {text.name}
                  </Typography>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Menu>
    </>
  )
}


export function TrainingsHelper() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [data, setData] = React.useState('Most Popular')
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuChange = (event) => {
    setData(event.currentTarget.textContent)
  }

  const handleClose = () => {
    setAnchorEl(null);
    setData('Most Popular')
  };
  return (
    <>
      <Box>
        <Typography sx={{ p: 1, px: 2, mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
          Trainings
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        sx={{ mt: 1 }}
        onClose={handleClose}
      >
        <Box sx={{ display: "flex", width: "600px", height: '350px' }} onMouseLeave={() => handleClose()}>
          <Box sx={{ width: "310px!important", overflowY: 'scroll' }}>
            {
              Object.keys(TrainingHelperData).map((text, index) => {
                return (
                  <MenuItem sx={data === text ?
                    {
                      background: 'rgb(156, 39, 176)',
                      py: 1,
                      width: "220px",
                      userSelect: 'none',
                      color: "white",
                      borderTopRightRadius: '20px',
                      borderBottomRightRadius: '20px',
                      '&:hover': {
                        background: 'rgb(156, 39, 176)',
                        py: 1,
                        userSelect: 'none',
                        width: "220px",
                        wordWrap: 'break-word',
                        color: "white",
                        borderTopRightRadius: '20px',
                        borderBottomRightRadius: '20px'
                      }
                    }
                    :
                    {
                      cursor: 'pointer',
                      width: "220px",
                      userSelect: 'none',
                      py: 1
                    }
                  } onMouseEnter={handleMenuChange}>{text}</MenuItem>

                )
              })
            }
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ overflowY: 'scroll' }}>
            {TrainingHelperData[data].map((text, index) => {
              return (
                <Box key={index} sx={{ textAlign: 'start', ml: 3 }}>
                  <Typography sx={{ fontSize: '16px', my: 1.5, cursor: 'pointer' }}>
                    {text.name}
                  </Typography>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Menu>
    </>
  )
}

export function AboutHelper() {
  return (
    <>
      <Typography sx={{
        p: 1,
        px: 2,
        mx: 1,
        color: 'white',
        borderRadius: 1,
        '&:hover': {
          color: 'rgb(156, 39, 176)',
          background: 'white'
        }
      }}>
        About
      </Typography>
    </>
  )
}


export function ContactHelper() {
  return (
    <>
      <Typography sx={{
        p: 1,
        px: 2,
        mx: 1,
        color: 'white',
        borderRadius: 1,
        '&:hover': {
          color: 'rgb(156, 39, 176)',
          background: 'white'
        }
      }}>
        Contact
      </Typography>
    </>
  )
}



export function LoginHelper() {
  return (
    <>
      <Typography sx={{
        p: 1,
        px: 2,
        mx: 1,
        color: 'white',
        borderRadius: 1,
        '&:hover': {
          color: 'rgb(156, 39, 176)',
          background: 'white'
        }
      }}>
        Login
      </Typography>

    </>
  )
}

export function RegisterHelper() {
  return (
    <>
      <Typography sx={{
        p: 1,
        px: 2,
        mx: 1,
        color: 'white',
        borderRadius: 1,
        '&:hover': {
          color: 'rgb(156, 39, 176)',
          background: 'white'
        }
      }}>
        Register
      </Typography>

    </>
  )
}
