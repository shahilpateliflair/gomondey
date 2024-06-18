// models/add.js

const { DataTypes } = require('sequelize');
const sequelize = require('../routes/connection');

const AddData = sequelize.define('AddData', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    definition: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subcategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    duration: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
}, {
    tableName: 'AddData',
});

module.exports = AddData;
