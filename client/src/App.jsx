import React from 'react';
import { useState, useEffect, useMemo, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from './components/shared/Layout/Layout';
import Rankings from './components/Rankings';

import {
  getATPSinglesData,
  getATPSinglesRaceData,
  getATPDoublesData,
  getATPDoublesRaceData,
  getWTASinglesData,
  getWTASinglesRaceData,
  getWTADoublesData,
  getWTADoublesRaceData
} from "./services/index";

import './App.css';

function App({ pageContext }, props) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log(`App.jsx - Client or Server? ${isClient ? 'CLIENT ACTIVE' : 'SERVER ACTIVE'}`);

  const [error, setError] = useState(props.error || false)
  console.log(`Error? ${error}`)


  const [loading, setLoading] = useState(false);
  const [rankingsData, setRankingsData] = useState(pageContext.data || []);

  let location;
  if (typeof window !== 'undefined') {
    location = useLocation();
  }

  const pathName = useMemo(() => {
    if (typeof window !== "undefined") {
      return location.pathname;
    } else {
      return pageContext.urlOriginal || "/";
    }
  }, [location, pageContext]);
  

  const { tour, type } = useMemo(() => {
    const pathSegments = pathName.split('/')
    let tour = pathName === "/" ? "ATP" : pathSegments[1]?.toUpperCase()
    let type = pathName === "/" ? "Singles" : `${pathSegments[2]?.split('-')[0][0].toUpperCase()}${pathSegments[2]?.split('-')[0].slice(1)}`

    if (pathSegments[2] && pathSegments[2].split('-').length === 2) {
      type = type + ` Race`
    }

    return { tour, type }
    
  }, [pathName])

  console.log(`App.js - Path: ${pathName}`);
  console.log(`App.js - Tour: ${tour}`);
  console.log(`App.js - Type: ${type}`);
 
  const prevParams = useRef({ tour, type }); // Track previous params

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

  // Effect to fetch data
  useEffect(() => {
    const hasParamsChanged =
      tour !== prevParams.current.tour ||
      type !== prevParams.current.type

    // Fetch data only if parameters change or if it's the first render
    if ((hasParamsChanged || rankingsData.length === 0) && !error) {

      async function fetchData() {

        setLoading(true);

        const key = (pathName === "/") ? "atp-singles" : `${tour?.toLowerCase()}-${type.split(" ")[0].toLowerCase()}${type.includes("Race")? `-race` : ''}`;
        const fetchFunction = fetchFunctions[key]

        console.log(`Fetching data for ${tour} ${type}`);

        try {
          const data = await fetchFunction();
          setRankingsData(data.sort((a, b) => a.ranking - b.ranking));
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error)
        }
        setLoading(false);
        prevParams.current = { tour, type };
      }

      fetchData();

    } else if (!hasParamsChanged) {
      setLoading(false)
    }
  }, [tour, type]);

  const routesConfig = [
    {path: "/"},
    { path: "/atp/singles" },
    { path: "/atp/singles-race" },
    { path: "/atp/doubles" },
    { path: "/atp/doubles-race" },
    { path: "/wta/singles" },
    { path: "/wta/singles-race" },
    { path: "/wta/doubles" },
    { path: "/wta/doubles-race" },
  ];

  return (

    <>
      
        <Routes>
          {routesConfig.map(({ path }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Layout pageContext={pageContext} setLoading={setLoading} tour={tour} type={type}>
                    <Rankings data={rankingsData} tour={tour}  type={type} loading={loading} error={error} />
                  </Layout>
              }/>
            )
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
    </>
  );
}

export default App;
