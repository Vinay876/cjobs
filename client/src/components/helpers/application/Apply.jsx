import React from 'react'
import { Box, Typography, useMediaQuery, Button } from '@mui/material'
import { LoginContext } from '../../../context/Context'
import { postApplication } from '../../../api/postFetch'
import { useNavigate } from 'react-router-dom'

function Content({ id, typeId, display, width, align, inpwidth, txtWidth, datawidth }) {
    const navigate = useNavigate()
    const { toTitle, setShow, setMessageType, setMessage, SeekerData } = React.useContext(LoginContext)
    const [data, setData] = React.useState({
        Answer1: '',
        Answer2: ''
    })

    async function SendApplication() {
        if (!data.Answer1 || data.Answer1.length < 10) {
            setShow(true)
            setMessageType('error')
            setMessage('Please answer the question clearly.')
            return
        }
        if (!data.Answer2) {
            setShow(true)
            setMessageType('error')
            setMessage("Please share the link links. If you don't have one please explain the reason for that")
            return
        }
        if (window.confirm("Are you sure to post this application.")) {
            const response = await postApplication({
                User_id: SeekerData.User_id,
                Post_id: typeId,
                Type: toTitle(id),
                Answer1: data.Answer1,
                Answer2: data.Answer2,
                Application_Post_Date: new Date()
            })
            if (response) {
                navigate('/')
                setShow(true)
                setMessageType('success')
                setMessage("Application Posted.")
                return
            }
            else {
                setShow(true)
                setMessageType('error')
                setMessage("Something went wromg try again later.")
                return
            }
        }
    }

    return (
        <>
            <Typography variant="h5" sx={{ textAlign: "center", color: "rgb(156, 39, 176)", fontWeight: '800', textTransform: 'uppercase', py: 2, fontFamily: 'Fredoka', borderBottom: '2px solid rgb(156, 39, 176)', width: txtWidth, m: '0px auto' }}>
                Apply for the {toTitle(id)}
            </Typography>
            <Typography sx={{ textAlign: "center", fontWeight: '800', py: 2, fontFamily: 'Fredoka', }}>
                Apply for this {toTitle(id)} and take a step towards your career.
            </Typography>

            <Box sx={{ display: display, alignItems: 'center', justifyContent: 'space-between', textAlign: align }}>
                <Box>
                    <img src={require("../../../assets/report/apply.webp")} style={{ width: width }} alt={`Apply for ${toTitle(id)}`} />
                </Box>

                <Box sx={{ width: datawidth, m: '0px auto', mt: 5 }}>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> From which date you can start? Are sure you match the requirements that are listed for this {toTitle(id)}?
                            How long you can work? When you are avaliable? Where do you live? {id === 'internship' ? 'How long You are available?' : null}
                        </Typography>
                        <Box sx={{ my: 3 }}>
                            <textarea
                                placeholder='Answer'
                                type='text'
                                onChange={(e) => setData(prev => {
                                    return { ...prev, Answer1: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: inpwidth,
                                    height: '150px',
                                    fontSize: '14px',
                                    resize: 'none',
                                    textAlign: 'center',
                                }} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Please Share the projects that you have worked in this field :</Typography>
                        <Box sx={{ my: 3 }}>
                            <textarea
                                placeholder='Answer'
                                type='text'
                                onChange={(e) => setData(prev => {
                                    return { ...prev, Answer2: e.target.value }
                                })}
                                style={{
                                    border: '1px solid #000000',
                                    userSelect: 'none',
                                    width: inpwidth,
                                    height: '150px',
                                    fontSize: '14px',
                                    resize: 'none',
                                    textAlign: 'center',
                                }} />
                        </Box>
                    </Box>


                    <Box sx={{ textAlign: 'center' }}>
                        <Button onClick={SendApplication} color="secondary" variant='contained' sx={{ boxShadow: 0, textTransform: 'none' }}>Apply</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}



export default function Apply({ id, typeId }) {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:1100px)');
    const mdMax = useMediaQuery('(max-width:1100px)');
    const mdMin = useMediaQuery('(min-width:650px)');
    const sm = useMediaQuery('(max-width:650px)');



    return (
        <>
            {xlMax && xlMin && (
                <Content display={'flex'} width={'auto'} align={'unset'} inpwidth={'100%'} txtWidth={'350px'} datawidth={'40%'} id={id} typeId={typeId} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content display={'block'} width={'auto'} align={'center'} inpwidth={'100%'} txtWidth={'350px'} datawidth={'60%'} id={id} typeId={typeId} />
            )}
            {sm && (<Content display={'block'} width={'80%'} align={'center'} inpwidth={'100%'} txtWidth={'280px'} datawidth={'60%'} id={id} typeId={typeId} />
            )}
        </>
    )
}