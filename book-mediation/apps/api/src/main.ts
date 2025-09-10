/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('API is running ✅');
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

