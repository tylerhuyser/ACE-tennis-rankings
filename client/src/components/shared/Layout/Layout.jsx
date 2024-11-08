import React, {useState, useEffect} from 'react'

import Header from './Header'
import Nav from './Nav'

import './Layout.css'

export default function Layout(props) {

  const { setLoading } = props

  const [navVisibility, setNavVisibility] = useState(false)
  const [iconVisibility, setIconVisibility] = useState(false)
  
  console.log(window.innerWidth)

  useEffect(() => {
    if (window.innerWidth > 768) {
      console.log('Window Widened - resetting NavVisibility State')
      setNavVisibility(false)
    }
  }, [window.innerWidth])


  
  return (
    <div className='layout-container'>

      <Header navVisibility={navVisibility} setNavVisibility={setNavVisibility} iconVisibility={iconVisibility} setIconVisibility={setIconVisibility} />
      
      <Nav setLoading={setLoading} navVisibility={navVisibility} setNavVisibility={setNavVisibility} iconVisibility={iconVisibility} setIconVisibility={setIconVisibility} />

      <div className='body-container'>

        {props.children}
        
      </div>

    </div>
  )
}