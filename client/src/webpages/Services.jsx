import React from 'react'
import { useParams } from 'react-router-dom'
import { internshipFetchingAll, jobFetchingAll } from '../api/postFetch';
import Filter from '../components/filter/Filter';
import Header from '../components/head/Header'
import ServiceCard from '../components/services/Card';
import ServiceCard2 from '../components/services/Card2';
import Top from '../components/services/Top';

export default function Services() {
  const { id, city, category } = useParams()
  const [data, setData] = React.useState([])
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
      setData(response)
    }
  }
  async function getInternshipsData() {
    const response = await internshipFetchingAll({})
    if (response) {
      setData(response)
    }
  }
  console.log(city,category);
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

      <Filter />
      {
        id === 'jobs' ?
          <>
            {
              data.map((datas, index) => {
                return (
                  <ServiceCard data={datas} />
                )
              })
            }
          </>
          :
          // 'Not Available' 
          null
      }
      {
        id === 'internships' ?
          <>
            {
              data.map((datas, index) => {
                return (
                  <ServiceCard2 data={datas} />
                )
              })
            }
          </>
          :
          // 'Not Available'
          null
      }

    </>
  )
}
