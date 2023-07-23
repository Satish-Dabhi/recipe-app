const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/", userController.createNewUser);

router.get("/:token", userController.getUserByToken);



module.exports = router;