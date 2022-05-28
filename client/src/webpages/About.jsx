import React from 'react'
import Header from '../components/head/Header'
import '../css/globalStyleChanger.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Tab1 from '../components/about/Tab1';
import Tab2 from '../components/about/Tab2';
import Tab3 from '../components/about/Tab3';

function Content({margin}) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <Box sx={{mt:margin }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab sx={{ textTransform: 'none', fontSize: '16px',fontFamily:'Fredoka' }} label="About us" {...a11yProps(0)} />
          <Tab sx={{ textTransform: 'none', fontSize: '16px',fontFamily:'Fredoka' }} label="Careers" {...a11yProps(1)} />
          <Tab sx={{ textTransform: 'none', fontSize: '16px',fontFamily:'Fredoka' }} label="Cultures" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Tab1 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tab2 />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Tab3 />
        </TabPanel>
      </Box>
    </>
  )
}




export default function About() {

  const xlMax = useMediaQuery('(max-width:2000px)');
  const xlMin = useMediaQuery('(min-width:1100px)');
  const mdMax = useMediaQuery('(max-width:1100px)');
  const mdMin = useMediaQuery('(min-width:650px)');
  const sm = useMediaQuery('(max-width:650px)');



  return (
      <>
          {xlMax && xlMin && (
              <Content margin={12}  />
          )}
          {!(xlMax && xlMin) && mdMax && mdMin && (
              <Content margin={8}  />
          )}
          {sm && (<Content margin={6}  />
          )}
      </>
  )
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



