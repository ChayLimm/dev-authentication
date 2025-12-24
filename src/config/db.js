const { Sequelize } = require('sequelize');

// The word 'db' here refers to the name of our database service in Docker
const sequelize = new Sequelize('auth_db', 'user', 'password', {
  host: 'db', 
  dialect: 'postgres',
});

module.exports = sequelize;