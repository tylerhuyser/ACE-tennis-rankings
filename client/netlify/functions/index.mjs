const { builder } = require('@netlify/functions')
const { renderPage } = require("vike/server");

const handler = async (event, context) => {
  try {
    const pageContext = await renderPage({ urlOriginal: event.rawUrl });
    if (!pageContext.httpResponse) {
      return { statusCode: 200 };
    }

    console.log(pageContext.httpResponse.statusCode, event.rawUrl);

    return {
      statusCode: pageContext.httpResponse.statusCode,
      headers: { "Content-Type": pageContext.httpResponse.contentType },
      body: pageContext.httpResponse.body,
    };
  } catch (error) {
    console.error("Error rendering page:", error);
    return {
      statusCode: 500,
      body: "Internal Server Error",
    };
  }
};

exports.handler = builder(handler)
