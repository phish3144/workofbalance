'use stricz'
var express = require('express');
var router = express.Router();


/* GET Login Page */
router.get('/', function (req, res) {
    res.render('login', { title: 'Login | Work of balance'});
});

module.exports = router;

