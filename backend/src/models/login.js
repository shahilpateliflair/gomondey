const {  DataTypes } = require('sequelize');

const sequelize = require('../routes/connection')

const User = sequelize.define(
    'User',
    
    {
      email: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
            isEmail: true, // Validate email format
          },
          unique:true
      },
     
      password: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
    },
   
        {
            tableName: 'Users',
   
          },
   
  );
  module.exports = User;