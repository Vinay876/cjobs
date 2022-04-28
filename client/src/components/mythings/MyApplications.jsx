import React from 'react'
import { findApplication, internshipSingleFetching, jobSingleFetching } from '../../api/postFetch'
import { LoginContext } from '../../context/Context'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ServiceCard from '../services/Card'
import ServiceCard2 from '../services/Card2'
import Tab from '@mui/material/Tab'

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

export default function MyApplications() {
    const { SeekerData } = React.useContext(LoginContext)
    const [data, setData] = React.useState([])
    const [data2, setData2] = React.useState([])
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    React.useEffect(() => {
        GetData('job')
    }, [])

    async function GetData(type) {
        setData([])
        const response = await findApplication({
            User_id: SeekerData.User_id,
            type: type
        })
        if (response) {
            setData(response)
        }
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }} >
                <Tabs value={value} onChange={handleChange}>
                    <Tab sx={{ textTransform: 'none' }} label="Jobs" onClick={() => GetData('job')} {...a11yProps(0)} />
                    <Tab sx={{ textTransform: 'none' }} label="Internships" onClick={() => GetData('internship')} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {
                    data.length === 0 ?
                        <>
                            <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: '700', color: "black", fontFamily: 'Fredoka' }}>
                                Not Applied Yet!
                            </Typography>
                        </>
                        :
                        data.map((datas, index) => {

                            return (
                                <>
                                    <GetID key={index} Post_id={datas.Post_id} Type={datas.Type} />
                                </>
                            )
                        })
                }
            </TabPanel>

            <TabPanel value={value} index={1}>
                {
                    data.length === 0 ?
                        <>
                            <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: '700', color: "black", fontFamily: 'Fredoka' }}>
                                Not Applied Yet!
                            </Typography>
                        </>
                        :
                        data.map((datas, index) => {
                            return (
                                <>
                                    <GetID key={index} Post_id={datas.Post_id} Type={datas.Type} />
                                </>
                            )
                        })
                }
            </TabPanel>
        </>
    )
}


function GetID({ Post_id, Type }) {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        GetPostData()
    }, [])
    async function GetPostData() {
        if (Type === 'Job') {
            const response = await jobSingleFetching({
                id: Post_id,
            })
            if (response) {
                setData(response)
            }
        }
        else if (Type === 'Internship') {
            const response = await internshipSingleFetching({
                id: Post_id,
            })
            if (response) {
                setData(response)

            }
        }

    }

    return (
        <Box>
            {
                Type === 'Internship' ?
                    data.length === 0 ? null :
                        <ServiceCard2 applied={true} data={data} />
                    :
                    data.length === 0 ? null :
                        <ServiceCard applied={true} data={data} />
            }
        </Box>
    )
}

