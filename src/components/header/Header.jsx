import React from 'react';
import logo from '../../../images/gym.svg'
import './Header.css'
const Header = () => {
    return (
        <div className="logo-section">
            <img src={logo} alt="" />
            <h1>GYM Activity ..</h1>
             
        </div>
    );
};

export default Header;