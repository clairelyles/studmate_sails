module.exports = {

  getStuds: function(req,res) {
    var data = User.find();
    res.send("taco");
  },

  create: function(req,res) {

    var matchData = {
      user: req.body.user,
      stud: req.body.stud
    }

    User.findOne(matchData.user)
      .exec(function(err,user) {
        if (err) res.send(400, err);
        user.studs.add(matchData.stud);
        user.save();
        res.send(matchData);
      });

  }
};

