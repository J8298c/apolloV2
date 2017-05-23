var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', (req, res, next)=> {
  res.render('login');
});

module.exports = router;
