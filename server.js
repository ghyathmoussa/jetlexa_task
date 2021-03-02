
const Sequelize = require('sequelize');
const sequelize = new Sequelize('task','root','199911gh',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;
