import React from 'react'
import Header from '../components/head/Header'
import Advnatages from '../components/home/Advantages'
import Category from '../components/home/Category'
import City from '../components/home/City'
import Top from '../components/home/Top'
import Trainings from '../components/home/Trainings'
import Search from '../components/search/Search'

export default function Home() {
  return (
    <>
      <Header />

      <div style={{ height: '7rem' }}></div>
      <Search />
      <Top />
      <City />
      <Category />
      <Trainings />
      <Advnatages />
    </>
  )
}
