const express = require('express');
const router = express.Router();

/*
    User Login 
*/
router.get('/login', (req, res, next)=> {
  res.render('login');
});

router.post('/login', (req, res, next)=>{
  //put logic in here
});


/*
    User-signup
*/

router.get('/signup', (req, res, next)=>{
  res.render('signup');
});

router.post('/signup', (req, res, next)=>{
  console.log(req.body);
  //put mongoose logic here
    //then render profile page
});

/*
  edit profile
 */

router.get('/edit', (req, res, next)=>{
  //find user by req.params
});

router.put('/edit', (req, res, next)=>{
  //find user by body.name and edit fields
});

/*
delete profile
 */

router.delete('/delete', (req, res, next)=>{
    //find and delete user from DB
});

module.exports = router;
