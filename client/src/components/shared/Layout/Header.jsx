import React from 'react'

import IconLogo from "../Loading/IconLogo"

import "./Header.css"

export default function Header() {
  
  return (
    <div className='header-container'>
      
      <div className='header-logo-container'>

        <IconLogo color="white" />
        
        <p className='header-logo-title'>ACE TENNIS RANKINGS</p>

      </div>

    </div>
  )
}