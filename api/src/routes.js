module.exports = function (app) {
    var mailer = require("../../controllers/mailerController");

    app.route("/sendMail").post(mailer.send_email);
};
