import React, { useState } from 'react';
import './Profile.css'
import profile from '../../../images/profile.webp'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const notify = () => toast("Wow so easy!");
    const [selectTime, setSelectTime] = useState([]);
    
    let sum = 0;
    const handelTimeClick = (time) => {

        sum = sum +time;
        
   
        setSelectTime(sum);
    }

    return (
        <div className='Profile-container-page'>
            <div className="profile">
                <img src={profile} alt="" />
                <div className="profile-info">
                    <h3> Mominul Islam</h3>
                    <p > <small>Chu, Bangladesh</small> </p>
                </div>
            </div>
            <div className="profile-details">
                <div className='profile-details-item'>
                    <h3>56 <small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div className='profile-details-item'>
                    <h3>5.5</h3>
                    <p>Height</p>
                </div>
                <div className='profile-details-item'>
                    <h3>23 <small>yrs</small> </h3>
                    <p>Age</p>
                </div>
            </div>
            <div className="break-section">
                <h2>Add A Break</h2>
                <div className='time-selected'>
                    <p onClick={ () =>handelTimeClick(10)} href="">10</p>
                    <p onClick={ () =>handelTimeClick(20)} href="">20</p>
                    <p onClick={ () =>handelTimeClick(30)} href="">30</p>
                    <p onClick={ () =>handelTimeClick(40)} href="">40</p>
                    <p onClick={ () =>handelTimeClick(50)} href="">50</p>
                   
                </div>

            </div>

            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <div className='time'>
                    <h4>Exercise Time</h4>
                    <p>300 seconds </p>
                </div>
                <div className='break'>
                    <h4>Break Time</h4>
                    <p> {selectTime} seconds </p>
                </div>
            </div>

            <button onClick={notify} className='btn-complected'>
                <p>Complected activity</p>
            </button>
            <ToastContainer/>

        </div>
    );
};

export default Profile;