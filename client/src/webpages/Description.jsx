import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/head/Header'
import Internship from '../components/helpers/description/Internship';
import Job from '../components/helpers/description/Job';


export default function Description() {
    const { type, id } = useParams()
    console.log(type, id);
    return (
        <>
            <Header />
            <div style={{ marginTop: '5rem' }}></div>
            {
                type === 'job' ? <Job id={id} />
                    : <Internship id={id} />
            }
        </>
    )
}
