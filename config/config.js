const env = require('./env.js');

module.exports = {
"development": {
    "username": "postgres",
    "password": env.DB_PASSWORD,
    "database": "auth_june2021",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
