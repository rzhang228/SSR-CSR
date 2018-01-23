var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/demo2', async function(req, res, next) {
  var { data } = await axios.get('http://localhost:4000/api/test')
  res.render('demo2', { data });
});

router.get('/demo4', async function(req, res, next) {
  var { data } = await axios.get('http://localhost:4000/api/test')
  res.render('demo4', { data });
});

module.exports = router;
