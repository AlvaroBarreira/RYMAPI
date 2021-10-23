import React from 'react'
import rym from './rym.png'
import './Header.css';

function Header() {

    return (
        <div className="Title">
            <img className="title-image" src={rym} alt="" />
        </div>
    )
}

export default Header
