import express from 'express';
import { renderPage } from 'vike/server'; // Ensure vike is installed

// Fix for Helmet import
import pkg from 'react-helmet-async';
const { Helmet } = pkg; // Use default import and destructure

const app = express();

// Serve static files in production (adjust paths as needed)
app.use(express.static('dist/client'));

// SSR route
app.get('*', async (req, res, next) => {
  const url = req.originalUrl;
  
  try {
    const result = await renderPage({ urlOriginal: url });

    // If nothing is rendered, forward the request to the next middleware
    if (result.nothingRendered) return next();

    // Handle errors during rendering
    if (result.errorWhileRendering) {
      console.error(result.errorWhileRendering);
      return res.status(500).send('Internal Server Error');
    }

    // Check if the result contains HTML before proceeding
    if (!result.html) {
      console.warn('No HTML generated for the requested URL:', url);
      return res.redirect(302, '/'); // Redirect to root for invalid cases
    }

    // Pass `currentUrl` to the Head component
    const html = result.html.replace(
      '</head>',
      `<script>
        window.__CURRENT_URL__ = "${url}";
      </script></head>`
    );
    res.status(result.statusCode).send(html);

  } catch (err) {
    console.error('Unexpected error during rendering:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
