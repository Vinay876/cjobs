// login as employer
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '../../css/login.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LoginContext } from '../../context/Context'
import Tooltip from '@mui/material/Tooltip';
import WarningIcon from '@mui/icons-material/Warning';
import DoneIcon from '@mui/icons-material/Done';
import { sendOTP } from '../../api/otpSend'
import { employerLogin } from '../../api/employer'

const userData = {
    Organization_Name: '',
    Organization_Email: '',
    User_Name: '',
    User_Email: '',
    User_Number: '',
    otp: '',
    verified: false,
    enteredOtp: '',
}

export default function Login1() {
    const navigate = useNavigate()
    const { setMessage, setMessageType, setShow, encrypt } = React.useContext(LoginContext)
    const [resendTime, setResendTime] = React.useState(60)
    const [data, setData] = React.useState(userData)
    const timeRef = React.useRef()
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
        setDisplayForYourInformation(1)
    }

    async function NumberVerifier() {
        clearInterval(timeRef.current);
        setResendTime(60);
        const response = await sendOTP({ Number: `+91${data.User_Number}` })
        if (response) {
            setShow(true)
            setMessageType('success')
            setMessage('OTP sent.')
            setData(prev => {
                return { ...prev, otp: response.slice(0, 6) }
            })
        }
        timeRef.current = setInterval(() => {
            setResendTime((time) => time - 1)
        }, 1000);
    }
    if (resendTime === 0) {
        clearInterval(timeRef.current)
    }

    const verifyOTP = () => {
        if (data.otp === data.enteredOtp) {
            setData(prev => {
                return { ...prev, verified: true, otp: '' }
            })
        } else {
            setShow(true)
            setMessageType('error')
            setMessage('Incorrect OTP')
            setData(prev => {
                return { ...prev, verified: false }
            })
        }
    }

    async function RegisterAsEmployer() {
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
        const response = await employerLogin({
            Organization_Name: data.Organization_Name,
            Organization_Email: data.Organization_Email,
            User_Name: data.User_Name,
            User_Email: data.User_Email,
            User_Number: data.User_Number,
        })
        if (response) {
            localStorage.setItem('INIT_DATA', JSON.stringify({
                Employer: true,
                Organization_Name: encrypt(response.Organization_Name),
                Organization_Address: encrypt(response.Organization_Address),
                Organization_Email: encrypt(response.Organization_Email),
                Organization_Telephone: encrypt(response.Organization_Telephone),
                User_Name: encrypt(response.User_Name),
                User_Designation: encrypt(response.User_Designation),
                User_Email: encrypt(response.User_Email),
                User_Number: encrypt(response.User_Number),
            }));
            navigate('/')
            window.location.reload(false)
        } else {
            setShow(true)
            setMessageType('error')
            setMessage('Your Entries are incorrect check them or try again later')
        }
    }


    return (
        <>
            <Typography variant="h5" sx={{ textAlign: "center", color: "rgb(156, 39, 176)", fontWeight: '800', textTransform: 'uppercase', py: 2, fontFamily: 'Fredoka', borderBottom: '2px solid rgb(156, 39, 176)', width: '350px', m: '0px auto' }}>
                Login at CJOBS
            </Typography>
            <Typography sx={{ textAlign: "center", fontWeight: '800', py: 2, fontFamily: 'Fredoka', }}>
                Login for your Organization and get best employees across india
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                    <img src={require("../../assets/report/register_organisation.webp")} alt="Register" />
                </Box>

                <Box sx={{ display: displayForYourInformation === 0 ? 'block' : 'none', width: "40%", m: '0px auto', mt: 5 }}>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Organization Name :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Name'
                                type='text'
                                onChange={e => setData(prev => {
                                    return { ...prev, Organization_Name: e.target.value }
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
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Organization Email :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Email'
                                type='text'
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
                <Box sx={{ display: displayForYourInformation === 1 ? 'block' : 'none', width: "40%", m: '0px auto', mt: 5 }}>
                    <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={() => setDisplayForYourInformation(0)} />
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Your Name :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Your Name'
                                type='text'
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
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Your Phone Number :</Typography>
                        <Box sx={{ my: 3, display: 'flex', alignItems: 'center', border: '1px solid #000000', justifyContent: 'space-between', width: '100.6%' }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: '500', padding: '10px', background: 'rgb(156, 39, 176)', color: 'white' }}> +91 </Typography>

                            <input
                                placeholder='Your Phone Number'
                                type='Number'
                                disabled={data.verified ? true : false}
                                onChange={e => setData(prev => {
                                    return { ...prev, User_Number: e.target.value }
                                })}
                                style={{
                                    border: 'none',
                                    userSelect: 'none',
                                    width: '100%',
                                    height: '40px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }} />
                            {
                                data.User_Number.length === 10 ?
                                    <Box>
                                        {
                                            data.verified ?
                                                <Tooltip title="Verified" placement="top" arrow>
                                                    <DoneIcon sx={{ fontSize: '24px', color: 'green', px: 1, }} />
                                                </Tooltip>
                                                :
                                                <Tooltip title="Click to verify" placement="top" arrow>
                                                    <WarningIcon onClick={NumberVerifier} sx={{ cursor: 'pointer', fontSize: '20px', color: 'red', px: 1, }} />
                                                </Tooltip>
                                        }
                                    </Box>
                                    :
                                    null
                            }
                        </Box>
                    </Box>
                    {
                        data.otp ?
                            <Box sx={{ margin: '0px auto', }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '600', textALign: 'start', color: 'rgb(156, 39, 176)' }}>Enter OTP : </Typography>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography sx={{ pointerEvents: resendTime === 0 ? 'auto' : 'none', opacity: resendTime === 0 ? '1' : '0.6', cursor: resendTime === 0 ? 'pointer' : 'no-drop', fontSize: '16px', mr: 1, color: resendTime === 0 ? 'rgb(156, 39, 176)' : 'black' }} onClick={() => NumberVerifier()}>
                                            Resend {
                                                resendTime === 0 ? null :
                                                    <span>in 0:{resendTime < 10 ? `0${resendTime}` : resendTime}</span>
                                            }
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                    <input
                                        placeholder='OTP'
                                        type='number'
                                        onChange={e => setData(prev => {
                                            return { ...prev, enteredOtp: e.target.value }
                                        })}
                                        style={{
                                            border: "1px solid black",
                                            userSelect: 'none',
                                            width: '50%',
                                            height: '35px',
                                            fontSize: '14px',
                                            textAlign: 'center',
                                            margin: '5px auto',
                                        }} />
                                </Box>
                                <Box sx={{ textAlign: 'center', my: 2 }}>
                                    <Button sx={{
                                        boxShadow: 0,
                                        textTransform: 'none',
                                        px: 2,
                                        '&:hover': {
                                            background: 'rgb(156, 39, 176)',
                                            color: 'white'
                                        }
                                    }} color='secondary' variant='outlined' onClick={verifyOTP}>
                                        Verify
                                    </Button>
                                </Box>

                            </Box>
                            :
                            null
                    }
                    <Box sx={{ textAlign: 'center' }}>
                        <Button onClick={RegisterAsEmployer} color="secondary" variant='contained' sx={{ boxShadow: 0, textTransform: 'none' }}>Login</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}
