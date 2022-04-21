import * as React from 'react'
import '../../css/search.css'
import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'
import { useMediaQuery } from '@mui/material'


function XLSearch() {
    return (
        <>
            <Box sx={{ textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: 'center', width: '40%', m: '0px auto' }}>
                <input
                    placeholder='Search...'
                    type='text'
                    // onChange={e => handleNumChange(e.target)}
                    style={{
                        borderTop: "1px solid rgb(156, 39, 176)",
                        borderLeft: "1px solid rgb(156, 39, 176)",
                        borderBottom: "1px solid rgb(156, 39, 176)",
                        borderRight: "none",
                        userSelect: 'none',
                        width: '90%',
                        height: '35px',
                        fontSize: '14px',
                        paddingLeft:'20px'
                    }} />
                <SearchIcon sx={{ background: 'rgb(156, 39, 176)', color: 'white', cursor: 'pointer', px: 1, height: '40px', }} />
            </Box>
        </>
    )
}


function MDSearch() {
    return (
        <>
            <Box sx={{ textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: 'center', width: '70%', m: '0px auto' }}>
                <input
                    placeholder='Search...'
                    type='text'
                    // onChange={e => handleNumChange(e.target)}
                    style={{
                        borderTop: "1px solid rgb(156, 39, 176)",
                        borderLeft: "1px solid rgb(156, 39, 176)",
                        borderBottom: "1px solid rgb(156, 39, 176)",
                        borderRight: "none",
                        userSelect: 'none',
                        width: '90%',
                        height: '35px',
                        fontSize: '14px',
                        paddingLeft:'20px'
                    }} />
                <SearchIcon sx={{ background: 'rgb(156, 39, 176)', color: 'white', cursor: 'pointer', px: 1, height: '40px', }} />
            </Box>
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