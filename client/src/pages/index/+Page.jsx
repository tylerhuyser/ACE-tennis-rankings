export { Page }

import App from '../../App';

function Page({ pageContext }, client) {

  console.log('HOME (Index) - +Page.jsx')

  return (
    <App pageContext={pageContext} client={client} />
  );
}
