import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AdvantageData } from '../../constants/data'
export default function Advnatages() {
    return (
        <>
            <Box sx={{ padding: '20px 50px' }}>

                <Typography variant='h5' sx={{ color: 'rgb(156, 39, 176)', fontWeight: "700", fontFamily: 'Fredoka' }}>
                    With Many Advantages
                </Typography>
                <Typography variant='h6' sx={{ color: 'black', fontWeight: "700", fontFamily: 'Fredoka' }}>
                    The advantages you get when you search here.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 8 }}>
                    {AdvantageData.map((data, index) => {
                        const num = Math.random()
                        return (
                            <Box key={index} sx={{
                                textAlign: 'center',
                                margin: 'auto 10px',
                                padding: '16px 4px 24px',
                                transition: '.2s all',
                                cursor: 'pointer',
                                width: '170px',
                                height: '130px',
                                // borderRadius: '1rem',
                                borderTopLeftRadius: num > 0.5 ? '2rem' : 'none',
                                borderBottomRightRadius: num > 0.5 ? '2rem' : 'none',
                                borderTopRightRadius: num < 0.5 ? '2rem' : 'none',
                                borderBottomLeftRadius: num < 0.5 ? '2rem' : 'none',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    boxShadow: '2.1px 2.1px 15px 1px rgb(156, 39, 176)!important',
                                    fontWeight: '500',
                                    color: 'rgb(156, 39, 176)',
                                }
                            }}>
                                <img src={data.url} alt={data.name} />
                                <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>
                                    {data.name}
                                </Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </>
    )
}
