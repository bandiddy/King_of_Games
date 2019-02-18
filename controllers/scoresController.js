const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Score
      .findAll({
        order: [
          ['score', 'DESC'],
        ],
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByGame: function(req, res) {
    db.Score
      .findAll({where: {game:req.params.game},
      order: [
        ['score', 'DESC']
      ]})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Score
      .findOne({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Score
      .create({
        game: req.body.game,
        score: req.body.score,
        username: req.body.username
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Score
      .update(req.body, { id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Score
      .destroy({ where: { id: req.params.id } })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
