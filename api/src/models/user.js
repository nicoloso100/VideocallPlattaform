const db = require('../utils/database/databaseConfig');

const User = db.Model.extend({
  tableName: 'login_user',
  hasSecurePassword: true
});

module.exports = User;
