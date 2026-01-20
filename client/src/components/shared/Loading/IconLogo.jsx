import React from 'react';
import '../../../index.css'

const IconLogo = (props) => (



  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" width="96" height="51">
    <title>Logo</title>
    <g transform="translate(3.000000, 3.000000)">
      <g>
        
        <text x="24" y="32" fontFamily="oswald" fontSize="24px" fontStretch="semi-expanded" letterSpacing="3px" fill={props.color}>ACE</text>
        <polygon
          id="Shape"
          stroke={props.color}
          fill="transparent"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="0 0 45 0 45 10 45 0 90 0 90 22.5 87 22.5 90 22.5 90 45 45 45 45 35 45 45 0 45 0 22.5 3 22.5 0 22.5 0 0 10 0 10 45 80 45 80 0"
        />
      </g>
    </g>
  </svg>
);

export default IconLogo