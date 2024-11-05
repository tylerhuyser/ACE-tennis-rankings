import React from 'react'
import { Link } from "react-router-dom"

import "./Nav.css"

export default function Nav() { 
  
  return (
    <>
      <div className='nav-container'>

        <Link to="/rankings/atp/singles">ATP Singles Rankings</Link>
        <Link to="/rankings/atp/doubles">ATP Doubles Rankings</Link>
        <Link to="/rankings/atp/singles-race">ATP Singles Race Rankings</Link>
        <Link to="/rankings/atp/doubles-race">ATP Doubles Race Rankings</Link>

        <Link to="/rankings/wta/singles">WTA Singles Rankings</Link>
        <Link to="/rankings/wta/doubles">WTA Doubles Rankings</Link>
        <Link to="/rankings/wta/singles-race">WTA Singles Race Rankings</Link>
        <Link to="/rankings/wta/doubles-race">WTA Doubles Race Rankings</Link>

      </div>
    </>
  )
}
