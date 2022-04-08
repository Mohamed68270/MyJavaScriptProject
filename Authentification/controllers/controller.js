const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/model");
const userValidation = require("../validation/validation");
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

exports.inscription = (req, res) => {
  // recuperer les données
  const { body } = req;
  // Valider les données
  const { error } = userValidation(body);
  if (error) return res.status(401).json(error.details[0].message);
  // hash du mdp
  bcrypt
    .hash(body.password, 10)
    .then((hash) => {
      if (!hash) return res.status(500).json({ msg: "Serveur Error" });

      delete body.password;
      new User({ ...body, password: hash })
        .save()
        .then((user) => {
          console.log(user);
          res.status(201).json({ msg: "User Created" });
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

exports.connexion = (req, res) => {
  res.send("connexion");
};
// 4/7
