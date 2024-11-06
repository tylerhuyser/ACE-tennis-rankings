import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from './components/shared/Layout/Layout'
import Rankings from './components/Rankings'

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
  let tour = pathName.split('/')[1].toUpperCase()
  let discipline = `${pathName.split('/')[2].split("-")[0].charAt(0).toUpperCase()}${pathName.split('/')[2].split("-")[0].slice(1)}`
  let race = pathName.split('/')[2].split("-")[1]

  console.log(`Current PathName: ${pathName}`)
  console.log(`Tour: ${tour}`)
  console.log(`Discipline: ${discipline}`)

  if (race) {
    console.log('Race Rankings')
    race = 'Race'
  } else if (!race) {
    console.log('Regular Rankings (Non-Race)')
    race = ''
  }

  const [loading, setLoading] = useState(false)
  const [rankingsData, setRankingsData] = useState([])

  const fetchFunctions = {
    'atp-singles': getATPSinglesData,
    'atp-singles-race': getATPSinglesRaceData,
    'atp-doubles': getATPDoublesData,
    'atp-doubles-race': getATPDoublesRaceData,
    'wta-singles': getWTASinglesData,
    'wta-singles-race': getWTASinglesRaceData,
    'wta-doubles': getWTADoublesData,
    'wta-doubles-race': getWTADoublesRaceData,
  };

  useEffect(() => {
    setLoading(true)
  }, [location])

  useEffect(() => {
    if (loading) {
      setRankingsData([])
    }
  }, [loading])

  useEffect(() => {
 
    if (rankingsData.length === 0) {

      async function fetchData(tour, discipline) {
      
        const key = `${tour.toLowerCase()}-${pathName.split('/')[2]}`
        const fetchFunction = fetchFunctions[key] || getATPSinglesData
  
        console.log(`FETCH - ${tour} ${discipline} data`)
        const data = await fetchFunction()
  
        setRankingsData(data.sort((a, b) => a.ranking - b.ranking))
    }
   
    fetchData(tour, discipline) 

    }
 

  }, [rankingsData])

  useEffect(() => {
    if (rankingsData.length > 0) {
      setLoading(false)
    }
  }, [rankingsData])

  return (
    <Layout setLoading={setLoading} >
        
        <Routes>

          <Route exact path="/atp/singles" element={<Rankings data={rankingsData} tour={tour} discipline={discipline} race={race} loading={loading} />} />

          <Route exact path="/atp/singles-race" element={<Rankings data={rankingsData} tour={tour} discipline={discipline} race={race} loading={loading} />} />

          <Route exact path="/atp/doubles" element={<Rankings data={rankingsData} tour={tour} discipline={discipline} race={race} loading={loading} />} />

          <Route exact path="/atp/doubles-race" element={<Rankings data={rankingsData} tour={tour} discipline={discipline} race={race} loading={loading} />} />

          <Route exact path="/wta/singles" element={<Rankings data={rankingsData} tour={tour} discipline={discipline} race={race} loading={loading} />} />

          <Route exact path="/wta/singles-race" element={<Rankings data={rankingsData} tour={tour} discipline={discipline} race={race} loading={loading} />} />

          <Route exact path="/wta/doubles" element={<Rankings data={rankingsData} tour={tour} discipline={discipline} race={race} loading={loading} />} />

          <Route exact path="/wta/doubles-race" element={<Rankings data={rankingsData} tour={tour} discipline={discipline} race={race} loading={loading} />} />

          <Route path="*" element={<Navigate to="/atp/singles" replace />} />

        </Routes>

    </Layout>
  )
}

export default App
