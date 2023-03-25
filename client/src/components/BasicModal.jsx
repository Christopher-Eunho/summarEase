import React, { useState, useEffect, useReducer} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { updateSummary } from '../redux/actions';

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

export default function BasicModal ({ open, id, title, text }) {
    const dispatch = useDispatch();
    const [isopen, setOpen] = React.useState(open);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const [, updateState] = React.useState();
    // const forceUpdate = React.useCallback(() => updateState({}), []);

    const [newTitle, setNewTitle] = useState(title);
    const [newText, setNewText] = useState(text);
    const handleSubmit = (newTitle, newText) => () => {
        setOpen(false);
        dispatch(updateSummary(id, newTitle, newText));
        window.location.reload(false);
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
                        id="standard-basic"
                        label="Title"
                        value={newTitle}
                        // defaultValue="default"
                        variant="standard"
                        onChange={(event) => {setNewTitle(event.target.value)}} 
                    />
                </div>
                <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Summary"
                    multiline
                    rows={5}
                    value={newText}
                    // defaultValue="default"
                    variant="standard"
                    onChange={(event) => {setNewText(event.target.value)}} 
                />
                </div>
                <Button variant="outlined" onClick={handleSubmit(newTitle, newText)}>submit</Button>
                {/* <Button variant="outlined">submit</Button> */}
            </Box>
        </Modal>
    </div>
  )
}

// export default BasicModal;

