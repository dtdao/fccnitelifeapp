var express = require('express');
var router = express.Router();
var mainCtrl = require("../controllers/main");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('results', { title: 'Express' });
});

router.get("/#", mainCtrl.search);

module.exports = router;
