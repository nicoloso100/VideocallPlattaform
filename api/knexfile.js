// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'nicky246',
      database: 'jwt_test'
    },
    pool: { min: 0, max: 50 }
  }
};
