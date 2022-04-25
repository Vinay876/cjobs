import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ContactHelper, InternshipHelper, LoginHelper, RegisterHelper, TrainingHelper, JobHelper, AboutHelper, PostHelper } from '../helpers/sidebar/Helper';
import { LoginContext } from '../../context/Context';
import { ProfileEmployer, ProfileSeeker } from '../helpers/sidebar/Profile';

export default function Sidebar() {
    const { SeekerData, EmployerData } = React.useContext(LoginContext)
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };



    return (
        <div>
            <React.Fragment key={'left'}>
                <IconButton
                    size="large"
                    onClick={toggleDrawer('left', true)}
                    sx={{ ml: -2 }}
                    disableRipple>
                    <MenuIcon sx={{ color: 'white' }} />
                </IconButton>
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    <Box
                        sx={{ width: 250, background: 'white', color: 'rgb(156, 39, 176)', height: '100%' }}
                        role="presentation"
                        // onClick={toggleDrawer('left', false)}  for closing the drawer only for links
                        onKeyDown={toggleDrawer('left', false)}
                    >
                        <List>

                            <ListItem sx={{ justifyContent: 'right', marginLeft: 0, overflowX: 'hiddenImportant' }} onClick={toggleDrawer('left', false)}>
                                <CloseIcon />
                            </ListItem>

                        </List>

                        {
                            EmployerData.Employer ?
                                <>
                                    <ProfileEmployer />
                                    <PostHelper />
                                </>
                                :
                                null
                        }

                        {
                            SeekerData.Seeker ?
                                <ProfileSeeker />
                                :
                                null
                        }
                        {
                            (EmployerData.Employer || SeekerData.Seeker) ?
                                null
                                :
                                <>
                                    <LoginHelper />
                                    <RegisterHelper />
                                    <JobHelper />
                                    <InternshipHelper />
                                    <TrainingHelper />
                                    <ContactHelper />
                                    <AboutHelper />
                                </>
                        }

                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    )
}
