const db = require("../models");

// Defining methods for the GoalssController
module.exports = {

  findAll: function(req, res) {
    db.Goals
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Goals
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("req.body", req.body)
    db.Goals
      .create(req.body)
      .then(dbModel => {
        console.log("dbModel", dbModel)
        res.json(dbModel)
      })
      .catch(err => {res.status(422).json(err)
        console.log("err", err);
        console.log("status(422)", status(422));
      });
  },


  //this is where we need to map the step
  update: function(req, res) {
    console.log("req.body",req.body);
    console.log("req.params.id",req.params.id);
    db.Goals
      .updateOne({_id: req.params.id }, {$set: req.body} )
      .then(dbModel => {
        res.json(dbModel)  
        console.log("dbModel", dbModel);
      })
      .catch(err => {res.status(422).json(err)
        console.log("err", err);
      });
  },

  remove: function(req, res) {
    db.Goals
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
