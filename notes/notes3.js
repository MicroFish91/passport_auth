const express = require("express");
const app = express();
const helmet = require('helmet');
//request ===> middleware ==> route
app.use(express.static('public'))
app.use(helmet())
/*  
[
    public,
    helmet
    app.all('/')
    ['/', '/about]
]
*/
app.all('/', (req, res, next) => {
    console.log('log some data');
    next();
})
app.get('/', (req, res) => {
    res.send('home page')
})
const home = (req, res, next) => {
    console.log(`I'm home right now`)
    next()
}
const authLogin = (req, res, next) => {
    let passwordIsValid = false; 
    if(passwordIsValid){
        next();
    }
    else{
        res.redirect('/');
    }
}
app.get('/about', authLogin, (req, res) => {
    res.send('about page')
})
app.listen(3000, () => {
  console.log("listening on port 3000");
});