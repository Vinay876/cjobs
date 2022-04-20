import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';

export default function Sidebar({ commonProps }) {
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
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={toggleDrawer('left', true)}
                    sx={{ ml: -2 }}
                    disableRipple>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    <Box
                        sx={{ width: 200 }}
                        role="presentation"
                        // onClick={toggleDrawer('left', false)}  for closing the drawer only for links
                        onKeyDown={toggleDrawer('left', false)}
                    >
                        <List>

                            <ListItem sx={{ justifyContent: 'right', marginLeft: 0, overflowX: 'hiddenImportant' }} onClick={toggleDrawer('left', false)}>
                                <CloseIcon />
                            </ListItem>
                            <Box sx={{
                                fontSize: '16px',
                                userSelect: 'none',
                                textTransform: 'none',
                                color: 'black',
                                padding: '0px 15px',
                                mt: 1
                            }}>
                                Login
                            </Box>
                            <Typography sx={{
                                color: 'black',
                                fontSize: '16px',
                                height: '30px',
                                userSelect: 'none',
                                textTransform: 'none',
                                paddingLeft: '16px',
                                mt: 1
                            }}>
                                MyBookings
                            </Typography>
                        </List>
                        <Divider />
                        <Divider />
                        <ListItem button  >
                            <ListItemText primary='Contact us' />
                        </ListItem>
                        <Typography sx={{ml:2}}>
                            Email <a href="mailto:hello@housedeck.in">hello@housedeck.in</a>
                        </Typography>
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    )
}
