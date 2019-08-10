const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.get_user = (req, res) => {
  return res.send(req.user);
};

exports.seed_user = (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(500).send("Campos incompletos!");
  }
  console.log(req.body);
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  console.log(user);
  user.save().then(() => {
    res.send("ok");
  });
};

exports.get_token = (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(500).send("Campos incompletos!");
  }
  User.forge({ username: req.body.username })
    .fetch()
    .then(result => {
      if (!result) {
        return res.status(500).send("El usuario ingresado no existe");
      }
      result
        .authenticate(req.body.password)
        .then(user => {
          const payload = { username: user.username };
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
