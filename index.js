"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Initialize database
require("./lib/database")();

// Intialize Routes
const routes = require("./routes/routes");
app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info(`Server running on port ${PORT}`));
