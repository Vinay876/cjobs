import React from 'react'
import { Box, Typography } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function Filter() {
    return (
        <>
            <Box sx={{
                textAlign: 'center',
                mt: 2,
                margin: '10px auto',
                padding: 2,
                transition: '.2s all',
                cursor: 'pointer',
                display: "flex",
                color: 'rgb(156, 39, 176)',
                alignItems: "center",
                borderRadius: 2,
                border: '1px solid rgb(156, 39, 176)',
                width: "fit-content",
                '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '2.1px 2.1px 15px 1px rgb(156, 39, 176)!important',
                    fontWeight: '500',
                    color: 'rgb(156, 39, 176)',
                }
            }}>
                <Typography sx={{ mr: 1, fontFamily: 'Fredoka', fontSize: '18px' }}>
                    Filters
                </Typography>
                <FilterAltIcon />
            </Box>
        </>
    )
}
