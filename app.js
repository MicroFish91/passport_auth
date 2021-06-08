const cookieSession = require('cookie-session');
const env = require('./config/env.js');
const express = require('express');
const helmet = require('helmet');
const passport = require('passport');
const app = express();
const port = 3000;

// Public
app.use(express.static('public'));
app.use(helmet());

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

// Views
app.set('view engine', 'ejs');

// Cookie-session
app.use(cookieSession({
  name: 'session',
  keys: [env.PP_SECRET], 
  maxAge: 14 * 24  * 60 * 60 * 1000
}))

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(require('./routes/login'));
app.use(require('./routes/registration'));
app.use(require('./routes'));

app.listen(port, () => console.log(`Listening on port ${port}`));