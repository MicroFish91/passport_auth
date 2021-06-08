const express = require('express');
const router = express.Router();
const authReq = require('../middleware/auth.js');

router.get('/', authReq, (req, res) => {
  res.send('home page');
});

module.exports = router;