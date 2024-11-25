import { createServer } from 'vike';

const server = createServer({
  root: __dirname,
});

server.listen(3000, () => {
  console.log('ACE Tennis Rankings SSR server is running at http://localhost:3000');
});