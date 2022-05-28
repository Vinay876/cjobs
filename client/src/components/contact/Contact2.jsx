// login as job seeker
import React from 'react'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '../../css/login.css'
import { LoginContext } from '../../context/Context'
import Tooltip from '@mui/material/Tooltip';
import WarningIcon from '@mui/icons-material/Warning';
import DoneIcon from '@mui/icons-material/Done';
import { sendOTP } from '../../api/otpSend'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMediaQuery } from '@mui/material'
import { seekerContact } from '../../api/contact'


function Content({ display, width, align, inpwidth, txtWidth, datawidth }) {
    const navigate = useNavigate()
    const { setMessage, setMessageType, setShow, decrypt, SeekerData } = React.useContext(LoginContext)
    const [resendTime, setResendTime] = React.useState(60)
    const autoRunFunction = React.useRef(() => { })
    const [data, setData] = React.useState({
        User_Name: '',
        User_Email: '',
        User_Number: '',
        otp: '',
        verified: false,
        enteredOtp: '',
        query: ''
    })
    const timeRef = React.useRef()
    const [displayForYourInformation, setDisplayForYourInformation] = React.useState(0)
    var validRegexForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    React.useEffect(() => {
        autoRunFunction.current()
    }, [])

    autoRunFunction.current = () => {
        if (SeekerData.Seeker) {
            setData(prev => {
                return {
                    ...prev,
                    User_Name: decrypt(SeekerData.User_Name),
                    User_Email: decrypt(SeekerData.User_Email),
                    User_Number: decrypt(SeekerData.User_Number),
                    verified: true
                }
            })
        }
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
            setShow(true)
            setMessageType('success')
            setMessage('Number verified')
        } else {
            setShow(true)
            setMessageType('error')
            setMessage('Incorrect OTP')
            setData(prev => {
                return { ...prev, verified: false }
            })
        }
    }

    async function DataChecker() {

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

        if (!data.User_Number || data.User_Number.length < 10) {
            setShow(true)
            setMessageType('warning')
            setMessage('Phone Number is not valid.')
            return
        }
        if (!data.verified) {
            setShow(true)
            setMessageType('warning')
            setMessage('User Number is not verified.')
            return
        }
        setDisplayForYourInformation(1)
    }


    async function DataSend() {
        if (!data.query || data.query.length < 10) {
            setShow(true)
            setMessageType('warning')
            setMessage('Query must be specific.')
            return
        }
        const response = await seekerContact({
            User_Name: data.User_Name,
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
                Contact us if there is anything you are not sure about.<br /> We will help you anytime
            </Typography>

            <Box sx={{ display: display, alignItems: 'center', justifyContent: 'space-between', textAlign: align }}>
                <Box>
                    <img src={require("../../assets/report/contact.webp")} style={{ width: width }} alt="Contact" />
                </Box>
                <Box sx={{ display: displayForYourInformation === 0 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Your Name :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Your Name'
                                type='text'
                                defaultValue={SeekerData.Seeker ? data.User_Name : null}
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
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Your Email :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Your Email'
                                type='text'
                                defaultValue={SeekerData.Seeker ? data.User_Email : null}
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
                                type='number'
                                defaultValue={SeekerData.Seeker ? data.User_Number : null}
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
                        <Button onClick={DataChecker} color="secondary" variant='outlined' sx={{ boxShadow: 0, textTransform: 'none' }}>Next</Button>
                    </Box>
                </Box>
                <Box sx={{ display: displayForYourInformation === 1 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
                    <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={() => setDisplayForYourInformation(0)} />
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


export default function Contact2() {

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