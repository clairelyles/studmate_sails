module.exports = {

  create: function(req,res) {
    var matchData = {
      user: req.body.user,
      stud: req.body.stud
    }

    console.log(matchData)
    // console.log("MatchData", matchData);
    User.findOne(matchData.user)
      .exec(function(err,user) {
        if (err) res.send(400, err);
        user.studs.add(matchData.stud);
        user.save();
        res.send(matchData);
      });

}
};

