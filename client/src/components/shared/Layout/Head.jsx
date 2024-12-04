import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async'

import OGImage from '../../../assets/ace-tennis-rankings-cover-photo.001.jpeg';

export default function Head(props) {

  const { pageContext, tour = '', type = '' } = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Avoid rendering if necessary props are missing
  // if (!tour || !type) return null;

  let path = ''; 
  let pageURL = ''; 

  if (typeof window !== "undefined") {
    // Client-side:
    path = window.location.pathname;
    pageURL = `${window.location.origin}${path}`;
  } else {
    // Server-side:
    path = pageContext.urlOriginal.replace(/\/index\.pageContext\.json$/, '');
    console.log(`Head.js - SSR Path: ${path}`)
    pageURL = process.env.NODE_ENV === 'production' ? `https://rankings.gamesetblog.com${path}` : `http://localhost:3000${path}`
  }

  // console.log(`Head.js Tour: ${tour}`)
  // console.log(`Head.js Type: ${type}`)
  // console.log(`Head.js: ${pageURL}`)

  const helmetContent = (
    <>
      <link rel="canonical" href={pageURL} />

      <title>{`Tennis Rankings | ${tour} ${type} Rankings`}</title>
      <meta name="description" content={`${tour} ${type} Rankings | Browsing current singles, doubles, and annual race rankings for men's and women's tennis tours (ATP & WTA).`} />
      <meta property="og:title" content="ACE TENNIS RANKINGS" />
      <meta property="og:description" content="ATP and WTA Singles, Doubles, and Annual Race rankings." />
      <meta property="og:image" content={OGImage} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@gameset_blog" />
      <meta name="twitter:title" content={`Tennis Rankings | ${tour} ${type} Rankings`} />
      <meta name="twitter:description" content={`${tour} ${type} Rankings | Browsing current singles, doubles, and annual race rankings for men's and women's tennis tours (ATP & WTA).`} />
      <meta name="twitter:image" content={OGImage} />

    </>
  );

  return (
    <Helmet>
      {helmetContent}
    </Helmet>
  )
}