import React from 'react';
import './Gym_Activities.css'

const Gym_Activities = (props) => {

    const {activity_name, activity_des, img_url, activity_time , age } = props.activity; 
    return (
        <div className='activities-item'>
            <img src={img_url} alt="" />
            <div className="activity-info">
                <h4>{activity_name} </h4>
                <p>{activity_des} </p>
                <h5>For Age : {age} </h5>
                <h5>Time required : {activity_time} </h5>

            </div>
       
            <button onClick={ () => props.handelAddTime(props.activity)} className='add-btn'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Gym_Activities;