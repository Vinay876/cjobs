import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CategoryData } from '../../constants/data'
export default function Category() {
    return (
        <>
            <Box sx={{ padding: '20px 50px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h5' sx={{ color: 'rgb(156, 39, 176)', fontWeight: "700", }}>
                        With Popular Categories
                    </Typography>
                    <Button variant='outlined' color='secondary' sx={{
                        boxShadow: 0,
                        textTransform: 'none',
                        '&:hover': {
                            background: 'rgb(156, 39, 176)',
                            color: 'white'
                        }
                    }}>View All</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 8 }}>
                    {CategoryData.map((data, index) => {
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
