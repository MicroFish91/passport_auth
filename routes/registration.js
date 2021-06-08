const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');
const passport = require('passport');

router.get('/registration', (req, res) => {
  res.render('registration');
});

router.post('/registration', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const passwordEncrypted = bcrypt.hashSync(password, 8);

    const result = await db.users.create({
      username: username,
      password: passwordEncrypted,
      email: email,
      roleID: 2
    })

    res.redirect('/login');
  } 
  catch (err) {
    res.send(err);
  }
  
});

module.exports = router;