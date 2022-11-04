// import { useContext } from 'react';
// import AuthContext from '../auth';
// import * as React from 'react';
// import Alert from '@mui/material/Alert';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import Grid from '@mui/material/Grid';

import { useContext } from 'react'
import AuthContext from '../auth'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AuthErrorModal() {
    const { auth } = useContext(AuthContext);
    let errorMessage = "";
    if (auth.errorMessage) {
        errorMessage=auth.errorMessage
        console.log("ERROR MESSAGE::::"+errorMessage)
    }
    function handleCloseModal(event) {
        auth.closeErrorModal();
    }

    return (
        <Modal
            open={auth.errorMessage !== null}
        >
            <Box sx={style}>
                <div className="modal-dialog">
                <header className="dialog-header">
                    {errorMessage}
                </header>
                <div id="confirm-cancel-container">
                    <button
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCloseModal}
                    >Close</button>
                </div>
            </div>
            </Box>
        </Modal>
    );
}