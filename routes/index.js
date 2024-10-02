var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Landing Page' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

/* GET basic calculator page. */
router.get('/basic_cal', function(req, res, next) {
  res.render('basic_cal', { title: 'Basic Calculator' });
});

/* GET salary calculator page. */
router.get('/salary_cal', function(req, res, next) {
  res.render('salary_cal', { title: 'Salary Calculator' });
});

module.exports = router;
