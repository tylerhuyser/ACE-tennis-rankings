import React from 'react'

import IconLogo from './shared/Loading/IconLogo';
import ATPPlayerCard from './ATPPlayerCard';
import WTAPlayerCard from './WTAPlayerCard';

import './Rankings.css'

export default function Rankings (props) {

  const { data, tour, discipline, race, loading } = props
  
  return (
    <>
      
      {loading || data.length === 0 ?
        
        <div className="loader-container heartbeat" id="rankings-loader">

          <IconLogo color="black" />

        </div>
      
        :

        <div className='rankings-container'>

          <div className='rankings-hero-container'>

            <h2 className='rankings-title'>{`${tour} ${discipline} ${race} Rankings`}</h2>

          </div>

          <div className='players-container'>

            {tour === 'ATP' ?
              <>
                {data.map((player, index) => (
                  <ATPPlayerCard
                    playerData={player}
                    discipline={discipline}
                    race={race}
                    index={index}
                    key={`${player.ranking}${index}`}
                />))}       
              </>
            :
              <>
                {data.map((player, index) => (
                  <WTAPlayerCard
                    playerData={player}
                    discipline={discipline}
                    race={race}
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