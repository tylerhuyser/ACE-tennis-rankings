import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Rankings from "./components/Rankings"

import {
  getATPSinglesData,
  getATPSinglesRaceData,
  getATPDoublesData,
  getATPDoublesRaceData,
  getWTASinglesData,
  getWTASinglesRaceData,
  getWTADoublesData,
  getWTADoublesRaceData
} from "./services/index"

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
  const [ATPSinglesRace, setATPSinglesRace] = useState([])
  const [ATPDoubles, setATPDoubles] = useState([])
  const [ATPDoublesRace, setATPDoublesRace] = useState([])

  // WTA Rankings
  const [WTASingles, setWTASingles] = useState([])
  const [WTASinglesRace, setWTASinglesRace] = useState([])
  const [WTADoubles, setWTADoubles] = useState([])
  const [WTADoublesRace, setWTADoublesRace] = useState([])

  useEffect(() => {


    if (tour === "atp" && discipline === "singles") {

      async function getData() {

        console.log(`FETCH - ${tour} ${discipline} data`)

        const data = await getATPSinglesData()
        setATPSingles(data)
      }

      getData()

    } else if (tour === "atp" && discipline === "singles-race") {

      async function getData() {

        console.log(`FETCH - ${tour} ${discipline} data`)

        const data = await getATPSinglesRaceData()
        setATPSinglesRace(data)

      }

      getData()
        
    } else if (tour === "atp" && discipline === "doubles") {

      async function getData() {

        console.log(`FETCH - ${tour} ${discipline} data`)

        const data = await getATPDoublesData()
        setATPDoubles(data)
      }

      getData()
        
    } else if (tour === "atp" && discipline === "doubles-race") {

      async function getData() {

        console.log(`FETCH - ${tour} ${discipline} data`)

        const data = await getATPDoublesRaceData()
        setATPDoublesRace(data)
      }

      getData()

    } else if (tour === "wta" && discipline === "singles") {

      async function getData() {

        console.log(`FETCH - ${tour} ${discipline} data`)

        const data = await getWTASinglesData()
        setWTASingles(data)

      }

      getData()

    } else if (tour === "wta" && discipline === "singles-race") {
        
      async function getData() {

        console.log(`FETCH - ${tour} ${discipline} data`)

        const data = await getWTASinglesRaceData()
        setWTASinglesRace(data)
        
      }

      getData()

    } else if (tour === "wta" && discipline === "doubles") {

      async function getData() {

        console.log(`FETCH - ${tour} ${discipline} data`)

        const data = await getWTADoublesData()
        setWTADoubles(data)

      }

      getData()
        
    } else if (tour === "wta" && discipline === "doubles-race") {

      async function getData() {

        console.log(`FETCH - ${tour} ${discipline} data`)

        const data = await getWTADoublesRaceData()
        setWTADoublesRace(data)

      }

      getData()
      
    } else {

      async function getData() {

        console.log(`FETCH - ${tour} ${discipline} data`)

        const data = await getATPSinglesData()
        setATPSingles(data)
      }

      getData()
      
    }

  }, [location])

  return (
    <>
      <Routes>

        <Route exact path="/atp/singles" element={<Rankings data={ATPSingles} tour={tour} discipline={discipline} />} />

        <Route exact path="/atp/singles-race" element={<Rankings data={ATPSinglesRace} tour={tour} discipline={discipline} />} />

        <Route exact path="/atp/doubles" element={<Rankings data={ATPDoubles} tour={tour} discipline={discipline} />} />

        <Route exact path="/atp/doubles-race" element={<Rankings data={ATPDoublesRace} tour={tour} discipline={discipline} />} />

        <Route exact path="/wta/singles" element={<Rankings data={WTASingles} tour={tour} discipline={discipline} />} />

        <Route exact path="/wta/singles-race" element={<Rankings data={WTASinglesRace} tour={tour} discipline={discipline} />} />

        <Route exact path="/wta/doubles" element={<Rankings data={WTADoubles} tour={tour} discipline={discipline} />} />

        <Route exact path="/wta/doubles-race" element={<Rankings data={WTADoublesRace} tour={tour} discipline={discipline} />} />

        <Route path="*" element={<Navigate to="/atp/singles" replace />} />

      </Routes>
    </>
  )
}

export default App
