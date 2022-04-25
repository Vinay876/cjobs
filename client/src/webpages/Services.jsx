import React from 'react'
import { useParams } from 'react-router-dom'
import Filter from '../components/filter/Filter';
import Header from '../components/head/Header'
import ServiceCard from '../components/services/Card';
import Top from '../components/services/Top';

export default function Services() {
    const {id,city,category} = useParams()
    console.log(id);
    console.log(category);
    console.log(city);
  return (
   <>
   <Header />
   <div style={{marginTop:'6rem'}}></div>
  {
     id==='internships'? <Top
     headtext={'Looking for an Internships for learning new skills.'}
     text={<p>An internship is the best way to put classroom knowledge to practice. Bost your career by doing best available internships you can.</p> } />
     :
     <Top
     headtext={'Choose what you want to do.'}
     text={ <p>You are the one who decides your career not others. Make your dream come true.<br /> Choose what and where you want to work</p>} />
   }
  
   <Filter />
   {
     id==='internships'? <ServiceCard duration={true} moneyType={'Stipend'}/>
     :
     <ServiceCard duration={false} moneyType={'Salary'} />
   }
   <div style={{marginTop:'6rem'}}></div>

   </>
  )
}
