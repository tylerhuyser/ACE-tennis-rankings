import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'

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

      <div className='nav-visibility-icon-container'>

        <FontAwesomeIcon icon={faBars} className={iconVisibility ? 'nav-visibility-icon hidden' : 'nav-visibility-icon visible'} onClick={() => toggleVisibility(navVisibility, iconVisibility)} />
        
        <FontAwesomeIcon icon={faXmark} className={ iconVisibility ? 'nav-visibility-icon visible' : 'nav-visibility-icon hidden'} onClick={() => toggleVisibility(navVisibility, iconVisibility)} />

      </div>
      
      <div className='header-logo-container'>

        <IconLogo color="white" />
        
        <p className='header-logo-title'>ACE TENNIS RANKINGS</p>

      </div>

    </div>
  )
}