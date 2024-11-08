import React from 'react'
import { Link } from "react-router-dom"

import "./Nav.css"

export default function Nav(props) { 

  const { setLoading } = props
  const { navVisibility, setNavVisibility } = props
  const { iconVisibility, setIconVisibility } = props
  
  return (
    <>
      <div className={ navVisibility ? 'nav-container slide-bottom' : 'nav-container hidden'}>

        {/* ATP */}
        <Link to="/atp/singles" className='nav-link' onClick={() => { setLoading(true), setNavVisibility(false), setIconVisibility(false) }} >ATP Singles</Link>
        <Link to="/atp/doubles" className='nav-link' onClick={() => { setLoading(true), setNavVisibility(false), setIconVisibility(false) }}>ATP Doubles</Link>
        <Link to="/atp/singles-race" className='nav-link' onClick={() => { setLoading(true), setNavVisibility(false), setIconVisibility(false) }}>ATP Singles Race</Link>
        <Link to="/atp/doubles-race" className='nav-link' onClick={() => { setLoading(true), setNavVisibility(false), setIconVisibility(false) }}>ATP Doubles Race</Link>

        {/* WTA */}
        <Link to="/wta/singles" className='nav-link' onClick={() => { setLoading(true), setNavVisibility(false), setIconVisibility(false) }}>WTA Singles</Link>
        <Link to="/wta/doubles" className='nav-link' onClick={() => { setLoading(true), setNavVisibility(false), setIconVisibility(false) }}>WTA Doubles</Link>
        <Link to="/wta/singles-race" className='nav-link' onClick={() => { setLoading(true), setNavVisibility(false), setIconVisibility(false) }}>WTA Singles Race</Link>
        <Link to="/wta/doubles-race" className='nav-link' onClick={() => { setLoading(true), setNavVisibility(false), setIconVisibility(false) }}>WTA Doubles Race</Link>

      </div>
    </>
  )
}
