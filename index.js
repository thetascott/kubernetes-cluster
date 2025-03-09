require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const client = require('prom-client');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DB_URI,
});

// Create a new registry
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Custom Metric Example: HTTP Request Counter
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
});
register.registerMetric(httpRequestCounter);

// Middleware to count requests
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.inc({ method: req.method, route: req.path, status_code: res.statusCode });
  });
  next();
});

// Route to check database connection
app.get("/", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.send("Database connection successful!");
  } catch (err) {
    res.status(500).send("Database connection failed: " + err.message);
  }
});

// Expose metrics endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  });

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});