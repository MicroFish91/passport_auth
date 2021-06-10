const express = require("express");
const app = express();
const helmet = require('helmet');
const cookieSession = require('cookie-session');
app.use(express.static('public'))
app.use(helmet())

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieSession({
  name: 'session',
  keys: ['ajkl12gcsacxzcxzb902j1kldabcxzhlweqaf'],
  maxAge: 14 * 24 * 60 * 60 * 1000
}))

app.get('/', (req, res) => {
    res.send('home page')
})

const authLogin = (req, res, next) => {
  if(req.session.username) {
    next();
  } else {
    res.redirect('/login');
  }
}

app.get('/admin/dashboard', authLogin, (req, res) => {
    res.send('admin page')
})

app.get('/admin/users', authLogin, (req, res) => {
  res.send('admin page')
})

app.get('/login', (req, res) => {
  res.render('login');
})

let users = [
  { username: 'Matt', password: '1234' },
  { username: 'Joe', password: '45234' },
  { username: 'David', password: '2234' },
  { username: 'Josh', password: '115134' }
]

app.post('/login', (req, res) => {
  const { userID, password } = req.body;
  const user = users.find(userRecord => {
    return userRecord.userName === userID && userRecord.password === password;
  });
  if(user !== null){
    req.session.username = userID;
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
})

app.listen(3000, () => {
  console.log("listening on port 3000");
});