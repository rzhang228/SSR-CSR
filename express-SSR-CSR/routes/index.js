var express = require('express');
var router = express.Router();

router.get('/demo1', function(req, res, next) {
  res.send(require('../demo1.html'));
});

module.exports = router;
