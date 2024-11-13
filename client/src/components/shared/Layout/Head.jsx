import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import OGImage from '../../../assets/ace-tennis-rankings-cover-photo.001.jpeg'

export default function Head (props) {

  const { tour = '', discipline = '', race = '' } = props;
  // console.log(`Props Test ${OGImage}`)
  // console.log(`Props Test ${tour}`)

  if (!tour || !discipline) return null;

  const location = useLocation()
  const path = location.pathname
  console.log(`Head.jsx - Path: ${path}`)
  const pageURL = `${window.location.origin}${path}`
  console.log(`Head.jsx - PageURL: ${pageURL}`)
  console.log(path === "/")

  return (
    <div>
      <Helmet>
        <title>{`Tennis Rankings | ${tour} ${discipline} ${race} Rankings`}</title>
        <meta name="description" content="ATP and WTA Singles, Doubles, and Annual Race rankings." />
        <meta property="og:title" content="ACE TENNIS RANKINGS" />
        <meta property="og:description" content="ATP and WTA Singles, Doubles, and Annual Race rankings." />
        <meta property="og:image" content={OGImage} />
        <link rel="canonical" href={path === "/" ? 'https://rankings.gamesetblog.com/atp/singles' : pageURL} />
      </Helmet>
    </div>
  );
}