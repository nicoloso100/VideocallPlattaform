const knex = require('knex');
const knexDb = knex({
    client: 'pg',

    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'nicky246',
        database: 'jwt_test'
    },
    pool: {
        min: 0,
        max: 50
    }
});
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');
const db = bookshelf(knexDb);
db.plugin(securePassword);

module.exports = db;
