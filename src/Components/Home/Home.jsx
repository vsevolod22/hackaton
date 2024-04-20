import React from 'react';
import './style.css'
import styled from 'styled-components';
import { HttpApiMethods } from '../utils/FetchUtils';
import {useState} from 'react'
import EditForm from '../post/Meets';
import Grid from '@mui/material/Grid';
import Card from '../Card';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function extractDateTime(dateString) {
    const dateTime = new Date(dateString);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
    
    return { date, time };
}

const httpApiMethods = new HttpApiMethods()

const meets = await httpApiMethods.GetMeetings()


const Home = () => {
    const [count, setCount] = useState(7)
    const navigate = useNavigate()

    const handleNeed = () => {
        navigate('/firstMeetAuth')
    }
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
                             <div onClick={handleNeed} className='event_card' >
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

export default Home;
