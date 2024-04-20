import React from 'react';

import styled from 'styled-components';
// import { HttpApiMethods } from '../utils/FetchUtils';
import {useState} from 'react'
import EditMeetsForm from '../edit/EditMeetsForm';
import Grid from '@mui/material/Grid';
// import Card from '../Card';
import Box from '@mui/material/Box';
import { HttpApiMethods } from '../utils/FetchUtils';





function extractDateTime(dateString) {
    const dateTime = new Date(dateString);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
    
    return { date, time };
}

const httpApiMethods = new HttpApiMethods()

const meets = await httpApiMethods.GetMeetings()



export const MeetsGetByID = () => {
    return (
        <div>
            
        </div>
    );
}

const GetMeets = () => {
    const [count, setCount] = useState(7)
   
    const filterMeet = meets.filter( (item, index) => index <= count )
    const allMeets = () => {
        setCount(meets.length)
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                <Grid container sx={{width: '96%'}}>

                
                {Array.isArray(meets) ? (
                    filterMeet.map((item, index) => (
                    
                        
                        <Grid item sm={6} xl={3} md={6} lg={4} key={index}>
                             <div className='event_card' >
                                <div className="event-card__photo"><img className='img' src={httpApiMethods.APIURL_FILES + item.speackerImage} alt="{item.speackerImage}" /></div>
                                    <div className="taggs">
                                        <div className='tagged'>{item.tags}</div>
                                        <div className="feautures">{item.type}</div>
                                    </div>
                                <h4 className="event-card__title">{item.title}</h4>
                                <p className="event-card__date">{extractDateTime(item.time).date}, в {extractDateTime(item.time).time} по Московскому времени</p>
                            </div>
                        </Grid>
                    
                    
                    
                    ))
                ) : (
                    <p>Неверный тип данных с сервера!</p>
                )}
                {/* <EditForm></EditForm> */}
                </Grid>
            </Box>
            <div className='allButton__container'>
                <button onClick={allMeets} className='allButton'>Все мероприятия</button>
            </div>
        </>
        
        
    );
}

export default GetMeets;
