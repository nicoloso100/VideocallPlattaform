const db = require("../utils/database/databaseConfig");

const User = db.Model.extend({
  idAttribute: false,
  tableName: "client_users",
  hasSecurePassword: true
});

module.exports = User;
