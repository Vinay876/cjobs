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
import { useMediaQuery } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { seekerUpdate, seekerLogin } from '../../api/seeker'
import { SkillsData } from '../../constants/data'


function Content({ display, width, align, inpwidth, txtWidth, datawidth, forOtherDisplay, setForOtherDisplay, id }) {
    const { setMessage, setMessageType, setShow, decrypt, SeekerData, encrypt, toTitle } = React.useContext(LoginContext)
    const [skills, setSkills] = React.useState([])

    const GetData = React.useRef(() => { })

    const [data, setData] = React.useState({
        User_id: '',
        User_Name: '',
        User_Address: '',
        User_Email: '',
        User_Number: '',
        open: false,
    })
    React.useEffect(() => {
        GetData.current()
    }, [])

    function skillAdder(event) {
        var name = event.currentTarget.textContent;
        if (skills.includes(name)) {
            var filtered = skills.filter((item) => item !== name);
            setSkills(filtered)
        } else {
            setSkills((prev) => [...prev, name]);
        }
    }


    GetData.current = async () => {
        if (SeekerData.Seeker) {
            const response = await seekerLogin({
                User_Name: decrypt(SeekerData.User_Name),
                User_Email: decrypt(SeekerData.User_Email),
                User_Number: decrypt(SeekerData.User_Number),
            })
            if (response) {
                setData(prev => {
                    return {
                        ...prev,
                        User_id: response.User_id,
                        User_Name: response.User_Name,
                        User_Address: response.User_Address,
                        User_Email: response.User_Email,
                        User_Number: response.User_Number,
                    }
                })
                setSkills(response.Skills)
            }
        }
    }
    const [displayForYourInformation, setDisplayForYourInformation] = React.useState(0)
    var validRegexForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    function UserDataChecker() {

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

        if (!data.User_Address || data.User_Address.length < 10) {
            setShow(true)
            setMessageType('error')
            setMessage('User Address is not Valid.')
            return
        }
        if (!data.User_Number || data.User_Number.length < 10) {
            setShow(true)
            setMessageType('warning')
            setMessage('Phone Number is not valid.')
            return
        }
        setDisplayForYourInformation(1)
    }

    async function UpdateAsSeeker() {
        if (skills.length < 1) {
            setShow(true)
            setMessageType('error')
            setMessage("Add Skills")
            return
        }
        const response = await seekerUpdate({
            User_id: data.User_id,
            User_Name: data.User_Name,
            User_Address: data.User_Address,
            User_Email: data.User_Email,
            User_Number: data.User_Number,
            Skills: skills,
        })
        if (response) {
            localStorage.setItem('INIT_DATA', JSON.stringify({
                Seeker: true,
                User_id: data.User_id,
                User_Name: encrypt(data.User_Name),
                User_Address: encrypt(data.User_Address),
                User_Email: encrypt(data.User_Email),
                User_Number: encrypt(data.User_Number),
            }))
        }
        if (forOtherDisplay) {
            setForOtherDisplay(false)
            return
        }
        window.location.reload(false)
    }

    return (
        <>
            {
                forOtherDisplay ?
                    <>
                        <Typography variant="h5" sx={{ textAlign: "center", color: "rgb(156, 39, 176)", fontWeight: '800', textTransform: 'uppercase', py: 2, fontFamily: 'Fredoka', borderBottom: '2px solid rgb(156, 39, 176)', width: txtWidth, m: '0px auto' }}>
                            Your Profile
                        </Typography>
                        <Typography sx={{ textAlign: "center", fontWeight: '800', py: 2, fontFamily: 'Fredoka', }}>
                            Edit your profile to for this {toTitle(id)}
                        </Typography>
                    </>
                    :
                    <>
                        <Typography variant="h5" sx={{ textAlign: "center", color: "rgb(156, 39, 176)", fontWeight: '800', textTransform: 'uppercase', py: 2, fontFamily: 'Fredoka', borderBottom: '2px solid rgb(156, 39, 176)', width: txtWidth, m: '0px auto' }}>
                            Your Profile
                        </Typography>
                        <Typography sx={{ textAlign: "center", fontWeight: '800', py: 2, fontFamily: 'Fredoka', }}>
                            Edit your profile to give people more information about yourself
                        </Typography>
                    </>
            }


            <Box sx={{ display: display, alignItems: 'center', justifyContent: 'space-between', textAlign: align }}>
                <Box>
                    <img src={require("../../assets/report/update-seeker.webp")} style={{ width: width }} alt="Update" />
                </Box>

                <Box sx={{ display: displayForYourInformation === 0 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Your Name :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Name'
                                type='text'
                                defaultValue={data.User_Name}
                                onChange={e => setData(prev => {
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
                                placeholder='Email'
                                type='text'
                                defaultValue={data.User_Email}
                                onChange={e => setData(prev => {
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
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Your Address :</Typography>
                        <Box sx={{ my: 3 }}>
                            <input
                                placeholder='Address'
                                type='text'
                                defaultValue={data.User_Address}
                                onChange={e => setData(prev => {
                                    return { ...prev, User_Address: e.target.value }
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
                                defaultValue={data.User_Number}
                                disabled={true}
                                onChange={e => setData(prev => {
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
                        <Button onClick={UserDataChecker} color="secondary" variant='outlined' sx={{
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
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Your Skills :</Typography>
                        <Box sx={{ my: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <input
                                placeholder='Your Skills'
                                value={skills.map(data => ` ${data} `)}
                                type='text'
                                disabled={true}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: inpwidth,
                                    height: '40px',
                                    fontSize: '14px',
                                    textAlign: 'center',
                                }} />
                            {
                                data.open ? <ExpandLessIcon sx={{ p: 1.2, fontSize: '25px', color: 'white', background: 'rgb(156,39,176)', cursor: 'pointer' }} onClick={() => setData(prev => {
                                    return { ...prev, open: !data.open }
                                })} />
                                    :
                                    <ExpandMoreIcon sx={{ p: 1.2, fontSize: '25px', color: 'white', background: 'rgb(156,39,176)', cursor: 'pointer' }} onClick={() => setData(prev => {
                                        return { ...prev, open: !data.open }
                                    })} />
                            }
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", height: '200px', overflowY: 'scroll', border: data.open ? '1px solid black' : 'none', my: 2 }}>
                        {
                            data.open ?
                                <Box sx={{ textAlign: 'center', }}>
                                    {
                                        SkillsData.map((datas, index) => {
                                            var inIncluded = false
                                            if (skills.includes(datas)) {
                                                inIncluded = true
                                            }
                                            return (
                                                <Typography
                                                    key={index}
                                                    sx={{
                                                        color: inIncluded ? 'white' : 'rgb(156, 39, 176)',
                                                        background: inIncluded ? 'rgb(156, 39, 176)' : 'white',
                                                        py: 1,
                                                        my: 1,
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            background: 'rgb(156, 39, 176)',
                                                            color: 'white',
                                                            borderRadius: 1
                                                        }
                                                    }} onClick={skillAdder}>
                                                    {datas}
                                                </Typography>
                                            )
                                        })
                                    }
                                </Box>

                                :
                                null
                        }
                    </Box>
                    {
                        forOtherDisplay ?
                            <Box sx={{ textAlign: 'center' }}>
                                <Button onClick={UpdateAsSeeker} color="secondary" variant='contained' sx={{ boxShadow: 0, textTransform: 'none' }}>Update And Continue</Button>
                            </Box>
                            :
                            <Box sx={{ textAlign: 'center' }}>
                                <Button onClick={UpdateAsSeeker} color="secondary" variant='contained' sx={{ boxShadow: 0, textTransform: 'none' }}>Update</Button>
                            </Box>
                    }

                </Box>
            </Box>

        </>
    )
}



export default function Profile2({ forOtherDisplay, setForOtherDisplay, id }) {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1100px)');
    const mdMax = useMediaQuery('(max-width:1100px)');
    const mdMin = useMediaQuery('(min-width:650px)');
    const sm = useMediaQuery('(max-width:650px)');



    return (
        <>
            {xlMax && xlMin && (
                <Content display={'flex'} width={'auto'} align={'unset'} inpwidth={'100%'} txtWidth={'350px'} datawidth={'40%'} forOtherDisplay={forOtherDisplay} setForOtherDisplay={setForOtherDisplay} id={id} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content display={'block'} width={'auto'} align={'center'} inpwidth={'100%'} txtWidth={'350px'} datawidth={'60%'} forOtherDisplay={forOtherDisplay} setForOtherDisplay={setForOtherDisplay} id={id} />
            )}
            {sm && (<Content display={'block'} width={'80%'} align={'center'} inpwidth={'100%'} txtWidth={'280px'} datawidth={'60%'} forOtherDisplay={forOtherDisplay} setForOtherDisplay={setForOtherDisplay} id={id} />
            )}
        </>
    )
}