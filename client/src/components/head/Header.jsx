import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useMediaQuery } from '@mui/material';
import Sidebar from '../drawers/Sidebar';
import { AboutHelper, ContactHelper, InternshipHelper, JobsHelper, LoginHelper, RegisterHelper, TrainingsHelper } from '../helpers/header/Helper';


function XLHeader() {

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'rgb(156, 39, 176)', color: '#000000' }}>
            <Container maxWidth="2000px">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href='/' sx={{ textDecoration: "none" }}>
                        <Typography sx={{ fontFamily: 'Fredoka', color: "#ffffff", fontWeight: "700", fontSize: '30px', ml: 3 }}>
                            CJOBS
                        </Typography>
                    </Link>
                    <Box sx={{ display: 'flex', my: 2 }}>
                        <JobsHelper />
                        <InternshipHelper />
                        <TrainingsHelper />
                        <ContactHelper />
                        <LoginHelper />
                        <RegisterHelper />
                        <AboutHelper />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};



function MDHeader() {
    return (<>
        <AppBar position="fixed" sx={{ backgroundColor: 'rgb(156, 39, 176)', color: '#000000' }}>
            <Container maxWidth="2000px" sx={{ display: 'flex', alignItems: 'center' }}>
                <Sidebar />
                <Link href='/' sx={{ textDecoration: "none" }}>
                    <Typography
                        sx={{ fontFamily: 'Fredoka', color: "white", fontWeight: "700", fontSize: '25px', m: "0px auto", letterSpacing: '2px' }} >
                        CJOBS
                    </Typography>
                </Link>
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