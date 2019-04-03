const express = require("express");
const userController = require ('../../controllers/user');
const router = express.Router();


router.get("/",userController.getUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;