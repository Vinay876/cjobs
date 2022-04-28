import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/head/Header'
import Profile1 from '../components/profile/Profile1'
import Profile2 from '../components/profile/Profile2'
import { LoginContext } from '../context/Context'

export default function Profile() {
  const { EmployerData, SeekerData } = React.useContext(LoginContext)
  const [forOtherDisplay, setForOtherDisplay] = React.useState(false)
  return (
    <>
      <Header />
      <div style={{ marginTop: '5rem' }}></div>
      {
        EmployerData.Employer ?
          <Profile1 />
          :
          null
      }

      {
        SeekerData.Seeker ?
          <Profile2 forOtherDisplay={forOtherDisplay} setForOtherDisplay={setForOtherDisplay} />
          :
          null
      }
      {
        (EmployerData.Employer || SeekerData.Seeker) ?
          null
          :
          <Login />
      }

    </>
  )
}


export function Login() {
  return (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
      <Typography variant='h5' sx={{ color: 'rgb(156, 39, 176)', fontWeight: '700', textAlign: 'center' }}>
        Please login first
        <br />
        And
        <br />
        Try again later.
      </Typography>
    </Box>
  )
}