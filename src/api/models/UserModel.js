const Sequelize = require("sequelize");
const DATABASE = require("../Database/database");

const User = DATABASE.define("User", {
        //Attributes
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        //Options
        tableName: "Users", //Informando o nome da tabela
        freezeTableName: true, //Interroper pluralização nome da tabela automatico; padrao(false) 
        timestamps: true, // criar coluna (createAt) e (updateAt) na tabela; padrão(true)
        createAt: true,
        updateAt: true
    }
)

User.sync({force: false});

module.exports = User;