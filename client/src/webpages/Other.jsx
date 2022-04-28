import React from 'react'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import Header from '../components/head/Header'
import Other from '../components/helpers/profile/Other'
import Recruitments from '../components/helpers/profile/Recruitments'
import Seeker from '../components/helpers/profile/Seeker'

export default function OtherProfiles() {
    const { type, id } = useParams()
    return (
        <>
            <Header />
            <div style={{ marginTop: '5rem' }}></div>
            {
                type === 'employer' ?
                    <>
                        <Other id={id} />
                        <Typography sx={{ textAlign: 'center', mt: 3 }}> Their Postings</Typography>
                        <Recruitments id={id} />
                    </>
                    :
                    <>
                        <Seeker id={id} />
                    </>
            }
        </>
    )
}
