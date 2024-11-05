import React from 'react'

import Nav from './Nav'

import './Layout.css'

export default function Layout(props) {
  
  return (
    <div className='layout-container'>

      <Nav />

      <div className='body-container'>

        {props.children}
        
      </div>

    </div>
  )
}