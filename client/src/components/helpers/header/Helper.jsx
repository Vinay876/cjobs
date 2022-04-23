import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import Divider from '@mui/material/Divider'
import '../../../css/helper.css'
import { InternshipHelperData, JobHelperData, TrainingHelperData, UserHelperData } from '../../../constants/data'
import { Link } from '@mui/material'


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
  cursor: 'pointer',
  color: "white",
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',
  '&:hover': {
    background: 'rgb(156, 39, 176)',
    py: 1,
    userSelect: 'none',
    cursor: 'pointer',
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
        <Typography sx={{ p: 1, cursor: 'pointer', paddingLeft: "14px", paddingRight: '4px', mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
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
                  <MenuItem key={index} sx={data === text ? MenuItemSelectedStyles : MenuItemStyles} onMouseEnter={handleMenuChange}>{text}</MenuItem>

                )
              })
            }
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ overflowY: 'scroll' }}>
            {JobHelperData[data].map((text, index) => {
              return (
                <Box key={index} sx={{ textAlign: 'start', ml: 3 }}>
                  <Typography sx={{
                    fontSize: '16px', my: 1.5, cursor: 'pointer', '&:hover': {
                      transform: 'scale(1.01)',
                      color: "rgb(156, 39, 176)"
                    }
                  }}>
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
        <Typography sx={{ p: 1, cursor: 'pointer', paddingLeft: "14px", paddingRight: '4px', mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
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
                  <MenuItem key={index} sx={data === text ? MenuItemSelectedStyles : MenuItemStyles} onMouseEnter={handleMenuChange}>{text}</MenuItem>
                )
              })
            }
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ overflowY: 'scroll' }}>
            {InternshipHelperData[data].map((text, index) => {
              return (
                <Box key={index} sx={{ textAlign: 'start', ml: 3 }}>
                  <Typography sx={{
                    fontSize: '16px', my: 1.5, cursor: 'pointer', '&:hover': {
                      transform: 'scale(1.01)',
                      color: "rgb(156, 39, 176)"
                    }
                  }}>
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
        <Typography sx={{ p: 1, cursor: 'pointer', paddingLeft: "14px", paddingRight: '4px', mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
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
                  <MenuItem key={index} sx={data === text ?
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
                  <Typography sx={{
                    fontSize: '16px', my: 1.5, cursor: 'pointer', '&:hover': {
                      transform: 'scale(1.01)',
                      color: "rgb(156, 39, 176)"
                    }
                  }}>
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



export function ContactHelper() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [data, setData] = React.useState('Contact as Employers')
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuChange = (event) => {
    setData(event.currentTarget.textContent)
  }

  const handleClose = () => {
    setData('Contact as Employers')
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <Typography sx={{ p: 1, cursor: 'pointer', paddingLeft: "14px", paddingRight: '4px', mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
          Contact
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
              UserHelperData['Contact'].map((text, index) => {
                return (
                  <Link key={index} href={text.url} sx={{ textDecoration: 'none', color: "#000000" }}>
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



export function LoginHelper() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [data, setData] = React.useState('Login as Employers')
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuChange = (event) => {
    setData(event.currentTarget.textContent)
  }

  const handleClose = () => {
    setData('Login as Employers')
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <Typography sx={{ p: 1, cursor: 'pointer', paddingLeft: "14px", paddingRight: '4px', mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
          Login
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
              UserHelperData['Login'].map((text, index) => {
                return (
                  <Link key={index} href={text.url} sx={{ textDecoration: 'none', color: "#000000" }}>
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

export function RegisterHelper() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [data, setData] = React.useState('Register as Employers')
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuChange = (event) => {
    setData(event.currentTarget.textContent)
  }

  const handleClose = () => {
    setAnchorEl(null);
    setData('Register as Employers')
  };
  return (
    <>
      <Box>
        <Typography sx={{ p: 1, cursor: 'pointer', paddingLeft: "14px", paddingRight: '4px', mx: 1, borderRadius: 1, color: open ? 'rgb(156, 39, 176)' : 'white', display: 'flex', alignItems: 'center', background: open ? 'white' : 'none', }} onMouseEnter={handleClick}>
          Register
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
              UserHelperData['Register'].map((text, index) => {
                return (
                  <Link key={index} href={text.url} sx={{ textDecoration: 'none', color: "#000000" }}>
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



export function AboutHelper() {
  return (
    <>
      <Typography sx={{
        p: 1,
        cursor: 'pointer',
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