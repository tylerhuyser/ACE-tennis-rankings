import React, {useState} from 'react'

import Head from "./Head"
import Header from './Header'
import Nav from './Nav'

import './Layout.css'

export default function Layout(props) {

  const { setLoading } = props

  const {tour, discipline, race } = props

  const [navVisibility, setNavVisibility] = useState(false)
  const [iconVisibility, setIconVisibility] = useState(false)

  console.log("Layout Props:", { tour, discipline, race });
  
  return (

    <>

      <Head tour={tour} discipline={discipline} race={race}></Head>

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