import React from 'react'

import IconLogo from './shared/Loading/IconLogo';
import ATPPlayerCard from './ATPPlayerCard';
import WTAPlayerCard from './WTAPlayerCard';

import './Rankings.css'

export default function Rankings (props) {

  const { data, tour, type, loading } = props
  
  return (
    <>
      
      {loading || data.length === 0 ?
        
        <div className="loader-container heartbeat" id="rankings-loader">

          <IconLogo color="black" />

        </div>
      
        :

        <div className='rankings-container'>

          <div className='rankings-hero-container'>

            <h1 className='rankings-title'>{`${tour} ${type} Rankings`}</h1>

          </div>

          <div className='players-container'>

            {tour === 'ATP' ?
              <>
                {data.map((player, index) => (
                  <ATPPlayerCard
                    playerData={player}
                    type={type}
                    index={index}
                    key={`${player.ranking}${index}`}
                />))}       
              </>
            :
              <>
                {data.map((player, index) => (
                  <WTAPlayerCard
                    playerData={player}
                    type={type}
                    index={index}
                    key={`${player.ranking}${index}`}
                  />
                ))}
              </>
            }

          </div>

        </div>
      }

    </>
  )
}