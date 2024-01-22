const userService = require("../services/UserService");

class userController {

    async userCreate( req, res ) {
        const { fieldFirstName, fieldLastName } = req.body;

        const resulth = await userService.userCreate(fieldFirstName, fieldLastName);

        if(resulth.status == 200){
            const {status, response, message} = resulth;
            res.status(status).json({ response, message });
        }else {
            const {status, message} = resulth;
            res.status(status).json({ message });
        }
        

    }

    async usersReade( req, res) {

        const resulth = await userService.userRead();

        if(resulth.status == 200){
            const { status, response } = resulth;
            res.status(status).json({ response })
        }else {
            const { status, message } = resulth;
            res.status(status).json({ message })
        }
    }

    async userUpdate( req, res) {
        const userId = req.params.id;
        const { fieldNewFirstName, fieldNewLastName} = req.body;

        const resulth = await userService.userUpdate(userId, fieldNewFirstName, fieldNewLastName);

        if(resulth.status == 200){
            const { status, message} = resulth;
            res.status(status).json({ message });
        }else {
            const { status, message} = resulth;
            res.status(status).json({ message });
        }
    }

    async userDelete( req, res ) {
        const id = req.params.id;

        const resulth = await userService.userDelete(id);

        if(resulth.status == 200){
            const { status, message } = resulth;
            res.status(status).json({ message });
        }else {
            const { status, message } = resulth;
            res.status(status).json({ message });
        }
    }
}

module.exports = new userController();