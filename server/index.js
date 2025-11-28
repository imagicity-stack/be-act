const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiRoutes = require('./routes');

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './' });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(async () => {
    const server = express();
    server.use(express.json());

    try {
      await connectDB();
    } catch (err) {
      console.error('DB connection failed', err.message);
    }

    server.use('/api', apiRoutes);

    server.all('*', (req, res) => handle(req, res));

    const port = process.env.PORT || 3000;
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Server init error', err);
  });
