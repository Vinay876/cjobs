import React from 'react'
import { Box, Typography } from '@mui/material'
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
      <Box sx={{ textAlign: 'center', my: 3 }}>
        <Typography sx={{ fontFamily: 'Fredoka', fontSize: '18px' }}>
          I, the creater, do not guarantee the correctness of the content here.
          <br />
          This website is just build for practice
          <br />
          <a style={{ color: 'rgb(156, 39, 176)' }} href="https://github.com/Yash-Sharma2002">This is my github profile.</a>
          <br />
          <a style={{ color: 'rgb(156, 39, 176)' }} href="mailto:yashsharma2493@gmail.com">You can mail me here </a>
          <br />
          and please add subject as cjobs website
          <br />
          I am sorry i can't share the code if you have any query please contact me through mail.
          <br />
          <a href="https://docs.google.com/document/d/1jqpaWWU9L6qmiR6cg8kdxdxWJkoefEZL7HK4Yk__Was/edit?usp=sharing">Here is the Readme.md for the file</a>
        </Typography>
      </Box>
    </>
  )
}
