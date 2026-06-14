const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Security headers and CORS
app.use(helmet());
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Request logging (quiet during tests)
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// API routes
app.use('/api', require('./routes/hello'));

// 404 — no route matched
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Centralized error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: 'Internal Server Error' });
});

module.exports = app;
