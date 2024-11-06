import React from 'react'
import ReactCountryFlag from "react-country-flag"
import { convertISO3CountryCode } from 'country-code-converter'

import "./PlayerCard.css"


export default function ATPPlayerCard(props) {

  const { playerData, discipline, race } = props

  // console.log(playerData)
  
  return (
    <div className='player-card'>

      <p className='player-ranking'>{playerData.ranking}</p>

      <div className='player-country-container'>
        
        <div className='flag-container'>

          <ReactCountryFlag
            className="emojiFlag"
            countryCode={ discipline === "Doubles" && race === "Race" ? playerData?.player1?.country ? convertISO3CountryCode(playerData?.player1?.country).ISO2 : "" : playerData?.country ? convertISO3CountryCode(playerData?.country).ISO2 : "" }
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
                  countryCode={playerData?.player2?.country ? convertISO3CountryCode(playerData?.player2?.country).ISO2 : ""}
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
            <p className='player-country'>{ discipline === "Doubles" && race === "Race" ? `${playerData?.player1?.country} / ${playerData?.player2?.country}`  : playerData?.country}</p>
        </div>

      </div>

      <div className='player-name-container'>
        <p className='player-name'>{(discipline === "Doubles" && race === "Race") ? `${playerData?.player1?.name} / ${playerData?.player2?.name}` : playerData?.name}</p>
      </div>

      <p className='player-points'>{playerData.points}</p>

      {playerData.tournamentsPlayed ?
        
        <p className='player-tournaments'>{playerData.tournaments_played}</p>

      :
        <></>

      }

    </div>
  )
}