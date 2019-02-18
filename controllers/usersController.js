const db = require("../models");
const passport = require("passport");

module.exports = {
    createUser: function(req, res){
        db.User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }).then(function () {
            res.redirect(307, "/");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    }
}
