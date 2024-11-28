import React, { useEffect, useState, Suspense } from 'react';

// Lazy-load Helmet only for Client-side Rendering (CSR)
const HelmetLazy = React.lazy(() => import('react-helmet-async').then(module => ({ default: module.Helmet })));

import OGImage from '../../../assets/ace-tennis-rankings-cover-photo.001.jpeg';

export default function Head(props) {
  const { tour = '', discipline = '', race = '', currentUrl = '' } = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log(`Is Client? ${isClient}`);

  // Avoid rendering if necessary props are missing
  if (!tour || !discipline) return null;

  let path = ''; 
  let pageURL = ''; 

  if (typeof window !== "undefined") {
    // Client-side: use window.location
    path = window.location.pathname;
    pageURL = `${window.location.origin}${path}`;
  } else {
    // Server-side: use `currentUrl` passed as a prop or get it from req.originalUrl in the server
    path = currentUrl;
    pageURL = `https://rankings.gamesetblog.com${path}`;
  }

  const helmetContent = (
    <>
      <link rel="canonical" href={path === "/" ? 'https://rankings.gamesetblog.com/atp/singles' : pageURL} />
      <html lang="en" />

      <title>{`Tennis Rankings | ${tour} ${discipline} ${race} Rankings`}</title>
      <meta name="description" content={`${tour} ${discipline} ${race} Rankings | Browsing current singles, doubles, and annual race rankings for men's and women's tennis tours (ATP & WTA).`} />
      <meta property="og:title" content="ACE TENNIS RANKINGS" />
      <meta property="og:description" content="ATP and WTA Singles, Doubles, and Annual Race rankings." />
      <meta property="og:image" content={OGImage} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@gameset_blog" />
      <meta name="twitter:title" content={`Tennis Rankings | ${tour} ${discipline} ${race} Rankings`} />
      <meta name="twitter:description" content={`${tour} ${discipline} ${race} Rankings | Browsing current singles, doubles, and annual race rankings for men's and women's tennis tours (ATP & WTA).`} />
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
