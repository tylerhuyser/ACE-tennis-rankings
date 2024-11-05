import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Rankings from "./components/Rankings"


import './App.css'

function App() {

  let location = useLocation()
  let pathName = location.pathname
  let tour = pathName.split('/')[1]
  let discipline = pathName.split('/')[2]

  console.log(`Current PathName: ${pathName}`)
  console.log(`Tour: ${tour}`)
  console.log(`Discipline: ${discipline}`)

  // ATP Rankings
  const [ATPSingles, setATPSingles] = useState([])
  const [ATPDoubles, setATPDoubles] = useState([])
  const [ATPSinglesRace, setATPSinglesRace] = useState([])
  const [ATPDoublesRace, setATPDoublesRace] = useState([])

  // WTA Rankings
  const [WTASingles, setWTASingles] = useState([])
  const [WTADoubles, setWTADoubles] = useState([])
  const [WTASinglesRace, setWTASinglesRace] = useState([])
  const [WTADoublesRace, setWTADoublesRace] = useState([])

  useEffect(() => {

  }, [])

  return (
    <>
      <Routes>

        <Route path="/atp/singles" element={<Rankings data={ATPSingles} tour={tour} discipline={discipline} />} />

        <Route path="/atp/doubles" element={<Rankings data={ATPDoubles} tour={tour} discipline={discipline} />} />

        <Route path="/atp/single-race" element={<Rankings data={ATPSinglesRace} tour={tour} discipline={discipline} />} />

        <Route path="/atp/doubles-race" element={<Rankings data={ATPDoublesRace} tour={tour} discipline={discipline} />} />

        <Route path="/wta/singles" element={<Rankings data={WTASingles} tour={tour} discipline={discipline} />} />

        <Route path="/wta/doubles" element={<Rankings data={WTADoubles} tour={tour} discipline={discipline} />} />

        <Route path="/wta/single-race" element={<Rankings data={WTASinglesRace} tour={tour} discipline={discipline} />} />

        <Route path="/wta/doubles-race" element={<Rankings data={WTADoublesRace} tour={tour} discipline={discipline} />} />

        <Route path="*" element={<Navigate to="/atp/singles" replace />} />

      </Routes>
    </>
  )
}

export default App
