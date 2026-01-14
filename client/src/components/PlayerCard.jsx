import React from 'react'
import { ReactCountryFlag } from "react-country-flag";
import { convertISO3CountryCode } from "country-code-converter";

import "./PlayerCard.css"

export default function PlayerCard({playerData, type, index}) {

  console.log(playerData)

  const isDoubles = type.includes("Doubles")
  const isRace = type.includes("Race")

  console.log(`Is Doubles? ${isDoubles}`)
  console.log(`Is Race? ${isRace}`)

  const renderName = () => {
    if (isDoubles && isRace) {

      const formatName = (fullName) => {
        const nameParts = fullName.split(' ');
        const lastName = nameParts[nameParts.length - 1];
        const firstName = nameParts.slice(0, -1).join(' ');
        
        return (
          <>
            <span className='player-last-name'>{lastName}</span>,
            <span className='player-first-name'> {firstName}</span>
          </>
        );
      };

      return (
        <>
          <p className='player-name player-name-line'>{formatName(playerData.player1.name)}</p>
          <p className='player-name player-name-line'>
            <span className=''>& </span>
            {formatName(playerData.player2.name)}
          </p>
        </>
      );
    }

    const nameParts = playerData?.name?.split(' ') || [];
    const lastName = nameParts.slice(-1).join(' ');
    const firstName = nameParts.slice(0, -1).join(' ');

    return (
      <>
        <p className='player-name player-last-name'>{lastName},</p>
        <p className='player-name player-first-name'>{firstName}</p>
      </>
    );
  }

  return (

    <div className='player-card' key={`${playerData.ranking}${playerData.points}${index}`}>

      {/* RANKING */}
      <div className='player-ranking-container player-card-section'>
        <p className='player-ranking'>{playerData.ranking}</p>
      </div>
      
      {/* COUNTRY/FLAGS */}
      <div className='player-country-container player-card-section'>

        <div className='flag-container'>

          <ReactCountryFlag
            className="emojiFlag"
            countryCode={isDoubles && isRace ? convertISO3CountryCode(playerData.player1.country).ISO2 : convertISO3CountryCode(playerData.country).ISO2}
            style={{
              fontSize: '2rem',
            }}
            aria-label="country flag"
          />

          {isDoubles && isRace && (
            
            <>
            
              <span className='flag-divider'>/</span>
  
              <ReactCountryFlag
                className="emojiFlag"
                countryCode={convertISO3CountryCode(playerData.player2.country).ISO2}
                style={{ fontSize: '2em' }}
                aria-label="country flag"
              />
        
            </>

          )}

        </div>

        <div className='country-name-container'>
          <p className="country-name">{isDoubles && isRace ? playerData.player1.country : playerData.country}</p>
          {isDoubles && isRace && (
            <>
              <span className='flag-divider'>/</span>
              <p className="country-name">{playerData.player2.country}</p>
            </>
          )}
        </div>

      </div>

      {/* PLAYER NAME */}
      <div className='player-name-container player-card-section'>
        {renderName()}
      </div>

      {/* POINTS */}
      <div className='player-points-container player-card-section'>
        <div className='stat-value'>{playerData.points}</div>
        <div className='stat-label'>points</div>
      </div>

      {/* TOURNAMENTS PLAYED */}
      {playerData.tournamentsPlayed && (
        <div className='player-tournaments-container player-card-section'>
          <div className='stat-value'>{playerData.tournamentsPlayed}</div>
          <div className='stat-label'>tourneys</div>
        </div>
      )}

    </div>
    
  )

}