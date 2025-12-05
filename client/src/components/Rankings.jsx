import React from 'react';
import PlayerCard from './PlayerCard';
import { getMostRecentMonday } from '../utils/getMostRecentMonday';
import './Rankings.css';

export default function Rankings(props) {

  const { data, date, tour, type} = props;

  const publishDate = getMostRecentMonday(date)

  // NO DATA
  if (!data || data.length === 0) {
    return (
      <div className="rankings-container">
        <div className="rankings-hero-container">
          <h1 className="rankings-title">{`${tour} ${type} Rankings`}</h1>
        </div>
        <div className='no-data-container'>
          <h2>Rankings not available.</h2>
        </div>
      </div>
    );
  }

  // RANKINGS CARDS
  return (
    <div className="rankings-container">
      <div className="rankings-hero-container">
        <h1 className="rankings-title">{`${tour} ${type} Rankings`}</h1>
        <h2 className='rankings-date'>{`Published ${publishDate}`}</h2>
      </div>
      <div className="players-container">
        {data.map((player, index) => (
          <PlayerCard
            playerData={player}
            type={type}
            index={index}
            key={`${player.ranking}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
