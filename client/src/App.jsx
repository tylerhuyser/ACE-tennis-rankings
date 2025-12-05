import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from './components/shared/Layout/Layout';
import Rankings from './components/Rankings';

import './App.css';

function App({ pageContext }) {

  const { rankings = [], lastUpdated = "" } = pageContext.data || {};

  const pathSegments = pageContext.urlOriginal.replace(/\/index\.pageContext\.json$/, '').split('/');
  const tour = pathSegments[1] ? pathSegments[1].toUpperCase() : "ATP";
  const typeSegment = pathSegments[2] || "singles";
  const type = typeSegment.split('-').map((word, i) => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ').replace('Singles', 'Singles').replace('Doubles', 'Doubles');

  // console.log(`App.js - Path: ${pageContext.urlOriginal}`);
  // console.log(`App.js - Tour: ${tour}`);
  // console.log(`App.js - Type: ${type}`);

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
                  <Layout pageContext={pageContext} tour={tour} type={type}>
                    <Rankings
                      data={rankings}
                      date={lastUpdated}
                      tour={tour}
                      type={type}
                    />
                  </Layout>
              }/>
            )
          )}
        </Routes>
        
    </>
  );
}

export default App;