const router = require('express').Router();
const passport = require('./utils/authentication/passport');

//Controllers
const mailerController = require("./controllers/mailerController");
const authController = require("./controllers/authController");

//Mailer
router.post("/sendMail", mailerController.send_email);
//Authentication
router.get('/getUser', passport.authenticate('jwt', { session: false }), authController.get_user);
router.post('/seedUser', authController.seed_user);
router.post('/getToken', authController.get_token);
router.get('/protected', passport.authenticate('jwt', { session: false }), authController.protected);

module.exports = router;
