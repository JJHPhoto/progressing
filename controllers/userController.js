const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.User.find()
      .populate({path: 'goalsSet', model: 'Goals'})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log('finding user')
    db.User.findById(req.params.id)
      .populate({path: 'goalsSet', model: 'Goals'})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
