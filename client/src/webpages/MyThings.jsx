import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/head/Header'

export default function MyThings() {
    const {id} = useParams()
    console.log(id);
  return (
    <>
    <Header />
    </>
  )
}
