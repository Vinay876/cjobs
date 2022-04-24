import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/head/Header'

export default function Services() {
    const {id,city,category} = useParams()
    console.log(id);
    console.log(category);
    console.log(city);
  return (
   <>
   <Header />
   </>
  )
}
