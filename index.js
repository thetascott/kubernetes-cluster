require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DB_URI,
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

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});