import { serve } from 'node-edge-runtime';
import app from './worker';

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
});
