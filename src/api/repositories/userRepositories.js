const User = require("../models/UserModel");

class userRepositories {

    async userCreate(fieldFirstName, fieldLastName) {
        try {
            const resulth = await User.create({firstName: fieldFirstName, lastName: fieldLastName});
            return { response: resulth.dataValues, query: true };
        } catch (error) {
            return  { message: error.errors[0].message } ;
        }
    }

    async usersRead() {
        try{
            const resulth = await User.findAll();
            return { response: resulth, query: true };
        } catch (error) {
            return  { message: error.errors[0].message };
        }
    }

    async userUpdate(userId, fieldNewFirstName, fieldNewLastName) {
        try{
            const resulth = await User.update({ firstName: fieldNewFirstName, lastName: fieldNewLastName}, // Retorna [Numero de alterações]
                    { where: {
                        id: userId
                    }}
                )
            return { response: resulth, query: true };
        } catch (error) {
            return  { message: error.errors[0].message };
        }
    }

    async userDelete(userId) {
        try{
            const resulth = await User.destroy({where: { // Retorna 1 ou 0
                id: userId
            }});
            return { response: resulth, query: true };
        } catch (error) {
            return  { message: error.errors[0].message };
        }
    }
}

module.exports = new userRepositories();