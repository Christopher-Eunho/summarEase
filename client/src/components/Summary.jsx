import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import ChipsArray from '../components/ChipsArray';
import BasicModal from "./BasicModal";
import './Summary.css'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSummary } from '../redux/actions';

const Summary = ({ summary }) => {
    const dispatch = useDispatch();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const [showModal,setShowModal] = useState(false);
    
    function showModalHandler() {
        setShowModal(!showModal);
    }

  return (
    <React.Fragment>
        <li className='listItem'>
            <Accordion className='Accordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className="AccordionSummary"
                >
                    <Typography 
                        sx={{ width: '33%', flexShrink: 0 }}
                        className="Typography"
                    >
                        {summary?.title}
                        {/* {summary.keywords}
                        {summary._id} */}
                        {/* title */}
                    </Typography>
                    <ChipsArray  data={summary.keywords} id={summary._id}/>
                    {/* <ChipsArray /> */}
                </AccordionSummary>
                <AccordionDetails>
                    <Link href={summary?.url}>Link</Link>
                    {/* <Link href="#">Link</Link> */}
                    <Typography>
                        {summary?.text}
                        {/* text */}
                    </Typography>
                        <span className="icon" onClick={showModalHandler}>
                            <i className="fas fa-pen" />
                        </span>
                        {showModal ? <BasicModal open={showModal} id={summary._id} title={summary.title} text={summary.text} />: null }
                        {/* {showModal ? <BasicModal open={showModal} />: null } */}
                        <span className="icon" onClick={() => dispatch(deleteSummary(summary._id))}>
                        {/* <span className="icon"> */}
                            <i className="fas fa-trash" />
                        </span>
                </AccordionDetails>
            </Accordion>
        </li>
    </React.Fragment>
  )
}

export default Summary;