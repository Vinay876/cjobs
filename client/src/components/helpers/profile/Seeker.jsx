import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import Chip from '@mui/material/Chip';
import { seekerFind } from '../../../api/seeker'
import MyApplications from '../../mythings/MyApplications';

export default function Seeker({ id }) {
    const [data, setData] = React.useState([])
    const [Skills, setSkills] = React.useState([])
    React.useEffect(() => {
        getData()
    }, [])
    async function getData() {
        const response = await seekerFind({ User_id: id })
        if (response) {
            setData(response)
            setSkills(response.Skills)
        }
    }
    return (
        <>
            <Box>
                <Typography sx={{ textAlign: 'center', fontSize: '30px', color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka', my: 3 }}>{data.User_Name}</Typography>
                <Box sx={{ width: '50%', m: '0px auto' }}>
                    <Typography sx={{ color: 'black', fontSize: "16px", textAlign: 'center', mt: 3 }}>He lives in</Typography>
                    <Typography sx={{ color: 'black', fontSize: "16px", textAlign: 'center', color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka' }}>{data.User_Address}</Typography>


                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: "16px", textAlign: 'center', my: 2 }}>Email Id - </Typography>
                        <Link href={`mailto:${data.User_Email}`} sx={{ textDecoration: 'none' }}>
                            <Typography sx={{ fontSize: "16px", textAlign: 'center',  ml: 1, color: 'rgb(156, 39, 176)', fontFamily: 'Fredoka' }}>{data.User_Email}</Typography>
                        </Link>
                    </Box>
                </Box>

                <Box sx={{ width: '50%', m: '0px auto' }}>
                    <Typography sx={{ color: 'black', fontSize: "16px", textAlign: 'center', }}>His Skills</Typography>
                    <Box sx={{ textAlign: 'center', my: 2 }}>
                        {
                            Skills.map((datas, index) => {
                                return (
                                    <>
                                        <Chip key={index} sx={{ ml: 1, fontSize: '14px', color: 'black', }} label={datas} />
                                    </>
                                )
                            })
                        }
                    </Box>
                </Box>
                <MyApplications id={id} />

            </Box>
        </>
    )
}
