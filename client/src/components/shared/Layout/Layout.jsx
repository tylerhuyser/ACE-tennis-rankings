import React from 'react'

import Header from './Header'
import Nav from './Nav'

import './Layout.css'

export default function Layout(props) {

  const {setLoading} = props
  
  return (
    <div className='layout-container'>

      <Header />
      
      <Nav setLoading={setLoading} />

      <div className='body-container'>

        {props.children}
        
      </div>

    </div>
  )
}