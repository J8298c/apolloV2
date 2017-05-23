var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'ThunderHammer' });
});

router.get('/all', (req, res, next)=>{
  res.render('allworkouts', {name: 'StarLord'})
  console.log(name);
})

module.exports = router;
