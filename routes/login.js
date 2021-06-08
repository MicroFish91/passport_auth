const db = require('../models');
const express = require('express');
const passport = require('passport');
const localStrategy = require('../config/strategies/localStrategy.js');
const router = express.Router();

localStrategy();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
  res.send('you made it through.');
})

module.exports = router;