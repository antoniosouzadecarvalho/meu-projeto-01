const userRepositories = require("../repositories/userRepositories");
const userConstants = require("./userConstants");

class userService {


    async userCreate(fieldFirstName, fieldLastName) {


        const resulth = await userRepositories.userCreate(fieldFirstName, fieldLastName);

        if(resulth.query){
            return { status: 200, response: resulth.response, message: userConstants.userCreate }
        }else {
            return { status: 500, message: resulth.message }
        }

    }

    async userRead() {

        const resulth = await userRepositories.usersRead();

        if(resulth.query){
            return {status: 200, response: resulth}
        }else {
            return {status: 500, message: resulth.message}
        }
    }

    async userUpdate(userId, fieldNewFirstName, fieldNewLastName) {

        const resulth = await userRepositories.userUpdate(userId, fieldNewFirstName, fieldNewLastName);

        if(resulth.query){
            return { status: 200, message: `${userConstants.userUpdate}: ${resulth.response}`};
        }else {
            return { status: 500, message: resulth.message };
        }
    }

    async userDelete(userID) {

        const resulth = await userRepositories.userDelete(userID);

        if(resulth.query){
            return { status: 200, message: userConstants.userDelete }
        }else {
            return { status: 500, message: resulth.message}
        }
    }

}

module.exports = new userService();