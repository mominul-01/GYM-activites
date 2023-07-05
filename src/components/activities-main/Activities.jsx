import React, { useEffect, useState } from 'react';
import './Activities.css'

import GymActivities from '../gym-activities/Gym_Activities';
import Header from '../header/Header';
import Profile from '../profile/Profile';

const activities = () => {

    const [activities, setActivities] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    },[])

    const handelAddTime = (selectedTime) => {
        let newP = [];
        newP = [...]

    }

    return (
        <div className='main-page'>
            
            <Header></Header>

            <div className="activity-container">
               
                <div className="gym-activities-container">
                    {
                        activities.map(activity =>
                            <GymActivities
                                key={activity.id}
                                activity={activity}
                                handelAddTime={handelAddTime}
                            >
                            </GymActivities>
                            )
                    }
                   
                </div>
                
                <div className="profile-container">
                    
                    <Profile></Profile>
                </div>

            </div>
            <footer className='footer'>
                <h2>Copy@ GYM</h2>
            </footer>
            
        </div>

      
    );
};

export default activities;