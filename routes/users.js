var express = require('express');
var router = express.Router();

/*
    User Login 
*/
router.get('/login', (req, res, next)=> {
  res.render('login');
});

router.post('/login', (req, res, next)=>{
  //put logic in here
})


/*
    User-signup
*/

router.get('/signup', (req, res, next)=>{
  res.render('signup');
})

router.post('/signup', (req, res, next)=>{
  console.log(req.body);
  //put mongoose logic here
})

module.exports = router;
