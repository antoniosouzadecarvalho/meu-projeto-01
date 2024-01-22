const Sequelize = require("sequelize");

//Conexão com o DATABASE(MySql) passando parâmetros separadamente
const DATABASE = new Sequelize('projeto-01', 'root', 'NHCJ@7130', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00',
    logging: console.log
});


module.exports = DATABASE;