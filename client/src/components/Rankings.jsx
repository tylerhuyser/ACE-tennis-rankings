import React, { Suspense } from 'react'
import { useLocation } from "react-router-dom";

import IconLogo from './shared/Loading/IconLogo';
import PlayerCard from './PlayerCard';

export default function Rankings(props) {

  let location = useLocation()
  console.log(props)
  const { data, tour, discipline } = props

  console.log(data)
  console.log(tour)

  
  return (
    <>
      <div className='rankings-container'>

        <div className='rankings-hero-container'>

          <h2 className='rankings-title'>{`${tour.toUpperCase()} ${discipline.charAt(0).toUpperCase()}${discipline.split("-")[0].slice(1)} `}{discipline.split("-")[1] ? `${discipline.split("-")[1].charAt(0).toUpperCase()}${discipline.split("-")[1].slice(1)}` : ``}{' Rankings'}</h2>

        </div>

        <div className='players-container'>

          <Suspense fallback={   
            
              <div className="loader-icon heartbeat" id="rankings-loader">

                <IconLogo />

            </div>

          }>

            {data.map((player, index) => {

              return (

                <PlayerCard
                  playerData={player}
                  tour={tour}
                  discipline={discipline}
                />
              )
            })}

          </Suspense>

        </div>

      </div>
    </>
  )
}