export { Page }

import App from '../../App';

function Page({ pageContext }) {

  console.log('HOME (Index) - +Page.jsx')

  return (
    <App pageContext={pageContext} />
  );
}
