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

function App({ pageContext }) {

  // console.log(`Page Context Begin`)
  // console.log(pageContext)

  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rankingsData, setRankingsData] = useState(pageContext?.data || []);
  const [error, setError] = useState(false)

  let location;
  if (typeof window !== 'undefined') {
    location = useLocation();
  }

  let pathName = location ? location.pathname : pageContext.urlOriginal || '/'

  const { tour, discipline, race } = useMemo(() => {
    const pathSegments = pathName.split('/');
    const tour = pathName === "/" ? "ATP" : pathSegments[1]?.toUpperCase();
    const discipline = pathName === "/" ? "Singles" : `${pathSegments[2]?.split('-')[0][0].toUpperCase()}${pathSegments[2]?.split('-')[0].slice(1)}`;
    const race = pathName === "/" ? "" :  pathSegments[2]?.includes('race') ? 'Race' : '';
    return { tour, discipline, race };
  }, [pathName]);

  console.log(`App.js - Path: ${pathName}`);
  console.log(`App.js - Tour: ${tour}`);
  console.log(`App.js - Discipline: ${discipline}`);
  console.log(`App.js - Race: ${race}`);
 
  const prevParams = useRef({ tour, discipline, race }); // Track previous params

  useEffect(() => {
    setIsClient(true);
  }, []);

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
      discipline !== prevParams.current.discipline ||
      race !== prevParams.current.race;

    // Fetch data only if parameters change or if it's the first render
    if ((hasParamsChanged || rankingsData.length === 0) && !error) {

      async function fetchData() {

        setLoading(true);

        const key = (pathName === "/") ? "atp-singles" : `${tour?.toLowerCase()}-${discipline.toLowerCase()}${race ? `-race` : ''}`;
        const fetchFunction = fetchFunctions[key]

        console.log(`Fetching data for ${tour} ${discipline} ${race}`);

        try {
          const data = await fetchFunction();
          setRankingsData(data.sort((a, b) => a.ranking - b.ranking));
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error)
        }
        setLoading(false);
        prevParams.current = { tour, discipline, race };
      }

      fetchData();

    } else if (!hasParamsChanged) {
      setLoading(false)
    }
  }, [tour, discipline, race, loading]); // Dependency on tour, discipline, and race

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
                  <Layout pageContext={pageContext} setLoading={setLoading} tour={tour} discipline={discipline} race={race}>
                    <Rankings data={rankingsData} tour={tour} discipline={discipline} race={race} loading={loading} />
                  </Layout>
              }/>
            )
        )}
          {isClient ? <Route path="*" element={<Navigate to="/" replace />} /> : null}
        </Routes>
    </>
  );
}

export default App;
