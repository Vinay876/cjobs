import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material';
import { internshipFetchingAll, jobFetchingAll } from '../api/postFetch';
import Filter from '../components/filter/Filter';
import Header from '../components/head/Header'
import ServiceCard from '../components/services/Card';
import ServiceCard2 from '../components/services/Card2';
import Top from '../components/services/Top';
import { LoginContext } from '../context/Context';

export default function Services() {
  const { id, city, category } = useParams()
  const [data, setData] = React.useState([])
  const { toTitle } = React.useContext(LoginContext)



  React.useEffect(() => {
    if (id === 'jobs') {
      getJobsData()
    } else if (id === 'internships') {
      getInternshipsData()
    }
  }, [])
  async function getJobsData() {
    const response = await jobFetchingAll({})
    if (response) {
      selection(response)
    }
  }
  function selection(response) {
    if (id === 'jobs') {
      if (city === 'null' && category === 'null') setData(response)
      else if (city !== 'null' && category === 'null') {
        const data2 = response.filter(datas => datas.Job_Location.includes(toTitle(city)))
        setData(data2)
        return
      }
      else if (city === 'null' && category !== 'null') {
        const data2 = response.filter(datas => datas.Job_Tags.includes(toTitle(category.replace(/_/g, ' '))))
        setData(data2)
        return
      }
      else if (city !== 'null' && category !== 'null') {
        const data2 = response.filter(datas => datas.Job_Location.includes(toTitle(city)) || datas.Job_Tags.includes(toTitle(category.replace(/_/g, ' '))))
        setData(data2)
        return
      }
    }
    else if (id === 'internships') {
      if (city === 'null' && category === 'null') setData(response)
      else if (city !== 'null' && category === 'null') {
        const data2 = response.filter(datas => datas.Internship_Location.includes(toTitle(city)))
        setData(data2)
        return
      }
      else if (city === 'null' && category !== 'null') {
        const data2 = response.filter(datas => datas.Internship_Tags.includes(toTitle(category.replace(/_/g, ' '))))
        setData(data2)
        return
      }
      else if (city !== 'null' && category !== 'null') {
        const data2 = response.filter(datas => datas.Internship_Location.includes(toTitle(city)) || datas.Internship_Tags.includes(toTitle(category.replace(/_/g, ' '))))
        setData(data2)
        return
      }
    }
  }

  async function getInternshipsData() {
    const response = await internshipFetchingAll({})
    if (response) {
      selection(response)
    }
  }
  return (
    <>
      <Header />
      <div style={{ marginTop: '6rem' }}></div>
      {
        id === 'internships' ? <Top
          headtext={'Looking for an Internships for learning new skills.'}
          text={<p>An internship is the best way to put classroom knowledge to practice. Bost your career by doing best available internships you can.</p>} />
          :
          <Top
            headtext={'Choose what you want to do.'}
            text={<p>You are the one who decides your career not others. Make your dream come true.<br /> Choose what and where you want to work</p>} />
      }

      <Filter city={city} category={category} id={id} />
      {
        id === 'jobs' ?
          <>
            {
              data.length !== 0 ?
                data.map((datas, index) => {
                  return (
                    <ServiceCard key={index} data={datas} />
                  )
                }) : <Typography sx={{my:5,fontWeight: '700', color: "black", fontFamily: 'Fredoka',textAlign:'center' }}>
                  Not Posted Yet!
                </Typography>
            }
          </>
          :
          null
      }
      {
        id === 'internships' ?
          <>
            {
              data.length !== 0 ?
                data.map((datas, index) => {
                  return (
                    <ServiceCard2 key={index} data={datas} />
                  )
                }) : <Typography sx={{my:5,fontWeight: '700', color: "black", fontFamily: 'Fredoka',textAlign:'center' }}>
                  Not Posted Yet!
                </Typography>
            }
          </>
          :
          null
      }

    </>
  )
}
