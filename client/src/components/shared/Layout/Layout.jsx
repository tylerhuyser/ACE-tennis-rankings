import React, {useState} from 'react'

import Head from "./Head"
import Header from './Header'
import Nav from './Nav'

import './Layout.css'

export default function Layout(props) {

  const { pageContext, setLoading } = props

  const {tour, type } = props

  const [navVisibility, setNavVisibility] = useState(false)
  const [iconVisibility, setIconVisibility] = useState(false)
  
  return (

    <>

      {/* <Head pageContext={pageContext} tour={tour} type={type}></Head> */}

      <div className='layout-container'>

        <Header navVisibility={navVisibility} setNavVisibility={setNavVisibility} iconVisibility={iconVisibility} setIconVisibility={setIconVisibility} />
          
        <Nav setLoading={setLoading} navVisibility={navVisibility} setNavVisibility={setNavVisibility} iconVisibility={iconVisibility} setIconVisibility={setIconVisibility} />

        <div className='body-container'>

          {props.children}
            
        </div>

      </div>
      
    </>
  )
}