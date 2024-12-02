import React from 'react';

import IconLogo from './shared/Loading/IconLogo';
import ATPPlayerCard from './ATPPlayerCard';
import WTAPlayerCard from './WTAPlayerCard';

import './Rankings.css';

export default function Rankings(props) {

  const { data, tour, type, loading, error } = props;

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
      </div>
      <div className="players-container">
        {tour === 'ATP'
          ? data.map((player, index) => (
              <ATPPlayerCard
                playerData={player}
                type={type}
                index={index}
                key={`${player.ranking}-${index}`}
              />
            ))
          : data.map((player, index) => (
              <WTAPlayerCard
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
