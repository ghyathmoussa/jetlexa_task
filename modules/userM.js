const Sequelize = require('sequelize');
const sequelize = require('../server');

const User = sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        required:true,
    },
    email:{
        type:Sequelize.STRING,
        required:true,
    },
    password:{
        type:Sequelize.STRING,
        required:true,
    },
    repassword:{
        type:Sequelize.STRING,
        required:true
    },
    
});

module.exports = User;
