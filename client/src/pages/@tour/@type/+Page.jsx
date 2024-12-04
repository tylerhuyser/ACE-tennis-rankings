export { Page }

import App from '../../../App';

function Page({ pageContext }, client) {


  console.log('[TOUR][TYPE]- +Page.jsx')
  // console.log(`[Tour][Type] - +Page.jsx - PageContext.urlOriginal - ${pageContext.urlOriginal}`)
  // console.log(`[Tour][Type] - +Page.jsx - PageContext.data.length - ${pageContext.data.length}`)
  // console.log(`[Tour][Type] - +Page.jsx - PageContext.data - BEGIN`)
  // console.log(pageContext.data[0])
  // console.log(`[Tour][Type] - +Page.jsx - PageContext.data - END`)

  return (
      <App pageContext={pageContext} client={client} />
  );
}