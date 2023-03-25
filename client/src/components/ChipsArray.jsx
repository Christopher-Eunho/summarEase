import React, { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useDispatch } from "react-redux";
import { updateKeyword } from '../redux/actions';
import './ChipsArray.css'

import { colors } from '@mui/material';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));


export default function ChipsArray ({data, id}) {
  const dispatch = useDispatch();
  const [chipData, setChipData] = React.useState([]);
  const keywordData = data;
  const keywordId = id;

  let arr = [] ;
  for(let i = 0 ; i < keywordData.length ; i++){
    arr[i] ={key: i, label: keywordData[i]};
  }
  useEffect(()=>{
    setChipData(arr);
    // console.log(data.length)
    // console.log(arr.length)
  }, [])

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    dispatch(updateKeyword(keywordId, chipToDelete.label));
  };

  function handleKeyDown(e){
    if(e.key !== 'Enter') return
    const value = {key: chipData.length + 1, label: e.target.value}
    if(!value.label.trim()) return

    if(chipData.map(a=>a.label).includes(value.label)) {
      console.log(value.label);
      e.target.value = ''
      return
    }
    setChipData([...chipData, value])
    e.target.value = ''
    dispatch(updateKeyword(keywordId, value.label));
  }

  function handleClick(event) {
    event.stopPropagation();
    // Handle click here
}

  return (
    <Paper
      align='left'
      sx={{
        display: 'flex',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        boxShadow: 'none',
      }}
      component="ul"
    >
      {chipData.map((singlechip) => {

        return (
          <ListItem key={singlechip.key} className='ListItem'>
            <Chip
              label={singlechip.label}
              onDelete={handleDelete(singlechip)}
              variant="outlined"
              deleteIcon={<HighlightOffIcon />}
              sx={{
                boxShadow: 2
              }}
            />
          </ListItem>
        );
      })}
      <Input 
        id="standard-basic" 
        label="new tag" 
        variant="standard" 
        placeholder="new tag" 
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        sx={{
          ml:1,
        }}
      />
    </Paper>
  )
}