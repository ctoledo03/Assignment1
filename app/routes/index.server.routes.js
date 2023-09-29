const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Home' });
});

router.get('/aboutme', function(req, res, next) {
res.render('aboutme', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
res.render('projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
res.render('services', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
res.render('contact', { title: 'Contact' });
});

router.get('/formSubmit', function(req, res, next) {
    res.render('formSubmit', { title: 'Submit Form' });
});

router.post('/submit', (req, res) => {
    res.render('formSubmit', { data: req.body, title: 'Form Submitted' });
});

module.exports = router;
