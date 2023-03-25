import React, { useState, useEffect, useReducer} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BasicModal = ({open}) => {
    const [isopen, setOpen] = React.useState(open);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newTitle, setNewTitle] = useState('');
    const [newText, setNewText] = useState('');
    const handleSubmit = (newTitle, newText) => () => {
        setOpen(false);
        // dispatch(updateTodo(id, newTitle, newText));
        // forceUpdate();
      };

  return (
    <div>
        <Modal
            open={isopen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div>
                    <TextField
                        id="standard-helperText"
                        label="Title"
                        // defaultValue={itemTitle}
                        defaultValue="default"
                        variant="standard"
                        onChange={(event) => {setNewTitle(event.target.value)}} 
                    />
                </div>
                <div>
                <TextField
                    id="standard-multiline-static"
                    label="Summary"
                    multiline
                    rows={5}
                    // defaultValue={itemText}
                    defaultValue="default"
                    variant="standard"
                    onChange={(event) => {setNewText(event.target.value)}} 
                />
                </div>
                {/* <Button variant="outlined" onClick={handleSubmit(newTitle, newText)}>submit</Button> */}
                <Button variant="outlined">submit</Button>
            </Box>
        </Modal>
    </div>
  )
}

export default BasicModal;

