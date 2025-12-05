export { Page }

import App from '../../../App';

function Page({ pageContext }) {


  console.log('[TOUR][TYPE]- +Page.jsx')

  return (
      <App pageContext={pageContext} />
  );
}