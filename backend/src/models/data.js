const { DataTypes } = require('sequelize');
const sequelize = require('../routes/connection');

const Data = sequelize.define('data', {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.TIME,
        allowNull: false,
    },
}, {
    tableName: 'data',
});

module.exports = Data;
