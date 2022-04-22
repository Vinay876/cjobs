import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const LoginContext = React.createContext(null);

const ContextProvider = ({ children }) => {

    const [message, setMessage] = React.useState('')
    const [messageType, setMessageType] = React.useState('')
    const [show, setShow] = React.useState(false)


    const handleAlertClose = () => {
        setShow(false)
        setMessage('')
        setMessageType('')
    }


    return (
        <LoginContext.Provider value={{
            message, setMessage, messageType,
            setMessageType, show, setShow, handleAlertClose
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