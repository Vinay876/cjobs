import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/head/Header'
import MyApplications from '../components/mythings/MyApplications';
import MyRecruitments from '../components/mythings/MyRecruitments';
import { LoginContext } from '../context/Context';
import { Login } from './Profile';

export default function MyThings() {
  const { id } = useParams()
  const { SeekerData, EmployerData } = React.useContext(LoginContext)
  return (
    <>
      <Header />

      <div style={{ marginTop: '5rem' }}></div>
      {
        EmployerData.Employer || SeekerData.Seeker ?
          <>
            {
              id === 'my-requirements' ?
                <MyRecruitments /> : null
            }
            {
              id === 'my-applications' ?
                <MyApplications /> : null
            }
          </>
          : 
          <Login />
      }

    </>
  )
}
