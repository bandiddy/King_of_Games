const db = require("../models");

module.exports = {
    findAll: function (req,res){
        db.User
        .findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req,res){
        db.User
        .create(req.username, req.password)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
};

