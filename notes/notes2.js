const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const port = 3000;

// attaches req.session
app.use(cookieSession({
  name: 'session',
  keys: ['ageageageagea'],
  maxAge: 14 * 24 * 60 * 60 * 1000
}))

app.get('/', (req, res) => {
  req.session.fName = "Matthew";
  req.session.lName = "Fisher";
  res.send('homepage');
});

app.get('/about', (req, res) => {
  res.send('about');
});

app.listen(port, () => console.log('Listening on port 3000.'));