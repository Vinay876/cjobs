import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/head/Header'
import Login1 from '../components/login/Login1'
import Login2 from '../components/login/Login2'
import Register1 from '../components/register/Register1'
import Register2 from '../components/register/Register2'

export default function LoginReportRegister() {
    const {id} = useParams()
  return (
    <>
    <Header />
    <div style={{marginTop:'5rem'}}></div>
    {
        id==='register-as-employers' ? <Register1 /> : null
    }
     {
        id==='register-as-job-seekers' ? <Register2 /> : null
    }
    {
        id==='login-as-employers' ? <Login1 /> : null
    }
    {
        id==='login-as-job-seekers' ? <Login2 /> : null
    }
    </>
  )
}
