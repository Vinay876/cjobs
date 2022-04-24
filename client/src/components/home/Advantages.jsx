import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AdvantageData } from '../../constants/data'
import { useMediaQuery } from '@mui/material'


function Content({ padding, width, justifyContent, text }) {
    return (
        <>
            <Box sx={{ padding: padding }}>

                <Typography variant='h5' sx={{ color: 'rgb(156, 39, 176)', fontWeight: "700", fontFamily: 'Fredoka', textAlign: text }}>
                    With Many Advantages
                </Typography>
                <Typography variant='h6' sx={{ color: 'black', fontWeight: "700", fontFamily: 'Fredoka', textAlign: text }}>
                    The advantages you get when you search here.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: justifyContent, alignItems: 'center', flexWrap: padding === '20px 50px' ? 'unset' : 'wrap',m: '0px auto', my: 8, textAlign: 'center',  }}>
                    {AdvantageData.map((data, index) => {
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


export default function Advnatages() {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1300px)');
    const mdMax = useMediaQuery('(max-width:1300px)');
    const mdMin = useMediaQuery('(min-width:650px)');
    const sm = useMediaQuery('(max-width:650px)');



    return (
        <>
            {xlMax && xlMin && (
                <Content padding={'20px 50px'} width={'170px'} justifyContent={'center'} text={'unset'} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content padding={'15px 20px'} width={'170px'} justifyContent={'center'} text={'unset'} />
            )}
            {sm && (<Content padding={'10px 8px'} width={'140px'} justifyContent={'space-around'} text={'center'} />
            )}
        </>
    )
}