import React from 'react';

import IconLogo from './shared/Loading/IconLogo';
import PlayerCard from './PlayerCard';

import { getMostRecentMonday } from '../utils/getMostRecentMonday';

import './Rankings.css';

export default function Rankings(props) {

  const { data, date, tour, type, loading, error } = props;

  const publishDate = getMostRecentMonday(date)

  // console.log('Inside RANKINGS component')
  // console.log(data[0])

  // LOADING
  if (loading) {
    return (
      <div className="rankings-container">
        <div className="loader-container heartbeat" id="rankings-loader">
          <IconLogo color="black" />
        </div>
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="rankings-container">
        <div className="rankings-hero-container">
          <h1 className="rankings-title">{`${tour} ${type} Rankings`}</h1>
        </div>
        <div className='error-container'>
          <h2 className='error'>Something went wrong. Please try again later.</h2>
        </div>
      </div>
    );
  }

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
