export { Page }

import App from '../../App';

function Page({ pageContext }, client) {
  return (
    <App pageContext={pageContext} client={client} />
  );
}
