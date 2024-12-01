import React, { useEffect, useState, Suspense } from 'react';

// Lazy-load Helmet only for Client-side Rendering (CSR)
const HelmetLazy = React.lazy(() => import('react-helmet-async').then(module => ({ default: module.Helmet })));
// import { Helmet } from 'react-helmet-async'; 
// import pkg from 'react-helmet-async';
// const {Helmet} = pkg;

import OGImage from '../../../assets/ace-tennis-rankings-cover-photo.001.jpeg';

export default function Head(props) {
  const { pageContext, tour = '', type = '', currentUrl = '' } = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log(`Is Client? ${isClient}`);

  // Avoid rendering if necessary props are missing
  if (!tour || !type) return null;

  let path = ''; 
  let pageURL = ''; 

  if (typeof window !== "undefined") {
    // Client-side: use window.location
    path = window.location.pathname;
    pageURL = `${window.location.origin}${path}`;
  } else {
    // Server-side: use `currentUrl` passed as a prop or get it from req.originalUrl in the server
    path = pageContext.urlOriginal;
    console.log(`Head.js - SSR Path: ${path}`)
    pageURL = `https://rankings.gamesetblog.com${path}`;
  }

  console.log(`Head.js Tour: ${tour}`)
  console.log(`Head.js Type: ${type}`)
  console.log(`Head.js: ${pageURL}`)

  const helmetContent = (
    <>
      <link rel="canonical" href={pageURL} />
      {/* <html lang="en" /> */}

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

  if (!isClient) {
    return <>{helmetContent}</>;
  }

  // For Client-Side Rendering (CSR)
  return (
    <div>
      <Suspense fallback={null}>
        <HelmetLazy>{helmetContent}</HelmetLazy>
      </Suspense>
    </div>
  );
}
