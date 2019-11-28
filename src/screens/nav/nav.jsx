import React from 'react';
import './nav.css';
import {NavLink} from 'react-router-dom'

const Nav = () => {
    console.log("nav")
    return(
        <div className="nav">
        <NavLink to="/home" >Home</NavLink>
        <NavLink to="/login" >Log in</NavLink>
        <NavLink to="/registration" >Registration</NavLink>
        <NavLink to="/workspace" >Post</NavLink>
    </div>
    )
}

export default Nav;