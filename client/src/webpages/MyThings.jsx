import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/head/Header'
import MyRecruitments from '../components/mythings/MyRecruitments';
import { Login } from './Profile';

export default function MyThings() {
  const { id } = useParams()
  return (
    <>
      <Header />
      <div style={{marginTop:'5rem'}}></div>
      {
        id === 'my-requirements' ?
          <MyRecruitments /> : <Login />
      }
    </>
  )
}
