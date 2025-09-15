const express = require('express');
const statusRoutes = require('./routes/routes');
const { notFoundHandler, globalErrorHandler } = require('./utils/errorHandler');
const { getRuntimeFlags } = require('./services/configService');

const app = express();

// Core middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (simple allow-all; swap with the `cors` package if needed)
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).send('');
  next();
});

// Routes
app.use('/', routes);

// 404 + error handlers
app.use('*', notFoundHandler);
app.use(globalErrorHandler);

// On boot, log which critical env vars are present
const flags = getRuntimeFlags();
console.log('Env vars loaded:', flags);

module.exports = app;
