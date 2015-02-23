var bcrypt = require('bcrypt');

module.exports = {
  // Server Side Login function
  login: function(req, res) {
    User.findOne({where:{email:req.body.email}})
    .exec(function(err, user) {
      if (err) return res.send(err);
      if (user) {
        bcrypt.compare(req.body.password, user.password, function(err, match) {
          if (match) {
            req.session.user = user;
            res.send({result:true, user:user});
          } else {
            res.send({
              result: false,
              error: 'Incorrect password. Please try again.'
            });
          }
        })
      } else {
        res.send({
          result: false,
          error: 'User not found. Please sign up.'
        });
      }
    })
  },
  // Server Side Logout function
  logout: function(req, res) {
    delete req.session.user;
    res.send({result: true});
  },
  // Server Side Check for Session --> if non-logged in user accesses /browse.html, req.session.user is false!
  check: function(req, res) {
    res.send({
      user: (req.session.user || false)
    });
  }
};