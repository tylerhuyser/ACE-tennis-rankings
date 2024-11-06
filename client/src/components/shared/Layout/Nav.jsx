import React from 'react'
import { Link } from "react-router-dom"

import "./Nav.css"

export default function Nav(props) { 

  const { setLoading } = props
  
  return (
    <>
      <div className='nav-container'>

        <Link to="/atp/singles" className='nav-link' onClick={setLoading} >ATP Singles</Link>
        <Link to="/atp/doubles" className='nav-link' onClick={setLoading}>ATP Doubles</Link>
        <Link to="/atp/singles-race" className='nav-link' onClick={setLoading}>ATP Singles Race</Link>
        <Link to="/atp/doubles-race" className='nav-link' onClick={setLoading}>ATP Doubles Race</Link>

        <Link to="/wta/singles" className='nav-link' onClick={setLoading}>WTA Singles</Link>
        <Link to="/wta/doubles" className='nav-link' onClick={setLoading}>WTA Doubles</Link>
        <Link to="/wta/singles-race" className='nav-link' onClick={setLoading}>WTA Singles Race</Link>
        <Link to="/wta/doubles-race" className='nav-link' onClick={setLoading}>WTA Doubles Race</Link>

      </div>
    </>
  )
}
