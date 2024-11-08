import React from 'react';
import { Helmet } from 'react-helmet-async';
import OGImage from "../../../assets/ace-tennis-scores-cover-image.jpeg"

function Head(props) {

  const {tour, discipline, race} = props

  return (
    <div>
      <Helmet>
        <title>{`ACE TENNIS RANKINGS | ${tour} ${discipline} ${race} Rankings`}</title>
        <meta name="description" content="ATP and WTA Singles, Doubles, and Annual Race rankings." />
        <meta property="og:title" content="ACE TENNIS RANKINGS" />
        <meta property="og:description" content="ATP and WTA Singles, Doubles, and Annual Race rankings." />
        <meta property="og:image" content={OGImage} />
      </Helmet>
    </div>
  );
}