"use strict";

module.exports = function(req, res, next) {
  req.requestTime = Date(Date.now());
  next();
};
