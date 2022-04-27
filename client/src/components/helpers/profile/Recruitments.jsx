import React from 'react'
import ServiceCard from '../../services/Card'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tab from '@mui/material/Tab'
import ServiceCard2 from '../../services/Card2'
import { internshipOtherFetching, jobOtherFetching } from '../../../api/postFetch'

function TabPanel(props) {
    const { children, value, index, ...other } = props

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
    )
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

export default function Recruitments({ id }) {
    const [data, setData] = React.useState([])
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        getJobsData()
    }, []);

    async function getJobsData() {
        setData([])
        const response = await jobOtherFetching({ id: id })
        if (response) {
            setData(response)
        }
    }

    async function getInternshipsData() {
        setData([])
        const response = await internshipOtherFetching({ id: id })
        if (response) {
            setData(response)
        }
    }
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }} >
                <Tabs value={value} onChange={handleChange}>
                    <Tab sx={{ textTransform: 'none' }} label="Jobs" onClick={getJobsData} {...a11yProps(0)} />
                    <Tab sx={{ textTransform: 'none' }} label="Internships" onClick={getInternshipsData} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {
                    data.length === 0 ?
                        <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: '700', color: "black", fontFamily: 'Fredoka' }}>
                            Not Posted Yet!
                        </Typography> :
                        data.map((datas, index) => {
                            return (
                                <ServiceCard data={datas} />
                            )
                        })
                }
            </TabPanel>

            <TabPanel value={value} index={1}>
                {
                    data.length === 0 ?
                        <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: '700', color: "black", fontFamily: 'Fredoka' }}>
                            Not Posted Yet!
                        </Typography> :
                        data.map((datas, index) => {
                            return (
                                <ServiceCard2 data={datas} />
                            )
                        })
                }
            </TabPanel>
        </>
    )
}
