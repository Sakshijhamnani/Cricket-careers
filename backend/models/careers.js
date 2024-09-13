const Sequelize = require('sequelize')

const sequelize = require('../util/database');

const Data = sequelize.define('cricketer',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    dob:{
        type:Sequelize.STRING,
        allowNull:false
    },
    imageUrl:{
        type:Sequelize.STRING,
        allowNull:false
    },
    birthPlace:{
        type:Sequelize.STRING,
        allowNull:false
    },
    careerDesc:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    matches:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    score:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    fifties:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    centuries:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    wickets:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    average:{
       type:Sequelize.DOUBLE,
       allowNull:false
    }

})

module.exports = Data