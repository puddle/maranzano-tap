var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(req, res, next) {
  if (req.body.action !== "Track") {
    res.status(400);
    return res.json({message: "Only Track events are supported"});
  }
  var event = {
    name: req.body.event,
    uid: req.body.userId || req.body.anonymousId,
    properties: req.body.properties
  }
  models.Event.create(event).then(function(event) {

  }, function(error) {
    res.status(400);
    res.json({message: error.message});
  });
  res.json(event);
});

module.exports = router;
