"use strict"
const mongoose = require("mongoose");

function initializeDatabase() {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  );
}

module.exports = initializeDatabase;
