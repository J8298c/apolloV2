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

router.get('/workout/:name', (req, res, next)=>{
  res.render('workout', 
  {name: req.params.name,
    workout:[{
      name: 'jog',
      set: '10 mins',
      reps: 1
    },{
      name: 'pullups',
      set: 3,
      reps: 3
    },{
      name: 'pushups',
      set: 3,
      reps: 10
    },{
      name: 'squats',
      set: 3,
      reps: 10
    },{
      name: 'lat pull-down',
      set: 5,
      reps: 10
    },{
      name: 'dumbbell-rows',
      set: 5,
      reps: 10
    },{
      name: 'barbell-curls',
      set: 5,
      reps: 10
    },{
      name: 'curls',
      set: 5,
      reps: 10
    }]
  })
});

module.exports = router;
