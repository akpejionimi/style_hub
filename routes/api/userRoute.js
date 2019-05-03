const express = require("express");
const userController = require ('../../controllers/user');
const upload = require ('../../middlewares/upload')

const router = express.Router();


router.get("/",userController.getUser);
// router.post("/", userController.postAddUser)

// Creates a new user and
// processes an image upload via upload.single("image_field_name") middleware
router.post("/",upload.single('imageUrl'),userController.postAddUser);


router.delete("/:id", userController.deleteUser);

module.exports = router;