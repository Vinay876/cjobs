import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/head/Header'

export default function MyThings() {
    const {type} = useParams()
    console.log(type);
  return (
    <>
    <Header />
    </>
  )
}
