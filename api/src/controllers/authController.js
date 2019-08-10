const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.get_user = (req, res) => {
  return res.send(req.user);
};

exports.seed_user = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(500).send("Campos incompletos!");
  }
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  user.save().then(() => {
    res.send("ok");
  });
};

exports.get_token = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(500).send("Campos incompletos!");
  }
  User.forge({ email: req.body.email })
    .fetch()
    .then(result => {
      if (!result) {
        return res.status(500).send("El usuario ingresado no existe");
      }
      result
        .authenticate(req.body.password)
        .then(user => {
          const payload = { id: user.id };
          const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
          res.send(token);
        })
        .catch(err => {
          return res.status(500).send("La contraseña es incorrecta");
        });
    });
};

exports.protected = (req, res) => {
  res.send("i'm protected");
};
