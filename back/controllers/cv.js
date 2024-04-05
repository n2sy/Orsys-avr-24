const Personne = require("../models/person");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");

exports.getAllPersons = async (req, res, next) => {
  // Personne.find().then(result => {
  //     res.status(200).json(result);
  // })
  //     .catch(err => {
  //         console.log(err);
  //     })

  const filter = req.query.filter;

  try {
    const result = await Personne.find({
      nom: new RegExp(filter, "i"),
    });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
exports.getPerson = (req, res, next) => {
  const pId = req.params.id;

  Personne.findById(pId)
    .then((p) => {
      if (!p) {
        const error = new Error("Could not find this person");
        error.statusCode = 404;
        next(error);
      }
      res.status(200).json(p);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.createPerson = (req, res, next) => {
  console.log(req.body);
  let newP = _.pick(req.body, ["prenom", "nom", "age", "profession"]);

  if (req.body.avatar) {
    const urlAvatar = req.protocol + "://" + req.get("host");
    newP.avatar = urlAvatar + "/avatars/" + req.body.avatar;
  }

  const newPerson = new Personne(newP);
  console.log(newP, newPerson);

  newPerson
    .save()
    .then((result) => {
      res.status(201).json({
        message: "New Person created successfully",
        result,
        id: result["_id"].toString(),
      });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
exports.updatePerson = (req, res, next) => {
  const pId = req.params["id"];
  // const prenom = req.body.prenom;
  // const nom = req.body.nom;
  // const age = req.body.age;
  // const profession = req.body.profession;
  // const avatar = req.body.avatar;

  Personne.findById(pId)
    .then((p) => {
      if (!p) {
        const error = new Error("Could not find this person");
        error.statusCode = 404;
        throw error;
      }
      // p.prenom = prenom;
      // p.nom = nom;
      // p.age = age;
      // p.profession = profession;
      // p.avatar = avatar;

      p = _.merge(p, req.body);

      return p.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Person updated successfully",
        result: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};
exports.deletePerson = (req, res, next) => {
  const pId = req.params["id"];
  Personne.findByIdAndRemove(pId)
    .then((p) => {
      console.log(p);
      if (!p) {
        const error = new Error("Could not find this person");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({
        message: "Person successfully deleted",
        result: p,
      });
    })
    .catch((err) => {
      next(err);
    });
};
