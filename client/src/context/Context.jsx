import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import CryptoJS from 'crypto-js'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const LoginContext = React.createContext(null);

const ContextProvider = ({ children }) => {

    const [message, setMessage] = React.useState('')
    const [messageType, setMessageType] = React.useState('')
    const [show, setShow] = React.useState(false)
    const EmployerData = loadEmployerData()
    const SeekerData = loadSeekerData()



    const handleAlertClose = () => {
        setShow(false)
        setMessage('')
        setMessageType('')
    }



    function encrypt(text) {
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(text), 'This website is created by yash sharma for practice').toString();
        return ciphertext
    }
    function decrypt(ciphertext) {
        var bytes = CryptoJS.AES.decrypt(ciphertext, 'This website is created by yash sharma for practice');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData
    }
    
  function toTitle(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

    function loadEmployerData() {
        try {
            const serializedState = localStorage.getItem('INIT_DATA');
            if (serializedState === null) {
                return '';
            }
            return JSON.parse(serializedState);
        } catch (err) {
            localStorage.setItem('INIT_DATA', JSON.stringify({
                Employer: true,
                User_id:'',
                Organization_Name: '',
                Organization_Address: '',
                Organization_Email: '',
                Organization_Telephone: '',
                User_Name: '',
                User_Designation: '',
                User_Email: '',
                User_Number: '',
            }));
            const serializedState = localStorage.getItem('INIT_DATA');
            if (serializedState === null) {
                return '';
            }
            return serializedState
        }

    }

    function loadSeekerData() {
        try {
            const serializedState = localStorage.getItem('INIT_DATA');
            if (serializedState === null) {
                return '';
            }
            return JSON.parse(serializedState);
        } catch (err) {
            localStorage.setItem('INIT_DATA', JSON.stringify({
                Seeker: true,
                User_id:'',
                User_Name: '',
                User_Address: '',
                User_Email: '',
                User_Number: '',
            }));
            const serializedState = localStorage.getItem('INIT_DATA');
            if (serializedState === null) {
                return '';
            }
            return serializedState
        }

    }


    function logout() {
        if (EmployerData.Employer) {
            localStorage.setItem('INIT_DATA', JSON.stringify({
                Employer: false,
                User_id:'',
                Organization_Name: '',
                Organization_Address: '',
                Organization_Email: '',
                Organization_Telephone: '',
                User_Name: '',
                User_Designation: '',
                User_Email: '',
                User_Number: '',
            }));
            return
        }
        if (SeekerData.Seeker) {
            localStorage.setItem('INIT_DATA', JSON.stringify({
                Seeker: false,
                User_id:'',
                User_Name: '',
                User_Address: '',
                User_Email: '',
                User_Number: '',
            }));
        }
    }
    return (
        <LoginContext.Provider value={{
            message, setMessage, messageType,
            setMessageType, show, setShow, handleAlertClose, encrypt, decrypt, EmployerData, SeekerData,logout,toTitle
        }}>
            {children}
            < Snackbar open={show} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity={messageType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </LoginContext.Provider >
    )
}

export default ContextProvider;