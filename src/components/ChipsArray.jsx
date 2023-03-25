import React, { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

import { useDispatch } from "react-redux";
import { updateKeyword } from '../redux/actions';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ChipsArray = (data, id) => {
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

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((singlechip) => {

        return (
          <ListItem key={singlechip.key}>
            <Chip
              label={singlechip.label}
              onDelete={handleDelete(singlechip)}
            />
          </ListItem>
        );
      })}
      <input 
        type="text" 
        className="tags-input" 
        placeholder="new tag" 
        onKeyDown={handleKeyDown}
      />
    </Paper>
  )
}

export default ChipsArray;