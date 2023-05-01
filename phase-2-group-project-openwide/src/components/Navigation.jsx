import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/carjam.svg'

const Navigation = () => {
  return (
    <nav>
        <NavLink ><img src={logo} alt="open wide" to={'/'} /></NavLink>
        <NavLink className='site-title' to={'/'} >Open Wide</NavLink>
        <ul>
            <li><NavLink to={'/'} >Home</NavLink></li>
            <li><NavLink to={'/playlist'} >Playlist</NavLink></li>
            <li><NavLink to={'/about'} >About</NavLink></li>
        </ul>
        
        
        
    </nav>
  )
}

export default Navigation