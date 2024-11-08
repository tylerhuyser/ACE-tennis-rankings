import React from 'react';
import { Helmet } from 'react-helmet-async';
import OGImage from '../../../assets/ace-tennis-rankings-cover-photo.001.jpeg'

export default function Head (props) {

  const { tour = '', discipline = '', race = '' } = props;
  console.log(`Props Test ${OGImage}`)
  console.log(`Props Test ${tour}`)

  if (!tour || !discipline) return null;

  return (
    <div>
      <Helmet>
        <title>{`Tennis Rankings | ${tour} ${discipline} ${race} Rankings`}</title>
        <meta name="description" content="ATP and WTA Singles, Doubles, and Annual Race rankings." />
        <meta property="og:title" content="ACE TENNIS RANKINGS" />
        <meta property="og:description" content="ATP and WTA Singles, Doubles, and Annual Race rankings." />
        <meta property="og:image" content={OGImage} />
      </Helmet>
    </div>
  );
}