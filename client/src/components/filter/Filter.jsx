import React from 'react'
import { Box, Typography, Button, Link } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';

export default function Filter({ city, category, id }) {
    const fullScreen = useMediaQuery('(max-width:750px)')
    const [open, setOpen] = React.useState(false)
    const [valueCity, setValueCity] = React.useState(city);
    const [valueCategory, setValueCategory] = React.useState(category);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const handleChangeCity = (event) => {
        setValueCity(event.target.value);
    };
    const handleChangeCategory = (event) => {
        setValueCategory(event.target.value);
    };
    return (
        <>
            <Box sx={{
                textAlign: 'center',
                mt: 2,
                margin: '10px auto',
                padding: 2,
                transition: '.2s all',
                cursor: 'pointer',
                display: "flex",
                color: 'rgb(156, 39, 176)',
                alignItems: "center",
                borderRadius: 2,
                border: '1px solid rgb(156, 39, 176)',
                width: "fit-content",
                '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '2.1px 2.1px 15px 1px rgb(156, 39, 176)!important',
                    fontWeight: '500',
                    color: 'rgb(156, 39, 176)',
                }
            }}
                onClick={handleClickOpen}
            >
                <Typography sx={{ mr: 1, fontFamily: 'Fredoka', fontSize: '18px' }}>
                    Filters
                </Typography>
                <FilterAltIcon />
            </Box>
            <Dialog
                maxWidth={false}
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}

            >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgb(156, 39, 176)', fontWeight: '600', fontFamily: 'Fredoka' }}>
                    Select Filters
                    <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '400px', width: '600px', mx: 2 }}>
                    <Box>
                        <Typography sx={{ fontSize: '20px', color: "black", fontWeight: '700' }}>By City</Typography>
                        <Box sx={{ overflowY: "scroll", height: '360px' }}>
                            <RadioGroup defaultValue={city} value={valueCity} onChange={handleChangeCity}  >
                                <FormControlLabel value="work_from_home" control={<Radio />} label="Work From Home" />
                                <FormControlLabel value="bangalore" control={<Radio />} label="Bangalore" />
                                <FormControlLabel value="hyderabad" control={<Radio />} label="Hyderabad" />
                                <FormControlLabel value="mumbai" control={<Radio />} label="Mumbai" />
                                <FormControlLabel value="chennai" control={<Radio />} label="Chennai" />
                                <FormControlLabel value="delhi" control={<Radio />} label="Delhi" />
                                <FormControlLabel value="pune" control={<Radio />} label="Pune" />
                                <FormControlLabel value="kolkata" control={<Radio />} label="Kolkata" />
                                <FormControlLabel value="jaipur" control={<Radio />} label="Jaipur" />
                                <FormControlLabel value="international" control={<Radio />} label="International" />
                                <FormControlLabel value="null" control={<Radio />} label="null" />
                            </RadioGroup>
                        </Box>

                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '20px', color: "black", fontWeight: '700' }}>By Category</Typography>
                        <Box sx={{ overflowY: "scroll", height: '360px' }}>
                            <RadioGroup defaultValue={category} value={valueCategory} onChange={handleChangeCategory} >
                                <FormControlLabel value="web_development" control={<Radio />} label="Web Development" />
                                <FormControlLabel value="computer_science" control={<Radio />} label="Computer Science" />
                                <FormControlLabel value="marketing" control={<Radio />} label="Marketing" />
                                <FormControlLabel value="graphic_design" control={<Radio />} label="Graphic Design" />
                                <FormControlLabel value="finance" control={<Radio />} label="Finance" />
                                <FormControlLabel value="human_resource" control={<Radio />} label="Human Resource" />
                                <FormControlLabel value="architecture" control={<Radio />} label="Architecture" />
                                <FormControlLabel value="mechanical" control={<Radio />} label="Mechanical" />
                                <FormControlLabel value="law" control={<Radio />} label="Law" />
                                <FormControlLabel value="digital_marketing" control={<Radio />} label="Digital Marketing" />
                                <FormControlLabel value="electronics" control={<Radio />} label="Electronics" />
                                <FormControlLabel value="civil" control={<Radio />} label="Civil" />
                                <FormControlLabel value="content_writing" control={<Radio />} label="Content Writing" />
                                <FormControlLabel value="campus_ambassador_program" control={<Radio />} label="Campus Ambassador Program" />
                                <FormControlLabel value="engineering" control={<Radio />} label="Engineering" />
                                <FormControlLabel value="mba" control={<Radio />} label="MBA" />
                                <FormControlLabel value="part_time" control={<Radio />} label="Part Time" />
                                <FormControlLabel value="humanities" control={<Radio />} label="Humanities" />
                                <FormControlLabel value="science" control={<Radio />} label="Science" />
                                <FormControlLabel value="with_job_offer" control={<Radio />} label="With Job Offer" />
                                <FormControlLabel value="for_women" control={<Radio />} label="For Women" />
                                <FormControlLabel value="null" control={<Radio />} label="null" />
                            </RadioGroup>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Link href={`/type=${id}&filter=&city=${valueCity}&category=${valueCategory}`} sx={{ textDecoration: 'none' }}>
                        <Button variant='contained' sx={{
                            boxShadow: 0,
                            textTransform: 'none',
                            background: 'rgb(156, 39, 176)',
                            '&:hover': {
                                background: 'rgb(156, 39, 176)',
                                boxShadow: 0
                            }
                        }} onClick={handleClose}>
                            Apply
                        </Button>
                    </Link>

                </DialogActions>
            </Dialog>
        </>
    )
}
