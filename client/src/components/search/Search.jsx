import * as React from 'react'
import '../../css/search.css'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'
import { useMediaQuery } from '@mui/material'
import { employerFetching } from '../../api/postFetch'
import { LoginContext } from '../../context/Context'


function XLSearch() {
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState('')
    const { toTitle } = React.useContext(LoginContext)

    async function getEmployers(value) {
        setSearch(value)
        const response = await employerFetching({ item: value.toLowerCase() })
        if (response) {
            setData(response.slice(0, 4))
        }
    }
    return (
        <>
            <Box sx={{ textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: 'center', width: '40%', m: '0px auto' }}>
                <input
                    placeholder='Search a Company...'
                    type='text'
                    value={search}
                    onChange={e => getEmployers(e.target.value)}
                    style={{
                        borderTop: "1px solid rgb(156, 39, 176)",
                        borderLeft: "1px solid rgb(156, 39, 176)",
                        borderBottom: "1px solid rgb(156, 39, 176)",
                        borderRight: "none",
                        userSelect: 'none',
                        width: '90%',
                        height: '35px',
                        fontSize: '14px',
                        paddingLeft: '20px'
                    }} />
                <SearchIcon sx={{ background: 'rgb(156, 39, 176)', color: 'white', cursor: 'pointer', px: 1, height: '40px', }} />
            </Box>
            {
                search ?
                    <Box sx={{ position: 'absolute', zIndex: 1000, width: '40%', background: 'white', m: '0px auto', left: '50%', transform: 'translate(-50%)', border: '1px solid black', mt: 1 }}>
                        {data.map((datas, index) => {
                            return (
                                <Link key={index} href={`/other=employer=${datas.User_id}`} sx={{
                                    textDecoration: 'none',
                                }}>
                                    <Box sx={{
                                        p: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'rgb(156, 39, 176)', background: 'white',
                                        '&:hover': {
                                            color: "white",
                                            background: 'rgb(156, 39, 176)'
                                        }
                                    }}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', color: 'inherit' }}>{toTitle(search)}</Typography>
                                        <Typography sx={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Fredoka', color: 'inherit', }}>{datas.Organization_Name.slice(search.length,)}</Typography>
                                    </Box>
                                </Link>
                            )
                        })}
                    </Box>
                    : null
            }
        </>
    )
}


function MDSearch() {
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState('')
    const { toTitle } = React.useContext(LoginContext)

    async function getEmployers(value) {
        setSearch(value)
        const response = await employerFetching({ item: value.toLowerCase() })
        if (response) {
            setData(response.slice(0, 4))
        }
    }
    return (
        <>
            <Box sx={{ textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: 'center', width: '70%', m: '0px auto' }}>
                <input
                    placeholder='Search a Company...'
                    type='text'
                    value={search}
                    onChange={e => getEmployers(e.target.value)}
                    style={{
                        borderTop: "1px solid rgb(156, 39, 176)",
                        borderLeft: "1px solid rgb(156, 39, 176)",
                        borderBottom: "1px solid rgb(156, 39, 176)",
                        borderRight: "none",
                        userSelect: 'none',
                        width: '90%',
                        height: '35px',
                        fontSize: '14px',
                        paddingLeft: '20px'
                    }} />
                <SearchIcon sx={{ background: 'rgb(156, 39, 176)', color: 'white', cursor: 'pointer', px: 1, height: '40px', }} />
            </Box>
            {
                search ?
                    <Box sx={{ position: 'absolute', zIndex: 1000, width: '40%', background: 'white', m: '0px auto', left: '50%', transform: 'translate(-50%)', border: '1px solid black', mt: 1 }}>
                        {data.map((datas, index) => {
                            return (
                                <Link key={index} href={`/other=employer=${datas.User_id}`} sx={{
                                    textDecoration: 'none',
                                }}>
                                    <Box sx={{
                                        p: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'rgb(156, 39, 176)', background: 'white',
                                        '&:hover': {
                                            color: "white",
                                            background: 'rgb(156, 39, 176)'
                                        }
                                    }}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', color: 'inherit' }}>{toTitle(search)}</Typography>
                                        <Typography sx={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Fredoka', color: 'inherit', }}>{datas.Organization_Name.slice(search.length,)}</Typography>
                                    </Box>
                                </Link>
                            )
                        })}
                    </Box>
                    : null
            }
        </>
    )
}



export default function Search() {
    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1160px)');
    const mdMax = useMediaQuery('(max-width:1160px)');
    const mdMin = useMediaQuery('(min-width:1000px)');
    const sm = useMediaQuery('(max-width:1000px)');

    return (
        <>
            {xlMax && xlMin && (
                <XLSearch />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <MDSearch />
            )}
            {sm && (<MDSearch />)}
        </>
    )
}