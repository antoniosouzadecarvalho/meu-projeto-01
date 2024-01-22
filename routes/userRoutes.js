const express = require("express");
const router = express.Router();

const userController = require("../src/api/controllers/userController");


router.get("/read-user", userController.usersReade);
router.get("/update-user/:id", userController.userUpdate);
router.get("/delete-user/:id", userController.userDelete);
router.post("/create-user", userController.userCreate);





module.exports = router;