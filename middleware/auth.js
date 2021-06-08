const authReq = (req, res, next) => {
  // passport adds isAuthenticated
  if(req.isAuthenticated()) {
    next();
  } else (
    res.redirect('/login')
  )
}

module.exports = authReq;