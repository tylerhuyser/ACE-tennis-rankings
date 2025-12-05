import React from 'react'
import { Link, useLocation } from "react-router-dom"

import "./Nav.css"

export default function Nav(props) { 

  const { navVisibility, setNavVisibility } = props
  const { iconVisibility, setIconVisibility } = props

  const location = typeof window !== 'undefined' ? useLocation() : { pathname: '' }

  const handleClick = (to, event) => {
    if (location.pathname === to) {
      // Prevent navigation if the link is disabled
      event.preventDefault();
    }

    setNavVisibility(false);
    setIconVisibility(false);
  };

  const navItems = [
    { to: '/atp/singles', label: 'ATP Singles' },
    { to: '/atp/doubles', label: 'ATP Doubles' },
    { to: '/atp/singles-race', label: 'ATP Singles Race' },
    { to: '/atp/doubles-race', label: 'ATP Doubles Race' },
    { to: '/wta/singles', label: 'WTA Singles' },
    { to: '/wta/doubles', label: 'WTA Doubles' },
    { to: '/wta/singles-race', label: 'WTA Singles Race' },
    { to: '/wta/doubles-race', label: 'WTA Doubles Race' },
  ];
  
  return (
    <>
      <div className={ navVisibility ? 'nav-container slide-bottom' : 'nav-container hidden'}>

        {/* External */}
        <a className='nav-link external-link' id="blog-link" href="https://gamesetblog.com" target="_blank">Tennis News</a>

        {/* Internal Links */}
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`nav-link internal-link`}
            onClick={(event) => handleClick(item.to, event)}
          >
            {item.label}
          </Link>
        ))}

      </div>
    </>
  )
}
