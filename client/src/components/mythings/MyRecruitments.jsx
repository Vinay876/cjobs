import React from 'react'
import { LoginContext } from '../../context/Context'
import { internshipFetching, jobFetching } from '../../api/postFetch'
import ServiceCard from '../services/Card'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tab from '@mui/material/Tab'
import ServiceCard2 from '../services/Card2'

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

export default function MyRecruitments() {
    const { EmployerData, decrypt } = React.useContext(LoginContext)
    const [data, setData] = React.useState([])
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        getJobsData()
    }, []);

    async function getJobsData() {
        const response = await jobFetching({
            Organization_Name: decrypt(EmployerData.Organization_Name),
            Organization_Email: decrypt(EmployerData.Organization_Email),
            User_Name: decrypt(EmployerData.User_Name),
            User_Email: decrypt(EmployerData.User_Email),
            User_Number: decrypt(EmployerData.User_Number),
            User_id: EmployerData.User_id
        })
        if (response) {
            setData(response)
        }
    }

    async function getInternshipsData() {
        setData([])
        const response = await internshipFetching({
            Organization_Name: decrypt(EmployerData.Organization_Name),
            Organization_Email: decrypt(EmployerData.Organization_Email),
            User_Name: decrypt(EmployerData.User_Name),
            User_Email: decrypt(EmployerData.User_Email),
            User_Number: decrypt(EmployerData.User_Number),
            User_id: EmployerData.User_id
        })
        if (response) {
            console.log(response);
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
                    data.map((datas, index) => {
                        return (
                            <ServiceCard data={datas} />
                        )
                    })
                }
            </TabPanel>

            <TabPanel value={value} index={1}>
                {
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
