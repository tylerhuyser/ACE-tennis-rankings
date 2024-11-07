import React from 'react'

import IconLogo from "../Loading/IconLogo"

import "./Header.css"

export default function Header(props) {

  const { setVisibility } = props
  
  return (
    <div className='header-container'>

      <div className='nav-visibility-icon-container'>
        
      </div>
      
      <div className='header-logo-container'>

        <IconLogo color="white" />
        
        <p className='header-logo-title'>ACE TENNIS RANKINGS</p>

      </div>

    </div>
  )
}