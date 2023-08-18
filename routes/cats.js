var express = require('express');
var router = express.Router();


// /cats...

const ROOT_URL = 'https://catfact.ninja'

/* GET users listing. */
router.get('/', function(req, res, next) {
  fetch(`${ROOT_URL}/fact`)
    .then(res => res.json())
    .then(catData => {
      console.log(catData);
      res.render('cats/index', { catData, title: 'cat fact' });
    })
});

module.exports = router;
