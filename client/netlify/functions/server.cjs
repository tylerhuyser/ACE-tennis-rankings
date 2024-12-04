const { renderPage } = require('vite-plugin-ssr/server');

exports.handler = async (event, context) => {
  const urlOriginal = event.rawUrl.replace(`${event.headers['x-forwarded-proto']}://${event.headers.host}`, '');

  try {
    const pageContextInit = await renderPage({ urlOriginal });

    if (!pageContextInit.httpResponse) {
      return {
        statusCode: 404,
        body: 'Page not found',
      };
    }

    const { body, statusCode, headers } = pageContextInit.httpResponse;

    // Ensure headers are correctly set
    const isJsonRequest = urlOriginal.endsWith('.json');
    const contentType = isJsonRequest ? 'application/json' : 'text/html; charset=utf-8';

    return {
      statusCode,
      headers: {
        'Content-Type': contentType,
        ...headers, // Include any headers from renderPage
      },
      body,
    };
  } catch (error) {
    console.error('Error rendering page:', error);

    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
