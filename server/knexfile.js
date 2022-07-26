// Update with your config settings.

module.exports = {

  development: {
    client: 'mssql',
    connection: {
      server: 'localhost',
      user: 'WebClient',
      password: 'Secret1234',
      database: 'phonebook',
      port: 1433,
      "options": {
        "encrypt": true,
        "enableArithAbort": true,
        "ous": true
        }
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
