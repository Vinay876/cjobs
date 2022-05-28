// update as employer
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '../../css/login.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LoginContext } from '../../context/Context'
import Tooltip from '@mui/material/Tooltip';
import DoneIcon from '@mui/icons-material/Done';
import { employerUpdate } from '../../api/employer'
import { useMediaQuery } from '@mui/material'
import { employerLogin } from '../../api/employer'


function Content({ display, width, align, inpwidth, txtWidth, datawidth }) {
    const { setMessage, setMessageType, setShow, decrypt, EmployerData, encrypt } = React.useContext(LoginContext)

    const GetData = React.useRef(() => { })

    const [data, setData] = React.useState({
        User_id: '',
        Organization_Name: '',
        Organization_Address: '',
        Organization_Email: '',
        Organization_Telephone: '',
        Organization_Details: '',
        Organization_Website: '',
        User_Name: '',
        User_Designation: '',
        User_Email: '',
        User_Number: '',
    })
    React.useEffect(() => {
        GetData.current()
    }, [])

    GetData.current = async () => {
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
                        Organization_Address: response.Organization_Address,
                        Organization_Telephone: response.Organization_Telephone,
                        Organization_Website: response.Organization_Website,
                        Organization_Details: response.Organization_Details,
                        User_Name: response.User_Name,
                        User_Designation: response.User_Designation,
                        User_Email: response.User_Email,
                        User_Number: response.User_Number,
                    }
                })
            }
        }
    }
    const [displayForYourInformation, setDisplayForYourInformation] = React.useState(0)
    var validRegexForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
        if (!data.Organization_Address || data.Organization_Address.length < 10) {
            setShow(true)
            setMessageType('error')
            setMessage('Organization Address is not Valid.')
            return
        }
        if (!data.Organization_Telephone || data.Organization_Telephone.length < 8) {
            setShow(true)
            setMessageType('warning')
            setMessage('Organization Telephone is not valid.')
            setDisplayForYourInformation(1)
        }
        setDisplayForYourInformation(1)
    }

    function DetailsChecker() {
        if (!data.Organization_Website || data.Organization_Website.length < 4) {
            setShow(true)
            setMessageType('error')
            setMessage('Website is not valid.')
            return
        }
        if (!data.Organization_Details || data.Organization_Details.length < 4) {
            setShow(true)
            setMessageType('error')
            setMessage('Detail is too short.')
            return
        }
        setDisplayForYourInformation(2)
    }


    async function UpdateAsEmployer() {
        if (!data.User_Email.match(validRegexForEmail)) {
            setShow(true)
            setMessageType('error')
            setMessage("Invalid User Email")
            return
        }
        if (!data.User_Name || data.User_Name.length < 4) {
            setShow(true)
            setMessageType('error')
            setMessage('User Name is not Valid.')
            return
        }
        if (!data.User_Designation) {
            setShow(true)
            setMessageType('error')
            setMessage('User Designation is not Valid.')
            return
        }
        if (!data.User_Number || data.User_Number.length < 8) {
            setShow(true)
            setMessageType('warning')
            setMessage('User Number is not valid.')
            return
        }

        const response = await employerUpdate({
            User_id: data.User_id,
            Organization_Name: data.Organization_Name,
            Organization_Email: data.Organization_Email,
            Organization_Address: data.Organization_Address,
            Organization_Telephone: data.Organization_Telephone,
            Organization_Website: data.Organization_Website,
            Organization_Details: data.Organization_Details,
            User_Name: data.User_Name,
            User_Designation: data.User_Designation,
            User_Email: data.User_Email,
            User_Number: data.User_Number,
        })
        if (response) {
            localStorage.setItem('INIT_DATA', JSON.stringify({
                Employer: true,
                User_id: data.User_id,
                Organization_Name: encrypt(data.Organization_Name),
                Organization_Address: encrypt(data.Organization_Address),
                Organization_Email: encrypt(data.Organization_Email),
                Organization_Telephone: encrypt(data.Organization_Telephone),
                User_Name: encrypt(data.User_Name),
                User_Designation: encrypt(data.User_Designation),
                User_Email: encrypt(data.User_Email),
                User_Number: encrypt(data.User_Number),
            }));
            window.location.reload(false)
        }
    }


    return (
        <>
            <Typography variant="h5" sx={{ textAlign: "center", color: "rgb(156, 39, 176)", fontWeight: '800', textTransform: 'uppercase', py: 2, fontFamily: 'Fredoka', borderBottom: '2px solid rgb(156, 39, 176)', width: txtWidth, m: '0px auto' }}>
                Your Profile
            </Typography>
            <Typography sx={{ textAlign: "center", fontWeight: '800', py: 2, fontFamily: 'Fredoka', }}>
                Edit your profile to give people more information about your organization
            </Typography>

            <Box sx={{ display: display, alignItems: 'center', justifyContent: 'space-between', textAlign: align }}>
                <Box>
                    <img src={require("../../assets/report/update-employers.webp")} style={{ width: width }} alt="Update" />
                </Box>

                <Box sx={{ display: displayForYourInformation === 0 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Organization Name :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Name'
                                type='text'
                                defaultValue={data.Organization_Name}
                                onChange={e => setData(prev => {
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
                                defaultValue={data.Organization_Email}
                                onChange={e => setData(prev => {
                                    return { ...prev, Organization_Email: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: '100%',
                                    height: '40px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Organization Address :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Address'
                                type='text'
                                defaultValue={data.Organization_Address}
                                onChange={e => setData(prev => {
                                    return { ...prev, Organization_Address: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: '100%',
                                    height: '40px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Organization Telephone :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Telephone'
                                type='Number'
                                defaultValue={data.Organization_Telephone}
                                onChange={e => setData(prev => {
                                    return { ...prev, Organization_Telephone: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: '100%',
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
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Organization Website :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Web Address'
                                type='text'
                                defaultValue={data.Organization_Website}
                                onChange={e => setData(prev => {
                                    return { ...prev, Organization_Website: e.target.value }
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
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Organization Details :</Typography>
                        <Box sx={{ my: 3 }}>
                            <textarea
                                placeholder='Organization Details'
                                type='text'
                                defaultValue={data.Organization_Details}
                                onChange={(e) => setData(prev => {
                                    return { ...prev, Organization_Details: e.target.value }
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
                        <Button onClick={DetailsChecker} color="secondary" variant='outlined' sx={{
                            boxShadow: 0,
                            textTransform: 'none',
                            px: 2,
                            '&:hover': {
                                background: 'rgb(156, 39, 176)',
                                color: 'white'
                            }
                        }}>Next </Button>
                    </Box>
                </Box>
                <Box sx={{ display: displayForYourInformation === 2 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
                    <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={() => setDisplayForYourInformation(1)} />
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Your Name :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Your Name'
                                type='text'
                                defaultValue={data.User_Name}
                                onChange={e => setData(prev => {
                                    return { ...prev, User_Name: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: '100%',
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
                                defaultValue={data.User_Email}
                                onChange={e => setData(prev => {
                                    return { ...prev, User_Email: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: '100%',
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
                                defaultValue={data.User_Designation}
                                onChange={e => setData(prev => {
                                    return { ...prev, User_Designation: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: '100%',
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
                                disabled={true}
                                defaultValue={data.User_Number}
                                style={{
                                    border: 'none',
                                    userSelect: 'none',
                                    width: '100%',
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
                        <Button onClick={UpdateAsEmployer} color="secondary" variant='contained' sx={{ boxShadow: 0, textTransform: 'none' }}>Update</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default function Profile1() {

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