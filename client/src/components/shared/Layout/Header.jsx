import React from 'react'
import { Link } from "react-router-dom"

import IconLogo from "../Loading/IconLogo"

import "./Header.css"

export default function Header(props) {

  const { navVisibility, setNavVisibility } = props

  const { iconVisibility, setIconVisibility } = props
  
  function toggleVisibility (navVisibility, iconVisibility) {
    setNavVisibility(!navVisibility)
    setIconVisibility(!iconVisibility)
  }
  
  return (
    <div className='header-container'>

      <div className='nav-visibility-icon-container' onClick={() => toggleVisibility(navVisibility, iconVisibility)} >
        
        <div className={iconVisibility ? 'menu-icon open' :  'menu-icon closed'} >
          <span className='menu-icon-line' id="line-1"></span>
          <span className='menu-icon-line' id="line-2"></span>
          <span className='menu-icon-line' id="line-3"></span>
        </div>

      </div>
      
      <div className='header-logo-container'>

        <Link to="/" className='header-link'>
        
          <IconLogo color="white" />
        
          <p className='header-logo-title'>ACE TENNIS RANKINGS</p>
          
        </Link>

      </div>

    </div>
  )
}