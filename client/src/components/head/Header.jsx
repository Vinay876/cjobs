import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import Sidebar from '../drawers/Sidebar';
import HeaderHelper from '../helpers/header/Helper';


function XLHeader() {

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white', color: '#000000' }}>
            <Container maxWidth="2000px">
                <Toolbar disableGutters sx={{ display: 'flex',justifyContent:'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontFamily: 'Fredoka', color: "#0072E5", fontWeight: "700", fontSize: '30px',ml:3  }}>
                            CJOBS
                        </Typography>
                        <Box sx={{ display: 'flex',my:2 }}>
                            {/* {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))} */}
                        <HeaderHelper />
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};



function MDHeader() {
    return (<>
        <AppBar position="fixed" sx={{ backgroundColor: 'white', color: '#000000' }}>
            <Container maxWidth="2000px" sx={{ display: 'flex', alignItems: 'center' }}>
                <Sidebar />
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ fontFamily: 'Fredoka', color: "#0072E5", fontWeight: "700", fontSize: '30px', m: "0px auto" }} >
                    CJOBS
                </Typography>
            </Container>
        </AppBar></>
    )
}


export default function Header() {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1160px)');
    const mdMax = useMediaQuery('(max-width:1160px)');
    const mdMin = useMediaQuery('(min-width:1000px)');
    const sm = useMediaQuery('(max-width:1000px)');



    return (
        <>
            {xlMax && xlMin && (
                <XLHeader />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <MDHeader />
            )}
            {sm && (<MDHeader />)}
        </>
    )
}