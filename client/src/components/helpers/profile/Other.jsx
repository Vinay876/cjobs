import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { employerView } from '../../../api/employer'

export default function Other({ id }) {
    const [data, setData] = React.useState([])
    const getData = React.useRef(()=>{})
    React.useEffect(() => {
        getData.current()
    }, [])
    getData.current=async()=> {
        const response = await employerView({ id: id })
        if (response) {
            setData(response)
        }
    }
    return (
        <>
            {
                data.length === 0 ? null :
                    data.map((datas, index) => {
                        return (
                            <Box key={index}>
                                <Typography sx={{ textAlign: 'center', fontSize: '30px', color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka', my: 3 }}>{datas.Organization_Name}</Typography>
                                <Box sx={{ width: '50%', m: '0px auto' }}>
                                    <Typography sx={{ color: 'black', fontSize: "16px", textAlign: 'center', my: 3, fontFamily: 'Fredoka' }}>{datas.Organization_Details}</Typography>
                                    <Typography sx={{ color: 'black', fontSize: "16px", textAlign: 'center', mt: 3 }}>Their headquarter is in</Typography>
                                    <Typography sx={{  fontSize: "16px", textAlign: 'center', color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka' }}>{datas.Organization_Address}</Typography>

                                    <Link href={datas.Organization_Website} sx={{ textDecoration: 'none' }}>
                                        <Typography sx={{ fontSize: "16px", textAlign: 'center', my: 2, color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka' }}>Click here to visit their website</Typography>
                                    </Link>

                                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: "16px", textAlign: 'center', my: 2 }}>Email Id - </Typography>
                                        <Link href={`mailto:${datas.Organization_Email}`} sx={{ textDecoration: 'none' }}>
                                            <Typography sx={{ fontSize: "16px", textAlign: 'center', my: 2, ml: 1, color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka' }}>{datas.Organization_Email}</Typography>
                                        </Link>
                                    </Box>
                                </Box>
                                <Typography sx={{ color: 'black', fontSize: "16px", textAlign: 'center', mt: 3 }}>This account is managed by :</Typography>
                                <Typography sx={{ color: 'black', fontSize: "16px", textAlign: 'center', fontFamily: 'Fredoka' }}>{datas.User_Name} who is {datas.Organization_Name}'s {datas.User_Designation}</Typography>

                                <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: "16px", textAlign: 'center', my: 2 }}>You can contact him at -</Typography>
                                    <Link href={`mailto:${datas.User_Email}`} sx={{ textDecoration: 'none' }}>
                                        <Typography sx={{ fontSize: "16px", textAlign: 'center', my: 2, ml: 1, color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka' }}>{datas.User_Email}</Typography>
                                    </Link>
                                </Box>

                            </Box>
                        )
                    })
            }
        </>
    )
}
