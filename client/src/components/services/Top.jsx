import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useMediaQuery } from '@mui/material'


function Content({ isResponsive, text, headtext }) {
    return (
        <>
            <Box sx={{ display: isResponsive ? 'block' : 'flex', textAlign: isResponsive ? 'center' : 'unset', m: '0px auto', my: 9, justifyContent: 'space-evenly', alignItems: 'center', }}>
                <Box sx={{ width: isResponsive ? '90%' : '50%', textAlign: isResponsive ? 'center' : 'unset', m: '0px auto', }}>
                    <Typography sx={{ color: "rgb(156, 39, 176)", fontWeight: '800', fontFamily: 'Fredoka', fontSize: isResponsive ? '35px' : '60px' }}>
                       
                        {headtext}
                    </Typography>
                    {
                        isResponsive ?
                            <img src={require('../../assets/report/choose.webp')} style={{ width: '90%' }} alt="" /> : null
                    }
                    <Typography sx={{ color: "black", fontWeight: '800', fontFamily: 'Fredoka', fontSize: '18px' }}>
                        {text}
                        
                    </Typography>
                </Box>
                {
                    isResponsive ? null :
                        <img src={require('../../assets/report/choose.webp')} alt="" />
                }
            </Box>

        </>
    )
}


export default function Top({ text, headtext }) {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1300px)');
    const sm = useMediaQuery('(max-width:1300px)');
    return (

        <>
            {xlMax && xlMin && (
                <Content isResponsive={false} text={text} headtext={headtext} />
            )}
            {!(xlMax && xlMin) && sm && (
                <Content isResponsive={true} text={text} headtext={headtext} />
            )}
        </>
    )
}