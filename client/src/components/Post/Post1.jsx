// post as job
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '../../css/login.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LoginContext } from '../../context/Context'
import Tooltip from '@mui/material/Tooltip';
import DoneIcon from '@mui/icons-material/Done';
import { useMediaQuery } from '@mui/material'
import { v4 as uuidV4 } from 'uuid'
import { employerContact } from '../../api/contact'
import { employerLogin } from '../../api/employer'

function Content({ display, width, align, inpwidth, txtWidth, datawidth }) {
    const navigate = useNavigate()
    const { setMessage, setMessageType, setShow, decrypt, EmployerData } = React.useContext(LoginContext)
    const [skills, setSkills] = React.useState([])
    const [perks, setPerks] = React.useState([])
    var validRegexForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [data, setData] = React.useState({
        Organization_Name: '',
        Organization_Email: '',
        Organization_Website: '',
        Organization_Details: '',
        User_Name: '',
        User_Designation: '',
        User_Email: '',
        Job_Type: '',
        Job_Location: '',
        Start_Date: '',
        Apply_By: '',
        About_Internship: '',
        Who_can_apply: '',
        Number_of_openings: '',
        id: uuidV4(),
        open: false
    })

    React.useEffect(() => {
        GetData()
    }, [])

    const GetData = async () => {
        if (EmployerData.Employer) {
            const response = await employerLogin({
                Organization_Name: decrypt(EmployerData.Organization_Name),
                Organization_Email: decrypt(EmployerData.Organization_Email),
                User_Name: decrypt(EmployerData.User_Name),
                User_Email: decrypt(EmployerData.User_Email),
                User_Number: decrypt(EmployerData.User_Number),
            })
            if (response) {
                setData(prev => {
                    return {
                        ...prev,
                        User_id: response.User_id,
                        Organization_Name: response.Organization_Name,
                        Organization_Email: response.Organization_Email,
                        Organization_Website: response.Organization_Website,
                        Organization_Details: response.Organization_Details,
                        User_Name: response.User_Name,
                        User_Designation: response.User_Designation,
                        User_Email: response.User_Email,
                    }
                })
            }
        }
    }

    const [displayForYourInformation, setDisplayForYourInformation] = React.useState(0)

    function OrganizationDataChecker() {
        if (!data.Organization_Email.match(validRegexForEmail)) {
            setShow(true)
            setMessageType('error')
            setMessage("Invalid Organization Email")
            return
        }
        if (!data.Organization_Name || data.Organization_Name.length < 4) {
            setShow(true)
            setMessageType('error')
            setMessage('Organization Name is not Valid.')
            return
        }
        setDisplayForYourInformation(1)
    }

    async function EmployerDataChecker() {
        if (!data.User_Name || data.User_Name.length < 4) {
            setShow(true)
            setMessageType('error')
            setMessage('User Name is not Valid.')
            return
        }
        if (!data.User_Email.match(validRegexForEmail)) {
            setShow(true)
            setMessageType('error')
            setMessage("Invalid User Email")
            return
        }
        if (!data.User_Number || data.User_Number.length < 8) {
            setShow(true)
            setMessageType('warning')
            setMessage('User Number is not valid.')
            return
        }
        if (!data.verified) {
            setShow(true)
            setMessageType('warning')
            setMessage('User Number is not verified.')
            return
        }
        setDisplayForYourInformation(2)
    }

    async function DataSend() {
        if (!data.query || data.query.length < 10) {
            setShow(true)
            setMessageType('warning')
            setMessage('Query must be specific.')
            return
        }
        const response = await employerContact({
            Organization_Name: data.Organization_Name,
            Organization_Email: data.Organization_Email,
            User_Name: data.User_Name,
            User_Designation: data.User_Designation,
            User_Email: data.User_Email,
            User_Number: data.User_Number,
            Query: data.query
        })
        if (response === 'success') {
            navigate('/')
            setShow(true)
            setMessageType('success')
            setMessage('Query Sent')
            return
        }
    }

    return (
        <>
            <Typography variant="h5" sx={{ textAlign: "center", color: "rgb(156, 39, 176)", fontWeight: '800', textTransform: 'uppercase', py: 2, fontFamily: 'Fredoka', borderBottom: '2px solid rgb(156, 39, 176)', width: txtWidth, m: '0px auto' }}>
                Contact us
            </Typography>
            <Typography sx={{ textAlign: "center", fontWeight: '800', py: 2, fontFamily: 'Fredoka', }}>
                Contact us if there is anything you are not sure about.<br /> We will help you anytime<br /> I haven't added this yet so contact us is dummy for that
            </Typography>

            <Box sx={{ display: display, alignItems: 'center', justifyContent: 'space-between', textAlign: align }}>
                <Box>
                    <img src={require("../../assets/report/contact.webp")} style={{ width: width }} alt="Contact" />
                </Box>

                <Box sx={{ display: displayForYourInformation === 0 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Organization Name :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Name'
                                type='text'
                                defaultValue={EmployerData.Employer ? data.Organization_Name : null}
                                disabled={data.verified ? true : false}
                                onChange={(e) => setData(prev => {
                                    return { ...prev, Organization_Name: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: inpwidth,
                                    height: '40px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Organization Email :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Email'
                                type='text'
                                defaultValue={EmployerData.Employer ? data.Organization_Email : null}
                                disabled={data.verified ? true : false}
                                onChange={(e) => setData(prev => {
                                    return { ...prev, Organization_Email: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: inpwidth,
                                    height: '40px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }} />
                        </Box>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Button onClick={OrganizationDataChecker} color="secondary" variant='outlined' sx={{
                            boxShadow: 0,
                            textTransform: 'none',
                            px: 2,
                            '&:hover': {
                                background: 'rgb(156, 39, 176)',
                                color: 'white'
                            }
                        }}>Next  </Button>
                    </Box>
                </Box>
                <Box sx={{ display: displayForYourInformation === 1 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
                    <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={() => setDisplayForYourInformation(0)} />
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Your Name :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Your Name'
                                type='text'
                                defaultValue={EmployerData.Employer ? data.User_Name : null}
                                disabled={data.verified ? true : false}
                                onChange={(e) => setData(prev => {
                                    return { ...prev, User_Name: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: inpwidth,
                                    height: '40px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Your Designation :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Your Designation'
                                type='text'
                                defaultValue={EmployerData.Employer ? data.User_Designation : null}
                                disabled={data.verified ? true : false}
                                onChange={(e) => setData(prev => {
                                    return { ...prev, User_Designation: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: inpwidth,
                                    height: '40px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Your Email :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Your Email'
                                type='text'
                                defaultValue={EmployerData.Employer ? data.User_Email : null}
                                disabled={data.verified ? true : false}
                                onChange={(e) => setData(prev => {
                                    return { ...prev, User_Email: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: inpwidth,
                                    height: '40px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Your Phone Number :</Typography>
                        <Box sx={{ my: 3, display: 'flex', alignItems: 'center', border: '1px solid #000000', justifyContent: 'space-between', width: '100.6%' }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: '500', padding: '10px', background: 'rgb(156, 39, 176)', color: 'white' }}> +91 </Typography>

                            <input
                                placeholder='Your Phone Number'
                                type='Number'
                                defaultValue={EmployerData.Employer ? data.User_Number : null}
                                disabled={data.verified ? true : false}
                                onChange={(e) => setData(prev => {
                                    return { ...prev, User_Number: e.target.value }
                                })}
                                style={{
                                    border: 'none',
                                    userSelect: 'none',
                                    width: inpwidth,
                                    height: '40px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }} />
                            <Tooltip title="Verified" placement="top" arrow>
                                <DoneIcon sx={{ fontSize: '24px', color: 'green', px: 1, }} />
                            </Tooltip>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button onClick={EmployerDataChecker} color="secondary" variant='outlined' sx={{ boxShadow: 0, textTransform: 'none' }}>Next</Button>
                    </Box>
                </Box>
                <Box sx={{ display: displayForYourInformation === 2 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
                    <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={() => setDisplayForYourInformation(1)} />
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Your Query :</Typography>
                        <Box sx={{ my: 3 }}>
                            <textarea
                                placeholder='Your Query'
                                type='text'
                                onChange={(e) => setData(prev => {
                                    return { ...prev, query: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: inpwidth,
                                    height: '300px',
                                    fontSize: '14px',
                                    resize: 'none',
                                    textAlign: 'center',
                                }} />
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button onClick={DataSend} color="secondary" variant='contained' sx={{ boxShadow: 0, textTransform: 'none' }}>Send</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}



export default function Post1() {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1100px)');
    const mdMax = useMediaQuery('(max-width:1100px)');
    const mdMin = useMediaQuery('(min-width:650px)');
    const sm = useMediaQuery('(max-width:650px)');



    return (
        <>
            {xlMax && xlMin && (
                <Content display={'flex'} width={'auto'} align={'unset'} inpwidth={'100%'} txtWidth={'350px'} datawidth={'40%'} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content display={'block'} width={'auto'} align={'center'} inpwidth={'100%'} txtWidth={'350px'} datawidth={'60%'} />
            )}
            {sm && (<Content display={'block'} width={'80%'} align={'center'} inpwidth={'100%'} txtWidth={'280px'} datawidth={'60%'} />
            )}
        </>
    )
}