'use strict';

var _ = require('lodash');
var Mileslog = require('./milesLog.model');

// Get list of milesLogs
exports.index = function(req, res) {
  Mileslog.find(function (err, milesLogs) {
    if(err) { return handleError(res, err); }
    return res.json(200, milesLogs);
  });
};

// Get a single milesLog
exports.show = function(req, res) {
  Mileslog.findById(req.params.id, function (err, milesLog) {
    if(err) { return handleError(res, err); }
    if(!milesLog) { return res.send(404); }
    return res.json(milesLog);
  });
};

// Creates a new milesLog in the DB.
exports.create = function(req, res) {
  Mileslog.create(req.body, function(err, milesLog) {
    if(err) { return handleError(res, err); }
    return res.json(201, milesLog);
  });
};

// Updates an existing milesLog in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mileslog.findById(req.params.id, function (err, milesLog) {
    if (err) { return handleError(res, err); }
    if(!milesLog) { return res.send(404); }
    var updated = _.merge(milesLog, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, milesLog);
    });
  });
};

// Deletes a milesLog from the DB.
exports.destroy = function(req, res) {
  Mileslog.findById(req.params.id, function (err, milesLog) {
    if(err) { return handleError(res, err); }
    if(!milesLog) { return res.send(404); }
    milesLog.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}