const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gomondey', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' ,
    logging:false
  });
  async function syncDatabase() {
    try {
 
        await sequelize.sync();
        console.log('Models synced with database.');
    } catch (error) {
        console.error('Error syncing models with database:', error);
    }
}

syncDatabase();


  module.exports=sequelize;





