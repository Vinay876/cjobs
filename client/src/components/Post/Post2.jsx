// post an internship
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '../../css/login.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LoginContext } from '../../context/Context'
import { SkillsData, postJobTags, PerksInternships } from '../../constants/data'
import { useMediaQuery } from '@mui/material'
import { v4 as uuidV4 } from 'uuid'
import { employerLogin } from '../../api/employer'
import { internshipPosting } from '../../api/employerPostings'

function Content({ display, width, align, inpwidth, txtWidth, datawidth }) {
  const navigate = useNavigate()
  const { setMessage, setMessageType, setShow, decrypt, EmployerData } = React.useContext(LoginContext)
  const [skills, setSkills] = React.useState([])
  const [tags, setTags] = React.useState([])
  const [perks, setPerks] = React.useState([])
  var validRegexForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [data, setData] = React.useState({
    User_id: '',
    Organization_Name: '',
    Organization_Email: '',
    Organization_Address: '',
    Organization_Website: '',
    Organization_Details: '',
    User_Name: '',
    User_Designation: '',
    User_Email: '',
    Internship_Type: '',
    Internship_Location: '',
    Internship_Duration: '',
    Start_Date: '',
    Stipend: '',
    Apply_By: '',
    Short_Description: '',
    Detailed_Description: '',
    Who_can_apply: '',
    Number_of_openings: '',
    id: uuidV4(),
    open: false,
    open2: false,
    open3: false
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
            Organization_Address: response.Organization_Address,
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

  const [displayForYourInformation, setDisplayForYourInformation] = React.useState(4)


  function skillAdder(event) {
    var name = event.currentTarget.textContent;
    if (skills.includes(name)) {
      var filtered = skills.filter((item) => item !== name);
      setSkills(filtered)
    } else {
      setSkills((prev) => [...prev, name]);
    }
  }

  function tagAdder(event) {
    var name = event.currentTarget.textContent;
    if (tags.includes(name)) {
      var filtered = tags.filter((item) => item !== name);
      setTags(filtered)
    } else {
      setTags((prev) => [...prev, name]);
    }
  }

  function perkAdder(event) {
    var name = event.currentTarget.textContent;
    if (perks.includes(name)) {
      var filtered = perks.filter((item) => item !== name);
      setPerks(filtered)
    } else {
      setPerks((prev) => [...prev, name]);
    }
  }


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
    if (!data.Organization_Address || data.Organization_Address.length < 4) {
      setShow(true)
      setMessageType('error')
      setMessage('Organization Address is not Valid.')
      return
    }
    if (!data.Organization_Website || data.Organization_Website.length < 4) {
      setShow(true)
      setMessageType('error')
      setMessage('Organization Name is not Valid.')
      return
    }
    if (!data.Organization_Details || data.Organization_Details.length < 4) {
      setShow(true)
      setMessageType('error')
      setMessage('Organization Name is not Valid.')
      return
    }
    setDisplayForYourInformation(1)
  }

  function EmployerDataChecker() {
    if (!data.User_Name || data.User_Name.length < 4) {
      setShow(true)
      setMessageType('error')
      setMessage('User Name is not Valid.')
      return
    }
    if (!data.User_Designation || data.User_Designation.length < 4) {
      setShow(true)
      setMessageType('error')
      setMessage('User Designation is not Valid.')
      return
    }
    if (!data.User_Email.match(validRegexForEmail)) {
      setShow(true)
      setMessageType('error')
      setMessage("Invalid User Email")
      return
    }

    setDisplayForYourInformation(2)
  }


  function MajorDetailsChecker() {
    if (!data.Internship_Type || data.Internship_Type.length < 4) {
      setShow(true)
      setMessageType('error')
      setMessage('Invalid Job Type.')
      return
    }
    if (!data.Internship_Location) {
      setShow(true)
      setMessageType('error')
      setMessage('Enter City.')
      return
    }
    if (!data.Start_Date) {
      setShow(true)
      setMessageType('error')
      setMessage('Enter start date.')
      return
    }
    if (!data.Internship_Duration) {
      setShow(true)
      setMessageType('error')
      setMessage('Enter internship duration.')
      return
    }
    if (!data.Apply_By) {
      setShow(true)
      setMessageType('error')
      setMessage('Enter last application date.')
      return
    }
    if (!data.Stipend) {
      setShow(true)
      setMessageType('warning')
      setMessage('Enter Stipend')
      return
    }
    if (!data.Short_Description || data.Short_Description.length < 4) {
      setShow(true)
      setMessageType('error')
      setMessage('Enter Short Description.')
      return
    }
    setDisplayForYourInformation(3)
  }

  function MinorDetailsChecker() {
    if (!data.Detailed_Description || data.Detailed_Description.length < 4) {
      setShow(true)
      setMessageType('error')
      setMessage('Enter in detail about job.')
      return
    }
    if (skills.length < 1) {
      setShow(true)
      setMessageType('error')
      setMessage('Enter skills.')
      return
    }
    if (!data.Who_can_apply || data.Who_can_apply.length < 4) {
      setShow(true)
      setMessageType('error')
      setMessage('Provide details about who ca apply.')
      return
    }
    setDisplayForYourInformation(4)
  }


  function LastCheck() {
    if (!data.Number_of_openings) {
      setShow(true)
      setMessageType('error')
      setMessage('Enter the number of openings.')
      return
    }
    if (tags.length < 1) {
      setShow(true)
      setMessageType('error')
      setMessage('Enter skills.')
      return
    }
    if (perks.length < 1) {
      setShow(true)
      setMessageType('error')
      setMessage('Enter skills.')
      return
    }
    DataSend()
  }

  async function DataSend() {
    if (window.confirm("Are you sure to post this internship.")) {
      const response = await internshipPosting({
        User_id: data.User_id,
        Organization_Name: data.Organization_Name,
        Organization_Email: data.Organization_Email,
        Organization_Address: data.Organization_Address,
        Organization_Website: data.Organization_Website,
        Organization_Details: data.Organization_Details,
        User_Name: data.User_Name,
        User_Designation: data.User_Designation,
        User_Email: data.User_Email,
        Internship_id: data.id,
        Internship_Post_Date: new Date(),
        Internship_Type: data.Internship_Type,
        Internship_Location: data.Internship_Location,
        Internship_Duration: data.Internship_Duration,
        Start_Date: data.Start_Date,
        Stipend: data.Stipend,
        Apply_By: data.Apply_By,
        Internship_Tags: tags,
        Skills_Required: skills,
        Short_Description: data.Short_Description,
        Detailed_Description: data.Detailed_Description,
        Who_can_apply: data.Who_can_apply,
        Number_of_openings: data.Number_of_openings,
        Perks_Provided: perks
      })
      if (response === 'success') {
        navigate('/')
        setShow(true)
        setMessageType('success')
        setMessage('Internship Posted')
        return
      }
    }
  }

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center", color: "rgb(156, 39, 176)", fontWeight: '800', textTransform: 'uppercase', py: 2, fontFamily: 'Fredoka', borderBottom: '2px solid rgb(156, 39, 176)', width: txtWidth, m: '0px auto' }}>
        Post An Internship
      </Typography>
      <Typography sx={{ textAlign: "center", fontWeight: '800', py: 2, fontFamily: 'Fredoka', }}>
        Power up your organizatiions new interns.
      </Typography>

      <Box sx={{ display: display, alignItems: 'flex-start', justifyContent: 'space-between', textAlign: align }}>
        <Box>
          <img src={require("../../assets/report/post_job.webp")} style={{ width: width }} alt="Contact" />
        </Box>

        <Box sx={{ display: displayForYourInformation === 0 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Organization Name :</Typography>
            <Box sx={{ my: 3 }}>
              <input
                placeholder='Name'
                type='text'
                defaultValue={EmployerData.Employer ? data.Organization_Name : null}
                disabled={true}
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
                  height: '200px',
                  fontSize: '14px',
                  resize: 'none',
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
                disabled={true}
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
          <Box sx={{ textAlign: 'center' }}>
            <Button onClick={EmployerDataChecker} color="secondary" variant='outlined' sx={{ boxShadow: 0, textTransform: 'none' }}>Next</Button>
          </Box>
        </Box>
        <Box sx={{ display: displayForYourInformation === 2 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
          <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={() => setDisplayForYourInformation(1)} />
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Internship Type :</Typography>
            <Box sx={{ my: 3 }}>
              <input
                placeholder='Internship Name'
                type='text'
                onChange={(e) => setData(prev => {
                  return { ...prev, Internship_Type: e.target.value }
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
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Internship Location :</Typography>
            <Box sx={{ my: 3 }}>
              <input
                placeholder='Enter City'
                type='text'
                onChange={(e) => setData(prev => {
                  return { ...prev, Internship_Location: e.target.value }
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
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Stipend :</Typography>
            <Box sx={{ my: 3 }}>
              <input
                placeholder='In Rupees'
                type='text'
                onChange={(e) => setData(prev => {
                  return { ...prev, Stipend: e.target.value }
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
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Start Date :</Typography>
            <Box sx={{ my: 3 }}>
              <input
                placeholder='Enter the date'
                type='text'
                onChange={(e) => setData(prev => {
                  return { ...prev, Start_Date: e.target.value }
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
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Internship Duration :</Typography>
            <Box sx={{ my: 3 }}>
              <input
                placeholder='In Months'
                type='text'
                onChange={(e) => setData(prev => {
                  return { ...prev, Internship_Duration: e.target.value }
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
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Apply by :</Typography>
            <Box sx={{ my: 3 }}>
              <input
                placeholder='Last Apply Date'
                type='text'
                onChange={(e) => setData(prev => {
                  return { ...prev, Apply_By: e.target.value }
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
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}>Short Description :</Typography>
            <Box sx={{ my: 3 }}>
              <input
                placeholder='About Internship'
                type='text'
                onChange={(e) => setData(prev => {
                  return { ...prev, Short_Description: e.target.value }
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
            <Button onClick={MajorDetailsChecker} color="secondary" variant='outlined' sx={{ boxShadow: 0, textTransform: 'none' }}>Next</Button>
          </Box>
        </Box>
        <Box sx={{ display: displayForYourInformation === 3 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
          <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={() => setDisplayForYourInformation(2)} />
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> About Internship :</Typography>
            <Box sx={{ my: 3 }}>
              <input
                placeholder='Detailed Information'
                type='text'
                onChange={(e) => setData(prev => {
                  return { ...prev, Detailed_Description: e.target.value }
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
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Required Skills :</Typography>
            <Box sx={{ my: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <input
                placeholder='Required Skills'
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
          <Box sx={{ width: "100%", overflowY: 'scroll', border: data.open ? '1px solid black' : 'none', my: 2 }}>
            {
              data.open ?
                <Box sx={{ textAlign: 'center', height: '150px' }}>
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
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Who Can Apply :</Typography>
            <Box sx={{ my: 3 }}>
              <textarea
                placeholder='Who can apply'
                type='text'
                onChange={(e) => setData(prev => {
                  return { ...prev, Who_can_apply: e.target.value }
                })}
                style={{
                  border: '1px solid #000000',
                  userSelect: 'none',
                  width: inpwidth,
                  height: '200px',
                  fontSize: '14px',
                  resize: 'none',
                  textAlign: 'center',
                }} />
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button onClick={MinorDetailsChecker} color="secondary" variant='outlined' sx={{
              boxShadow: 0,
              textTransform: 'none',
              px: 2,
              '&:hover': {
                background: 'rgb(156, 39, 176)',
                color: 'white'
              }
            }}>Next</Button>
          </Box>
        </Box>
        <Box sx={{ display: displayForYourInformation === 4 ? 'block' : 'none', width: datawidth, m: '0px auto', mt: 5 }}>
          <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={() => setDisplayForYourInformation(3)} />
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Number Of Openings :</Typography>
            <Box sx={{ my: 3 }}>
              <input
                placeholder='Number of openeings'
                type='number'
                onChange={(e) => setData(prev => {
                  return { ...prev, Number_of_openings: e.target.value }
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
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Add Tags :</Typography>
            <Box sx={{ my: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <input
                placeholder='Required Skills'
                value={tags.map(data => ` ${data} `)}
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
                data.open2 ? <ExpandLessIcon sx={{ p: 1.2, fontSize: '25px', color: 'white', background: 'rgb(156,39,176)', cursor: 'pointer' }} onClick={() => setData(prev => {
                  return { ...prev, open2: !data.open2 }
                })} />
                  :
                  <ExpandMoreIcon sx={{ p: 1.2, fontSize: '25px', color: 'white', background: 'rgb(156,39,176)', cursor: 'pointer' }} onClick={() => setData(prev => {
                    return { ...prev, open2: !data.open2 }
                  })} />
              }
            </Box>
          </Box>
          <Box sx={{ width: "100%", overflowY: 'scroll', border: data.open2 ? '1px solid black' : 'none', my: 2 }}>
            {
              data.open2 ?
                <Box sx={{ textAlign: 'center', height: '150px' }}>
                  {
                    postJobTags.map((datas, index) => {
                      var inIncluded = false
                      if (tags.includes(datas)) {
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
                          }} onClick={tagAdder}>
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
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'rgb(156, 39, 176)' }}> Add Perks :</Typography>
            <Box sx={{ my: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <input
                placeholder='Required Skills'
                value={perks.map(data => ` ${data} `)}
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
                  return { ...prev, open3: !data.open3 }
                })} />
                  :
                  <ExpandMoreIcon sx={{ p: 1.2, fontSize: '25px', color: 'white', background: 'rgb(156,39,176)', cursor: 'pointer' }} onClick={() => setData(prev => {
                    return { ...prev, open3: !data.open3 }
                  })} />
              }
            </Box>
          </Box>
          <Box sx={{ width: "100%", overflowY: 'scroll', border: data.open3 ? '1px solid black' : 'none', my: 2 }}>
            {
              data.open3 ?
                <Box sx={{ textAlign: 'center', height: '150px' }}>
                  {
                    PerksInternships.map((datas, index) => {
                      var inIncluded = false
                      if (perks.includes(datas)) {
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
          <Box sx={{ textAlign: 'center' }}>
            <Button onClick={LastCheck} color="secondary" variant='contained' sx={{ boxShadow: 0 }} >Post </Button>
          </Box>
        </Box>
      </Box>

    </>
  )
}



export default function Post2() {

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