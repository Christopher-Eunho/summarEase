import React from 'react'
import Summary from './Summary';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Summaries = () => {
    const dispatch = useDispatch();
    const summaries = useSelector(state => state.summaries);

    useEffect(() => {
        dispatch(getAllSummaries());
    }, [])

    const getSummaries = () => {
        return summaries;
    }


  return (
    <article>
        <ul>
            {
                getSummaries().map(summary => (
                    <Summary 
                        key={summary._id}
                        summary={summary}
                    />
                ))
            }    
        </ul>
    </article>
  )
}

export default Summaries;