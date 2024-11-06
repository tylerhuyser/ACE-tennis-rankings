import React from 'react'

import IconLogo from "../Loading/IconLogo"

import "./Header.css"

export default function Header() {
  
  return (
    <div className='header-container'>

      {/* {menuVisibility ?
        
        <i className="fas fa-times mobile-icon" onClick={(e) => changeMenuVisibility(e)}></i>
          
        :

        <i className="fas fa-bars mobile-icon" onClick={(e) => changeMenuVisibility(e)}></i>
      
      } */}
      
      <div className='header-logo-container'>

        <IconLogo />
        <p className='header-logo-title'>ACE TENNIS RANKINGS</p>

      </div>

    </div>
  )
}