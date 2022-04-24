import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useMediaQuery, Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import { CityData } from '../../constants/data'

function Content({ padding, width, justifyContent }) {
    return (
        <>

            <Box sx={{ padding: padding, textAlign: width === '170px' ? 'unset' : 'center' }}>
                <Box sx={{ display: width === '170px' ? 'flex' : 'block', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Typography variant='h5' sx={{ color: 'rgb(156, 39, 176)', fontWeight: "700", fontFamily: 'Fredoka' }}>
                        In Popular Cities
                    </Typography>
                    {
                        width === '170px' ?
                            <Link href='/type=jobs&filter=&city=null&category=null' sx={{ textDecoration: 'none', color: '#000000' }}>
                                <Button variant='outlined' color='secondary' sx={{
                                    boxShadow: 0,
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: 'rgb(156, 39, 176)',
                                        color: 'white'
                                    }
                                }}>View All</Button></Link>
                            : null
                    }
                </Box>
                <Typography variant='h6' sx={{ color: 'black', fontWeight: "700", fontFamily: 'Fredoka' }}>
                    Choose the city that suites you.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: justifyContent, alignItems: 'center', flexWrap: padding === '20px 50px' ? 'unset' : 'wrap', my: 8 }}>
                    {CityData.map((data, index) => {
                        const num = Math.random()
                        return (
                            <Box key={index} sx={{
                                textAlign: 'center',
                                margin: '10px 10px',
                                padding: '16px 4px 24px',
                                transition: '.2s all',
                                cursor: 'pointer',
                                width: width,
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
                                <Link href={data.realUrl} sx={{ textDecoration: 'none', color: '#000000' }}>
                                    <img src={data.url} alt={data.name} />
                                    <Typography sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Fredoka' }}>
                                        {data.name}
                                    </Typography>
                                </Link>
                            </Box>
                        )
                    })}
                </Box>
                {
                    width === '170px' ? null :
                        <Link href='/type=jobs&filter=&city=null&category=null' sx={{ textDecoration: 'none', color: '#000000' }}>
                            <Button variant='outlined' color='secondary' sx={{
                                boxShadow: 0,
                                mt:-8,
                                textTransform: 'none',
                                '&:hover': {
                                    background: 'rgb(156, 39, 176)',
                                    color: 'white'
                                }
                            }}>View All</Button></Link>

                }
            </Box>
        </>
    )
}


export default function City() {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1300px)');
    const mdMax = useMediaQuery('(max-width:1300px)');
    const mdMin = useMediaQuery('(min-width:650px)');
    const sm = useMediaQuery('(max-width:650px)');



    return (
        <>
            {xlMax && xlMin && (
                <Content padding={'20px 50px'} width={'170px'} justifyContent={'space-between'} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content padding={'15px 20px'} width={'170px'} justifyContent={'space-evenly'} />
            )}
            {sm && (<Content padding={'10px 8px'} width={'140px'} justifyContent={'space-around'} />
            )}
        </>
    )
}