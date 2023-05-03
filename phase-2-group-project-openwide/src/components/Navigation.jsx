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
            <div class="container">
              <label id='toggle-dark-theme'>Toggle Dark Theme</label>
              <input id="checkbox" name="checkbox" type="checkbox" />
            < label class="label" for="checkbox"></label>
            </div>


        
        
    </nav>
  )
}

export default Navigation