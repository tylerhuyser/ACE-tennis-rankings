import React from 'react'
import ReactCountryFlag from "react-country-flag"
import { convertISO3CountryCode } from 'country-code-converter'

import "./PlayerCard.css"

export default function WTAPlayerCard(props) {

  const { playerData, discipline, race, index } = props

  // console.log(playerData)
  
  return (
    <div className='player-card' key={`${playerData.ranking}${index}`}>

      <p className='player-ranking'>{playerData.ranking}</p>

      <div className='player-country-container'>
        
        <div className='flag-container'>

          <ReactCountryFlag
            className="emojiFlag"
            countryCode={ discipline === "Doubles" && race === "Race" ? playerData?.player1?.countryCode ? convertISO3CountryCode(playerData?.player1?.countryCode).ISO2 : "" : playerData?.player?.countryCode ? convertISO3CountryCode(playerData?.player?.countryCode).ISO2 : "" }
            style={{
              fontSize: '200%',
              lineHeight: '50px',
            }}
          />

          {discipline === 'Doubles' && race === 'Race' ? 
            
              <>
              
                / 
            
                <ReactCountryFlag
                  className="emojiFlag"
                  countryCode={playerData?.player2?.countryCode ? convertISO3CountryCode(playerData?.player2?.countryCode).ISO2 : ""}
                  style={{
                    fontSize: '200%',
                    lineHeight: '50px',
                  }}
                />
          
            </> 

            :

            <></>
            
          }

        </div>

        <div className='country-name-container'>
            <p className='player-country'>{ discipline === "Doubles" && race === "Race" ? `${playerData?.player1?.countryCode} / ${playerData?.player2?.countryCode}`  : playerData?.player?.countryCode}</p>
        </div>

      </div>

      <div className='player-name-container'>
        <p className='player-name'>{(discipline === "Doubles" && race === "Race") ? `${playerData?.player1?.fullName} / ${playerData?.player2?.fullName}` : playerData?.player?.fullName}</p>
      </div>

      <p className='player-points'>{`${playerData.points} points`}</p>

      {playerData.tournamentsPlayed ?
        
        <p className='player-tournaments'>{`${playerData.tournamentsPlayed} tourneys`}</p>

      :
        <></>

      }

    </div>
  )
}