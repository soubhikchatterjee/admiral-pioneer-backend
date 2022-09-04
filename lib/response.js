"use strict";
const DB_RECORDS_LIMIT = 10;

function getSkip(page, limit) {
  page = +page || 1;
  limit = +limit || getLimit();
  const skip = (page - 1) * limit;
  return skip;
}

function getLimit(limit) {
  limit = limit || DB_RECORDS_LIMIT;
  return +limit;
}

module.exports = {
  getLimit,
  getSkip,
};
