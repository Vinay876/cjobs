import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { VisionImagesAboutusAboutData } from '../../constants/data'


function Content({ display }) {
    return (
        <>
            <img style={{ width: "100%" }} src={require('../../assets/banners/about-banner.webp')} alt="Join Us" />

            <Box sx={{ background: '#EAFCFF', textAlign: 'center', borderRadius: 2, mt: 5 }}>
                <Typography sx={{ pt: 10, fontFamily: 'Fredoka', color: 'rgb(156, 39, 176)', }} variant='h3'>
                    Our Vision
                </Typography>
                <Typography sx={{ pt: 5, fontFamily: 'Fredoka' }} variant='h6'>
                    CJOBS is a dot com business with the heart of dot org.
                </Typography>
                <Typography sx={{ pt: 1, m: '0px auto', width: '80%', opacity: '0.8', pb: 10, fontSize: "16px" }} >
                    We are a technology company on a mission to equip students with relevant skills & practical exposure
                    to help them get the best possible start to their careers. Imagine a world full of freedom and possibilities.
                    A world where you can discover your passion and turn it into your career.
                    A world where you graduate fully assured, confident, and prepared to stake a claim on your place in the world.
                </Typography>
                <Box>
                    <Box sx={{  m: '10px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', pb: 20 }} >
                        {
                            VisionImagesAboutusAboutData.map((data, index) =>
                                <Box key={index} sx={{
                                    display: display, background: 'white', m: '10px', p: '15px', borderRadius: 2
                                }}>
                                    <img style={{ width: 182, height: 164, }} src={data.url} alt={data.head} />
                                    <Box sx={{ ml: 1, width: display === 'flex' ? "300px" : '90%', textAlign: display === 'flex' ? "start" : 'center' }}>

                                        <Typography sx={{ fontFamily: 'Fredoka', fontWeight: '600', fontSize: '20px', mt: '10px', }}>
                                            {data.head}
                                        </Typography>

                                        <Typography sx={{ opacity: '0.7', fontSize: '18px', mt: 1.1, }}>
                                            {data.text}
                                        </Typography>

                                    </Box>
                                </Box>
                            )
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}




export default function Tab1() {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1100px)');
    const mdMax = useMediaQuery('(max-width:1100px)');
    const mdMin = useMediaQuery('(min-width:650px)');
    const sm = useMediaQuery('(max-width:650px)');



    return (
        <>
            {xlMax && xlMin && (
                <Content display={'flex'} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content display={'flex'} />
            )}
            {sm && (<Content display={'block'} />
            )}
        </>
    )
}