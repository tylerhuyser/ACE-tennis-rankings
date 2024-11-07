import React, {useState} from 'react'

import Header from './Header'
import Nav from './Nav'

import './Layout.css'

export default function Layout(props) {

  const { setLoading } = props

  const [visibility, setVisibility ] = useState("hidden")
  
  console.log(window.innerWidth)
  
  return (
    <div className='layout-container'>

      <Header setVisibility={setVisibility} />
      
      <Nav setLoading={setLoading} visibility={visibility} />

      <div className='body-container'>

        {props.children}
        
      </div>

    </div>
  )
}