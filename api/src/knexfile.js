// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: 'psapp',
            password: 'nicky246',
            database: 'psapp'
        },
        pool: { min: 0, max: 50 }
    }
};