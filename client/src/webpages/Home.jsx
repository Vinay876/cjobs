import React from 'react'
import Header from '../components/head/Header'
import Top from '../components/home/Top'
import Search from '../components/search/Search'

export default function Home() {
  return (
   <>
   <Header />

   <div style={{height:'7rem'}}></div>
   <Search />
 <Top />
   </>
  )
}
